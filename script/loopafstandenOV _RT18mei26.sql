/* ====================================================================
 * 
 * 	Doel: maak basis loopafstandenkaart (rolstoeltoegankelijk) voor Amsterdam
 * 
 * 	Door: Mirsada, d.d. 10 feb 2026
 * 
 * 
 * ====================================================================
 */
--CREATE INDEX index_name ON table_name USING GIST (geometry_column);


-- N.b.: 	dit script gaat ervan uit dat er een bestand loopfietsnetwerk_amsterdam in het schema loopafstanden_ov staat.
-- 			zorg ervoor dat dit ingelezen is.


-- ========== zet geometrie in juiste format, mits de kolom in de oorspronkelijke tabel geometry heeft==========
---ALTER TABLE loopafstanden_ov.loopfietsnetwerk_amsterdam_m RENAME COLUMN geometry TO geom;

UPDATE loopafstanden_ov.loopfietsnetwerk_amsterdam_m
SET geom = ST_Transform(geom, 28992);

ALTER TABLE loopafstanden_ov.loopfietsnetwerk_amsterdam_m
  ALTER COLUMN geom  TYPE geometry (linestring, 28992)
    USING ST_SetSRID(geom,28992);

-- ====== maak topologie ==========
alter table loopafstanden_ov.loopfietsnetwerk_amsterdam_m add column source int null;
alter table loopafstanden_ov.loopfietsnetwerk_amsterdam_m add column target int null;
alter table loopafstanden_ov.loopfietsnetwerk_amsterdam_m add column cost float null;

update  loopafstanden_ov.loopfietsnetwerk_amsterdam_m
set cost = st_length(geom) where cost is null;

UPDATE loopafstanden_ov.loopfietsnetwerk_amsterdam_m
SET source = NULL, target = NULL;

SELECT pgr_createTopology('loopafstanden_ov.loopfietsnetwerk_amsterdam_m', 1.0, 'geom', 'id', rows_where:= 'source is null');


-- ========== maak tabel met vertices die dichtbij haltes liggen met filter visueeltoegankelijk =========
select count (*) 
from loopafstanden_ov.loopfietsnetwerk_amsterdam_m_vertices_pgr; 
--1126927


drop table if exists loopafstanden_ov.loopfietsnetwerk_amsterdam_rt_vertices_nabij_haltes;

select 
    a.*, 
    st_distance(
        st_transform(a.the_geom, 28992),
        st_transform(b.geom, 28992)
    ) as afstand_vertix_tot_halte
into loopafstanden_ov.loopfietsnetwerk_amsterdam_rt_vertices_nabij_haltes
from loopafstanden_ov.loopfietsnetwerk_amsterdam_m_vertices_pgr a
join loopafstanden_ov.haltesamsterdam b
  on st_dwithin(
        st_transform(a.the_geom, 28992),
        st_transform(b.geom, 28992),
        30
     )
where b.wheelchairaccess = true or id = 13791;

select count (*) 
from loopafstanden_ov.loopfietsnetwerk_amsterdam_rt_vertices_nabij_haltes; 
--27801

-- ============ maak selectie van vertices waarvoor je de loopafstand wilt berekenen ====


-- Index maken
CREATE INDEX vertices_geom_28992_idx 
ON loopafstanden_ov.loopfietsnetwerk_amsterdam_m_vertices_pgr 
USING GIST (the_geom_28992);


drop table if exists loopafstanden_ov.tmp_vertices_rt_run_nwamsterdam;

SELECT *
INTO loopafstanden_ov.tmp_vertices_rt_run_nwamsterdam
FROM loopafstanden_ov.loopfietsnetwerk_amsterdam_m_vertices_pgr
WHERE id IN (
    SELECT source
    FROM loopafstanden_ov.loopfietsnetwerk_amsterdam_m
    WHERE "indicatieVoetFiets" = 'Y'
      AND wegklasse != 'poi_verbinding'
      AND wegklasse != 'bgt_inrit'
      AND random() < 0.0001	-- Random sample 
    UNION ALL
    SELECT target
    FROM loopafstanden_ov.loopfietsnetwerk_amsterdam_m
    WHERE "indicatieVoetFiets" = 'Y'
      AND wegklasse != 'poi_verbinding'
      AND wegklasse != 'bgt_inrit'
      AND random() < 0.0001 -- Random sample
);

select count(*)
from loopafstanden_ov.tmp_vertices_rt_run_nwamsterdam;
-- Updated Rows	363

select count(*)
from loopafstanden_ov.loopfietsnetwerk_amsterdam_m_vertices_pgr;
-- 1126927

-- =================== run zo vaak je nodig vindt ===============
-- Doe dit daarna zo vaak je nodig vindt.
-- je voegt nu extra vertices aan de bestaande tabel toe. 
-- ik heb een clausule toegevoegd die ervoor zorgt dan je 
-- niet twee keer de loopafstand voor dezelfde vertix berekent


drop table if exists loopafstanden_ov.tmp_vertices_rt_run_nwamsterdam;
----------------------------------------run andere DO $$ 
SELECT *
INTO loopafstanden_ov.tmp_vertices_rt_run_nwamsterdam
FROM loopafstanden_ov.loopfietsnetwerk_amsterdam_m_vertices_pgr
where id not in (select start_vid from loopafstanden_ov.tmp_berekende_loopafstanden_rt_vertix_vertix)
and id IN (
    SELECT source
    FROM loopafstanden_ov.loopfietsnetwerk_amsterdam_m
    WHERE "indicatieVoetFiets" = 'Y'
      AND wegklasse != 'poi_verbinding'
      AND wegklasse != 'bgt_inrit'
      AND random() < 0.0001 -- Random sample 
    UNION ALL
    SELECT target
    FROM loopafstanden_ov.loopfietsnetwerk_amsterdam_m
    WHERE "indicatieVoetFiets" = 'Y'
      AND wegklasse != 'poi_verbinding'
      AND wegklasse != 'bgt_inrit'
      AND random() < 0.0001 -- Random sample 
);

with loopafstand_berekening as(
select 	*, 
row_number() over(partition by start_vid order by agg_cost)  as n
FROM 
	pgr_dijkstraCost('select id, source ,target, cost from loopafstanden_ov.loopfietsnetwerk_amsterdam_m',
	array(select id from loopafstanden_ov.tmp_vertices_rt_run_nwamsterdam), 
	array(select id from loopafstanden_ov.loopfietsnetwerk_amsterdam_rt_vertices_nabij_haltes)
	 , false))

select start_vid, end_vid, agg_cost
into loopafstanden_ov.tmp_berekende_loopafstanden_rt_vertix_vertix
from loopafstand_berekening 
where n = 1;



--------------------------------------
select count(*) from loopafstanden_ov.tmp_berekende_loopafstanden_rt_vertix_vertix;
--87557
select count(*) from loopafstanden_ov.tmp_vertices_rt_run_nwamsterdam;
--36168
select count(*) from loopafstanden_ov.loopfietsnetwerk_amsterdam_m_vertices_pgr
--1126927

--een loop 
BEGIN;
SET TRANSACTION READ WRITE;
DO $$
DECLARE
    row_count INTEGER; -- Variabele om het aantal rijen op te slaan
    iteration_count INTEGER := 0; -- Teller voor het aantal iteraties
BEGIN
    -- Loop die maximaal XX keer draait
    WHILE iteration_count < 15 LOOP
        -- Verhoog de teller
        iteration_count := iteration_count + 1;
 
        -- Stap 1: Drop de tijdelijke tabel als deze bestaat
        DROP TABLE IF EXISTS loopafstanden_ov.tmp_vertices_rt_run_nwamsterdam;
 
        -- Stap 2: Maak de tijdelijke tabel opnieuw aan
        CREATE TABLE loopafstanden_ov.tmp_vertices_rt_run_nwamsterdam AS
        SELECT *
        FROM loopafstanden_ov.loopfietsnetwerk_amsterdam_m_vertices_pgr
        WHERE id NOT IN (
            SELECT start_vid
            FROM loopafstanden_ov.tmp_berekende_loopafstanden_rt_vertix_vertix
        )
        AND id IN (
            SELECT source
            FROM loopafstanden_ov.loopfietsnetwerk_amsterdam_m
            WHERE "indicatieVoetFiets" = 'Y'
              AND wegklasse != 'poi_verbinding'
              AND wegklasse != 'bgt_inrit'
              AND random() < 0.0001 -- Random sample 
            UNION ALL
            SELECT target
            FROM loopafstanden_ov.loopfietsnetwerk_amsterdam_m
            WHERE "indicatieVoetFiets" = 'Y'
              AND wegklasse != 'po_verbinding'
              AND wegklasse != 'bgt_inrit'
              AND random() < 0.0001 -- Random sample 
        );

         -- Stap 3: Bereken loopafstanden
        WITH loopafstand_berekening AS (
            SELECT *,
                   row_number() OVER (PARTITION BY start_vid ORDER BY agg_cost) AS n
            FROM pgr_dijkstraCost(
                'SELECT id, source, target, cost FROM loopafstanden_ov.loopfietsnetwerk_amsterdam_m',
                ARRAY(SELECT id FROM loopafstanden_ov.tmp_vertices_rt_run_nwamsterdam),
                ARRAY(SELECT id FROM loopafstanden_ov.loopfietsnetwerk_amsterdam_rt_vertices_nabij_haltes),
                false
            )
        )
        INSERT INTO loopafstanden_ov.tmp_berekende_loopafstanden_rt_vertix_vertix (start_vid, end_vid, agg_cost)
        SELECT start_vid, end_vid, agg_cost
        FROM loopafstand_berekening
        WHERE n = 1;
 
        -- Stap 4: Print het aantal rijen in de tabel na elke iteratie
        SELECT COUNT(*) INTO row_count
        FROM loopafstanden_ov.tmp_berekende_loopafstanden_rt_vertix_vertix;
        RAISE NOTICE 'Iteratie %: Aantal rijen in tmp_berekende_loopafstanden_rt_vertix_vertix: %', iteration_count, row_count;
    END LOOP;
END $$;

COMMIT;
-------------




alter table loopafstanden_ov.tmp_berekende_loopafstanden_rt_vertix_vertix
add column geom geometry(point);

update loopafstanden_ov.tmp_berekende_loopafstanden_rt_vertix_vertix
set geom = g.the_geom
from  loopafstanden_ov.loopfietsnetwerk_amsterdam_m_vertices_pgr g 
where  start_vid  = g.id;



ALTER TABLE loopafstanden_ov.tmp_berekende_loopafstanden_rt_vertix_vertix
  ALTER COLUMN geom TYPE geometry(point, 28992)
    USING ST_SetSRID(geom,28992);

-- plot op kaart als check

-- ====== voorbereiden voronoi =======

drop table if exists loopafstanden_ov.tmp_amsterdam_rt_input_vor;

select v.id, v.the_geom, l.agg_cost  as afstand_nodus_nodus, h.afstand_vertix_tot_halte, agg_cost + afstand_vertix_tot_halte as afstand_totaal,
'onbekend' as cost_cat
into loopafstanden_ov.tmp_amsterdam_rt_input_vor
from loopafstanden_ov.tmp_berekende_loopafstanden_rt_vertix_vertix l
join loopafstanden_ov.loopfietsnetwerk_amsterdam_rt_vertices_nabij_haltes h    
	on l.end_vid  = h.id
left join loopafstanden_ov.loopfietsnetwerk_amsterdam_m_vertices_pgr v
on l.start_vid = v.id;

--80177
 
update 
loopafstanden_ov.tmp_amsterdam_rt_input_vor
set cost_cat =
case when afstand_totaal < 250 then '< 250'
	when afstand_totaal < 400 then '250-400'
	when afstand_totaal < 800 then '400-800'
	when afstand_totaal >= 800 then '>800' end;

select count(*) from loopafstanden_ov.tmp_amsterdam_rt_input_vor;
--80177

-- het niet-bemeten gebied gaan we straks van de voronois aftrekken

drop table if exists loopafstanden_ov.tmp_bemeten_rt_gebied_amsterdam;

SELECT 
    ST_Transform(ST_UnaryUnion(ST_Collect(ST_Buffer(the_geom, 100))), 28992) AS geom
 INTO 
    loopafstanden_ov.tmp_bemeten_rt_gebied_amsterdam
FROM 
    loopafstanden_ov.tmp_amsterdam_rt_input_vor;

select *
from loopafstanden_ov.loopfietsnetwerk_amsterdam_m_vertices_pgr g
join loopafstanden_ov.tmp_berekende_loopafstanden_rt_vertix_vertix	 c
on g.id = c.start_vid;


-- Voor het berekenen van de voronoi heb ik de plugin in qgis gebruikt van loopafstanden_ov.tmp_amsterdam_rt_input_vor
 
-- en de output ingelezen als loopafstanden_ov.rt_voronois_amsterdam1


-- ========= Maak nette polygonen voor loopafstanden < 250 m. ===========

drop table if exists loopafstanden_ov.tmp_voronois_rt_amsterdam_kleiner_dan_250;

drop table if exists loopafstanden_ov.tmp_voronois_rt_amsterdam_kleiner_dan_250_1;

drop table if exists loopafstanden_ov.tmp_voronois_rt_amsterdam_kleiner_dan_250_2;

select ST_UnaryUnion(ST_Collect(geom)) as geom
into loopafstanden_ov.tmp_voronois_rt_amsterdam_kleiner_dan_250_1
from loopafstanden_ov.rt_voronois_amsterdam1 
where cost_cat = '< 250';


select 
	st_intersection(a.geom,  ST_Transform(b.geom, 28992)) as geom
into 
	loopafstanden_ov.tmp_voronois_rt_amsterdam_kleiner_dan_250_2
from 
	loopafstanden_ov.tmp_voronois_rt_amsterdam_kleiner_dan_250_1 a, 
 	loopafstanden_ov.stadsdelen_inclusief_weesp b
where 
	st_overlaps(a.geom,   ST_Transform(b.geom, 28992)) or 
	st_within(a.geom,   ST_Transform(b.geom, 28992));

select 
	st_intersection(a.geom, b.geom) as geom
into 
	loopafstanden_ov.tmp_voronois_rt_amsterdam_kleiner_dan_250
from 
	loopafstanden_ov.tmp_voronois_rt_amsterdam_kleiner_dan_250_2 a, 
	loopafstanden_ov.tmp_bemeten_rt_gebied_amsterdam b
where 
	st_overlaps(a.geom, b.geom) or st_within(a.geom, b.geom);


-- ========= Maak nette polygonen voor loopafstanden 250-400 m. ===========

drop table if exists loopafstanden_ov.tmp_voronois_rt_amsterdam_250_400;

drop table if exists loopafstanden_ov.tmp_voronois_rt_amsterdam_250_400_1;

drop table if exists loopafstanden_ov.tmp_voronois_rt_amsterdam_250_400_2;

select ST_UnaryUnion(ST_Collect(geom)) as geom
into loopafstanden_ov.tmp_voronois_rt_amsterdam_250_400_1
from loopafstanden_ov.rt_voronois_amsterdam1 
where cost_cat = '250-400';

select 
	st_intersection(a.geom,  ST_Transform(b.geom, 28992)) as geom
into 
	loopafstanden_ov.tmp_voronois_rt_amsterdam_250_400_2
from 
	loopafstanden_ov.tmp_voronois_rt_amsterdam_250_400_1 a, 
 	loopafstanden_ov.stadsdelen_inclusief_weesp b
where 
	st_overlaps(a.geom,   ST_Transform(b.geom, 28992)) or 
	st_within(a.geom,   ST_Transform(b.geom, 28992));


select 
	st_intersection(a.geom, b.geom) as geom
into 
	loopafstanden_ov.tmp_voronois_rt_amsterdam_250_400
from 
	loopafstanden_ov.tmp_voronois_rt_amsterdam_250_400_2 a,
	loopafstanden_ov.tmp_bemeten_rt_gebied_amsterdam b
where 
	st_overlaps(a.geom,   ST_Transform(b.geom, 28992)) or 
	st_within(a.geom,   ST_Transform(b.geom, 28992));


-- ========= Maak nette polygonen voor loopafstanden 400-800 m. ===========

drop table if exists loopafstanden_ov.tmp_voronois_rt_amsterdam_400_800;

drop table if exists loopafstanden_ov.tmp_voronois_rt_amsterdam_400_800_1;

drop table if exists loopafstanden_ov.tmp_voronois_rt_amsterdam_400_800_2;

BEGIN;
SET TRANSACTION READ WRITE;
select ST_UnaryUnion(ST_Collect(geom)) as geom
into loopafstanden_ov.tmp_voronois_rt_amsterdam_400_800_1
from loopafstanden_ov.rt_voronois_amsterdam1 
where cost_cat = '400-800';


select 
	st_intersection(a.geom,  ST_Transform(b.geom, 28992)) as geom
into 
	loopafstanden_ov.tmp_voronois_rt_amsterdam_400_800_2
from 
	loopafstanden_ov.tmp_voronois_rt_amsterdam_400_800_1 a, 
 	loopafstanden_ov.stadsdelen_inclusief_weesp b
where 
	st_overlaps(a.geom,   ST_Transform(b.geom, 28992)) or 
	st_within(a.geom,   ST_Transform(b.geom, 28992));



select 
	st_intersection(a.geom, b.geom) as geom
into 
	loopafstanden_ov.tmp_voronois_rt_amsterdam_400_800
from 
	loopafstanden_ov.tmp_voronois_rt_amsterdam_400_800_2 a,
	loopafstanden_ov.tmp_bemeten_rt_gebied_amsterdam b
where 
	st_overlaps(a.geom,   ST_Transform(b.geom, 28992)) or 
	st_within(a.geom,   ST_Transform(b.geom, 28992));



-- ========= Maak nette polygonen voor loopafstanden 800 m.+ ===========

drop table if exists loopafstanden_ov.tmp_voronois_rt_amsterdam_800_plus;

drop table if exists loopafstanden_ov.tmp_voronois_rt_amsterdam_800_plus_1;

drop table if exists loopafstanden_ov.tmp_voronois_rt_amsterdam_800_plus_2;

select ST_UnaryUnion(ST_Collect(geom)) as geom
into loopafstanden_ov.tmp_voronois_rt_amsterdam_800_plus_1
from loopafstanden_ov.rt_voronois_amsterdam1
where cost_cat = '>800';

select 
	st_intersection(a.geom,  ST_Transform(b.geom, 28992)) as geom
into 
	loopafstanden_ov.tmp_voronois_rt_amsterdam_800_plus_2
from 
	loopafstanden_ov.tmp_voronois_rt_amsterdam_800_plus_1 a, 
 	loopafstanden_ov.stadsdelen_inclusief_weesp b
where 
	st_overlaps(a.geom,   ST_Transform(b.geom, 28992)) or 
	st_within(a.geom,   ST_Transform(b.geom, 28992));

select 
	st_intersection(a.geom, b.geom) as geom
into 
	loopafstanden_ov.tmp_voronois_rt_amsterdam_800_plus
from 
	loopafstanden_ov.tmp_voronois_rt_amsterdam_800_plus_2 a, 
	loopafstanden_ov.tmp_bemeten_rt_gebied_amsterdam b
where 
	st_overlaps(a.geom, b.geom) or st_within(a.geom, b.geom);



-- ===== hier volgt wat experimenteels, dit kun je ook negeren ======
/*

DROP TABLE IF EXISTS loopafstanden_ov.tmp_alle_gebieden_tot_800m;

SELECT 
    ST_UnaryUnion(
        ST_Collect(geom)
    ) AS geom
INTO loopafstanden_ov.tmp_alle_gebieden_tot_800m
FROM (
    SELECT geom FROM loopafstanden_ov.out_voronois_noord_kleiner_dan_250
    UNION ALL
    SELECT geom FROM loopafstanden_ov.out_voronois_noord_250_400
    UNION ALL
    SELECT geom FROM loopafstanden_ov.out_voronois_noord_400_800
) AS subquery;



drop table if exists loopafstanden_ov.out_voronois_noord_800plus;
select 
	st_difference(st_transform(b.geom, 28992), a.geom) as geom
into 
	loopafstanden_ov.out_voronois_noord_800plus
from 
	loopafstanden_ov.stadsdelen_inclusief_weesp b ,
	 loopafstanden_ov.tmp_alle_gebieden_tot_800m a
where naam = 'Noord';


DROP TABLE IF EXISTS loopafstanden_ov.out_voronois_noord_800plus;

CREATE TABLE loopafstanden_ov.out_voronois_noord_800plus AS
SELECT 
    ST_Difference(
        stadsdelen.geom,
        ST_UnaryUnion(
            ST_Collect(
                (SELECT geom FROM loopafstanden_ov.out_voronois_noord_kleiner_dan_250)
                UNION ALL
                (SELECT geom FROM loopafstanden_ov.out_voronois_noord_250_400)
                UNION ALL
                (SELECT geom FROM loopafstanden_ov.out_voronois_noord_400_800)
            )
        )
    ) AS geom
FROM 
    loopafstanden_ov.stadsdelen_inclusief_weesp AS stadsdelen;

DROP TABLE IF EXISTS loopafstanden_ov.out_voronois_noord_800plus;

CREATE TABLE loopafstanden_ov.out_voronois_noord_800plus AS
SELECT 
    ST_Difference(
        stadsdelen.geom,
        ST_UnaryUnion(
            (SELECT ST_Collect(geom) FROM loopafstanden_ov.out_voronois_noord_kleiner_dan_250)
            || (SELECT ST_Collect(geom) FROM loopafstanden_ov.out_voronois_noord_250_400)
            || (SELECT ST_Collect(geom) FROM loopafstanden_ov.out_voronois_noord_400_800)
        )
    ) AS geom
FROM 
    loopafstanden_ov.stadsdelen_inclusief_weesp AS stadsdelen;


drop table if exists loopafstanden_ov.tmp_alle_gebieden_tot_800m;
select  ST_UnaryUnion(ST_Collect(geom)) as geom
into loopafstanden_ov.tmp_alle_gebieden_tot_800m
from loopafstanden_ov.out_voronois_noord_kleiner_dan_250
union all 
select *
from loopafstanden_ov.out_voronois_noord_250_400
union all 
select *
from loopafstanden_ov.out_voronois_noord_400_800;


/*

select 


-- ===== voeg polygonen toe voor gebieden die 800m+ hemelsbreed bij halte vandaan liggen ==== 
SELECT 
    ST_UnaryUnion(ST_Collect(ST_Buffer(geom, 800))) AS geom
INTO 
    loopafstanden_ov.tmp_800mbuffer_haltes_amsterdam
FROM 
    loopafstanden_ov.haltes_noord_niet_gevalideerd;

drop table if exists loopafstanden_ov.tmp_verder_dan_800m_hemelsbreed;
select 
	st_difference(st_transform(b.geom, 28992), a.geom) as geom
into 
	loopafstanden_ov.tmp_verder_dan_800m_hemelsbreed
from 
	 loopafstanden_ov.tmp_800mbuffer_haltes_amsterdam a,
	loopafstanden_ov.stadsdelen_inclusief_weesp b 
where naam = 'Noord';
	
with full_table as (
	select geom 
	from loopafstanden_ov.tmp_voronois_noord_800_plus_3
	union all 
	select geom
	from loopafstanden_ov.tmp_verder_dan_800m_hemelsbreed
	)

select st_union(geom) as geom
into o220261_loopafstanden_update.out_amsterdam_800_plus
from full_table ;

drop table if exists loopafstanden_ov.tmp_voronois_noord_400_800_1;


