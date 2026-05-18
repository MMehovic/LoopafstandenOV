var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_LoopafstandenOVRT800plus_1 = new ol.format.GeoJSON();
var features_LoopafstandenOVRT800plus_1 = format_LoopafstandenOVRT800plus_1.readFeatures(json_LoopafstandenOVRT800plus_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LoopafstandenOVRT800plus_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoopafstandenOVRT800plus_1.addFeatures(features_LoopafstandenOVRT800plus_1);
var lyr_LoopafstandenOVRT800plus_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LoopafstandenOVRT800plus_1, 
                style: style_LoopafstandenOVRT800plus_1,
                popuplayertitle: 'Loopafstanden OV RT 800 plus',
                interactive: true,
                title: '<img src="styles/legend/LoopafstandenOVRT800plus_1.png" /> Loopafstanden OV RT 800 plus'
            });
var format_LoopafstandenOVRT400800_2 = new ol.format.GeoJSON();
var features_LoopafstandenOVRT400800_2 = format_LoopafstandenOVRT400800_2.readFeatures(json_LoopafstandenOVRT400800_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LoopafstandenOVRT400800_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoopafstandenOVRT400800_2.addFeatures(features_LoopafstandenOVRT400800_2);
var lyr_LoopafstandenOVRT400800_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LoopafstandenOVRT400800_2, 
                style: style_LoopafstandenOVRT400800_2,
                popuplayertitle: 'Loopafstanden OV RT 400-800',
                interactive: true,
                title: '<img src="styles/legend/LoopafstandenOVRT400800_2.png" /> Loopafstanden OV RT 400-800'
            });
var format_LoopafstandenOVRT250400_3 = new ol.format.GeoJSON();
var features_LoopafstandenOVRT250400_3 = format_LoopafstandenOVRT250400_3.readFeatures(json_LoopafstandenOVRT250400_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LoopafstandenOVRT250400_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoopafstandenOVRT250400_3.addFeatures(features_LoopafstandenOVRT250400_3);
var lyr_LoopafstandenOVRT250400_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LoopafstandenOVRT250400_3, 
                style: style_LoopafstandenOVRT250400_3,
                popuplayertitle: 'Loopafstanden OV RT 250-400',
                interactive: true,
                title: '<img src="styles/legend/LoopafstandenOVRT250400_3.png" /> Loopafstanden OV RT 250-400'
            });
var format_LoopafstandenOVRTkleinerdan250_4 = new ol.format.GeoJSON();
var features_LoopafstandenOVRTkleinerdan250_4 = format_LoopafstandenOVRTkleinerdan250_4.readFeatures(json_LoopafstandenOVRTkleinerdan250_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LoopafstandenOVRTkleinerdan250_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoopafstandenOVRTkleinerdan250_4.addFeatures(features_LoopafstandenOVRTkleinerdan250_4);
var lyr_LoopafstandenOVRTkleinerdan250_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LoopafstandenOVRTkleinerdan250_4, 
                style: style_LoopafstandenOVRTkleinerdan250_4,
                popuplayertitle: 'Loopafstanden OV RT kleiner dan 250',
                interactive: true,
                title: '<img src="styles/legend/LoopafstandenOVRTkleinerdan250_4.png" /> Loopafstanden OV RT kleiner dan 250'
            });
var format_HaltesOV_rolstoeltoegankelijkRT_5 = new ol.format.GeoJSON();
var features_HaltesOV_rolstoeltoegankelijkRT_5 = format_HaltesOV_rolstoeltoegankelijkRT_5.readFeatures(json_HaltesOV_rolstoeltoegankelijkRT_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HaltesOV_rolstoeltoegankelijkRT_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HaltesOV_rolstoeltoegankelijkRT_5.addFeatures(features_HaltesOV_rolstoeltoegankelijkRT_5);
var lyr_HaltesOV_rolstoeltoegankelijkRT_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HaltesOV_rolstoeltoegankelijkRT_5, 
                style: style_HaltesOV_rolstoeltoegankelijkRT_5,
                popuplayertitle: 'Haltes OV_rolstoel toegankelijk RT',
                interactive: true,
                title: '<img src="styles/legend/HaltesOV_rolstoeltoegankelijkRT_5.png" /> Haltes OV_rolstoel toegankelijk RT'
            });
var format_LoopafstandenOVVT800plus_6 = new ol.format.GeoJSON();
var features_LoopafstandenOVVT800plus_6 = format_LoopafstandenOVVT800plus_6.readFeatures(json_LoopafstandenOVVT800plus_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LoopafstandenOVVT800plus_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoopafstandenOVVT800plus_6.addFeatures(features_LoopafstandenOVVT800plus_6);
var lyr_LoopafstandenOVVT800plus_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LoopafstandenOVVT800plus_6, 
                style: style_LoopafstandenOVVT800plus_6,
                popuplayertitle: 'Loopafstanden OV VT 800 plus',
                interactive: true,
                title: '<img src="styles/legend/LoopafstandenOVVT800plus_6.png" /> Loopafstanden OV VT 800 plus'
            });
var format_LoopafstandenOVVT400800_7 = new ol.format.GeoJSON();
var features_LoopafstandenOVVT400800_7 = format_LoopafstandenOVVT400800_7.readFeatures(json_LoopafstandenOVVT400800_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LoopafstandenOVVT400800_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoopafstandenOVVT400800_7.addFeatures(features_LoopafstandenOVVT400800_7);
var lyr_LoopafstandenOVVT400800_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LoopafstandenOVVT400800_7, 
                style: style_LoopafstandenOVVT400800_7,
                popuplayertitle: 'Loopafstanden OV VT 400-800',
                interactive: true,
                title: '<img src="styles/legend/LoopafstandenOVVT400800_7.png" /> Loopafstanden OV VT 400-800'
            });
var format_LoopafstandenOVVT250400_8 = new ol.format.GeoJSON();
var features_LoopafstandenOVVT250400_8 = format_LoopafstandenOVVT250400_8.readFeatures(json_LoopafstandenOVVT250400_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LoopafstandenOVVT250400_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoopafstandenOVVT250400_8.addFeatures(features_LoopafstandenOVVT250400_8);
var lyr_LoopafstandenOVVT250400_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LoopafstandenOVVT250400_8, 
                style: style_LoopafstandenOVVT250400_8,
                popuplayertitle: 'Loopafstanden OV VT 250-400',
                interactive: true,
                title: '<img src="styles/legend/LoopafstandenOVVT250400_8.png" /> Loopafstanden OV VT 250-400'
            });
var format_LoopafstandenOVVTkleinerdan250_9 = new ol.format.GeoJSON();
var features_LoopafstandenOVVTkleinerdan250_9 = format_LoopafstandenOVVTkleinerdan250_9.readFeatures(json_LoopafstandenOVVTkleinerdan250_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LoopafstandenOVVTkleinerdan250_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoopafstandenOVVTkleinerdan250_9.addFeatures(features_LoopafstandenOVVTkleinerdan250_9);
var lyr_LoopafstandenOVVTkleinerdan250_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LoopafstandenOVVTkleinerdan250_9, 
                style: style_LoopafstandenOVVTkleinerdan250_9,
                popuplayertitle: 'Loopafstanden OV VT kleiner dan 250',
                interactive: true,
                title: '<img src="styles/legend/LoopafstandenOVVTkleinerdan250_9.png" /> Loopafstanden OV VT kleiner dan 250'
            });
var format_HaltesOV_visueeltoegankelijkVT_10 = new ol.format.GeoJSON();
var features_HaltesOV_visueeltoegankelijkVT_10 = format_HaltesOV_visueeltoegankelijkVT_10.readFeatures(json_HaltesOV_visueeltoegankelijkVT_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HaltesOV_visueeltoegankelijkVT_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HaltesOV_visueeltoegankelijkVT_10.addFeatures(features_HaltesOV_visueeltoegankelijkVT_10);
var lyr_HaltesOV_visueeltoegankelijkVT_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HaltesOV_visueeltoegankelijkVT_10, 
                style: style_HaltesOV_visueeltoegankelijkVT_10,
                popuplayertitle: 'Haltes OV_visueel toegankelijk VT',
                interactive: true,
                title: '<img src="styles/legend/HaltesOV_visueeltoegankelijkVT_10.png" /> Haltes OV_visueel toegankelijk VT'
            });
var format_LoopafstandenOV800plus_11 = new ol.format.GeoJSON();
var features_LoopafstandenOV800plus_11 = format_LoopafstandenOV800plus_11.readFeatures(json_LoopafstandenOV800plus_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LoopafstandenOV800plus_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoopafstandenOV800plus_11.addFeatures(features_LoopafstandenOV800plus_11);
var lyr_LoopafstandenOV800plus_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LoopafstandenOV800plus_11, 
                style: style_LoopafstandenOV800plus_11,
                popuplayertitle: 'Loopafstanden OV 800 plus',
                interactive: true,
                title: '<img src="styles/legend/LoopafstandenOV800plus_11.png" /> Loopafstanden OV 800 plus'
            });
var format_LoopafstandenOV400800_12 = new ol.format.GeoJSON();
var features_LoopafstandenOV400800_12 = format_LoopafstandenOV400800_12.readFeatures(json_LoopafstandenOV400800_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LoopafstandenOV400800_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoopafstandenOV400800_12.addFeatures(features_LoopafstandenOV400800_12);
var lyr_LoopafstandenOV400800_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LoopafstandenOV400800_12, 
                style: style_LoopafstandenOV400800_12,
                popuplayertitle: 'Loopafstanden OV 400-800',
                interactive: true,
                title: '<img src="styles/legend/LoopafstandenOV400800_12.png" /> Loopafstanden OV 400-800'
            });
var format_LoopafstandenOV250400_13 = new ol.format.GeoJSON();
var features_LoopafstandenOV250400_13 = format_LoopafstandenOV250400_13.readFeatures(json_LoopafstandenOV250400_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LoopafstandenOV250400_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoopafstandenOV250400_13.addFeatures(features_LoopafstandenOV250400_13);
var lyr_LoopafstandenOV250400_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LoopafstandenOV250400_13, 
                style: style_LoopafstandenOV250400_13,
                popuplayertitle: 'Loopafstanden OV 250-400',
                interactive: true,
                title: '<img src="styles/legend/LoopafstandenOV250400_13.png" /> Loopafstanden OV 250-400'
            });
var format_LoopafstandenOVkleinerdan250_14 = new ol.format.GeoJSON();
var features_LoopafstandenOVkleinerdan250_14 = format_LoopafstandenOVkleinerdan250_14.readFeatures(json_LoopafstandenOVkleinerdan250_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LoopafstandenOVkleinerdan250_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoopafstandenOVkleinerdan250_14.addFeatures(features_LoopafstandenOVkleinerdan250_14);
var lyr_LoopafstandenOVkleinerdan250_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LoopafstandenOVkleinerdan250_14, 
                style: style_LoopafstandenOVkleinerdan250_14,
                popuplayertitle: 'Loopafstanden OV kleiner dan 250',
                interactive: true,
                title: '<img src="styles/legend/LoopafstandenOVkleinerdan250_14.png" /> Loopafstanden OV kleiner dan 250'
            });
var format_HaltesAmsterdam_15 = new ol.format.GeoJSON();
var features_HaltesAmsterdam_15 = format_HaltesAmsterdam_15.readFeatures(json_HaltesAmsterdam_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HaltesAmsterdam_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HaltesAmsterdam_15.addFeatures(features_HaltesAmsterdam_15);
var lyr_HaltesAmsterdam_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HaltesAmsterdam_15, 
                style: style_HaltesAmsterdam_15,
                popuplayertitle: 'Haltes Amsterdam',
                interactive: true,
                title: '<img src="styles/legend/HaltesAmsterdam_15.png" /> Haltes Amsterdam'
            });
var group_Allehaltes = new ol.layer.Group({
                                layers: [lyr_LoopafstandenOV800plus_11,lyr_LoopafstandenOV400800_12,lyr_LoopafstandenOV250400_13,lyr_LoopafstandenOVkleinerdan250_14,lyr_HaltesAmsterdam_15,],
                                fold: 'close',
                                title: 'Alle haltes'});
var group_VT = new ol.layer.Group({
                                layers: [lyr_LoopafstandenOVVT800plus_6,lyr_LoopafstandenOVVT400800_7,lyr_LoopafstandenOVVT250400_8,lyr_LoopafstandenOVVTkleinerdan250_9,lyr_HaltesOV_visueeltoegankelijkVT_10,],
                                fold: 'close',
                                title: 'VT'});
var group_RT = new ol.layer.Group({
                                layers: [lyr_LoopafstandenOVRT800plus_1,lyr_LoopafstandenOVRT400800_2,lyr_LoopafstandenOVRT250400_3,lyr_LoopafstandenOVRTkleinerdan250_4,lyr_HaltesOV_rolstoeltoegankelijkRT_5,],
                                fold: 'close',
                                title: 'RT'});

lyr_OpenStreetMap_0.setVisible(true);lyr_LoopafstandenOVRT800plus_1.setVisible(true);lyr_LoopafstandenOVRT400800_2.setVisible(true);lyr_LoopafstandenOVRT250400_3.setVisible(true);lyr_LoopafstandenOVRTkleinerdan250_4.setVisible(true);lyr_HaltesOV_rolstoeltoegankelijkRT_5.setVisible(true);lyr_LoopafstandenOVVT800plus_6.setVisible(true);lyr_LoopafstandenOVVT400800_7.setVisible(true);lyr_LoopafstandenOVVT250400_8.setVisible(true);lyr_LoopafstandenOVVTkleinerdan250_9.setVisible(true);lyr_HaltesOV_visueeltoegankelijkVT_10.setVisible(true);lyr_LoopafstandenOV800plus_11.setVisible(true);lyr_LoopafstandenOV400800_12.setVisible(true);lyr_LoopafstandenOV250400_13.setVisible(true);lyr_LoopafstandenOVkleinerdan250_14.setVisible(true);lyr_HaltesAmsterdam_15.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,group_RT,group_VT,group_Allehaltes];
lyr_LoopafstandenOVRT800plus_1.set('fieldAliases', {});
lyr_LoopafstandenOVRT400800_2.set('fieldAliases', {});
lyr_LoopafstandenOVRT250400_3.set('fieldAliases', {});
lyr_LoopafstandenOVRTkleinerdan250_4.set('fieldAliases', {});
lyr_HaltesOV_rolstoeltoegankelijkRT_5.set('fieldAliases', {'fid': 'fid', 'qc_id': 'qc_id', 'quaycode': 'quaycode', 'stopplacecode': 'stopplacecode', 'stopobjectnr': 'stopobjectnr', 'town': 'town', 'quayname': 'quayname', 'stopsidecode': 'stopsidecode', 'transportmode': 'transportmode', 'rd-x': 'rd-x', 'rd-y': 'rd-y', 'wgs84-lat': 'wgs84-lat', 'wgs84-lon': 'wgs84-lon', 'compassdirection': 'compassdirection', 'street': 'street', 'quaytype': 'quaytype', 'quaystatus': 'quaystatus', 'concessionprovidercode': 'concessionprovidercode', 'concessioncode': 'concessioncode', 'quayownercode_name': 'quayownercode_name', 'quayownercode': 'quayownercode', 'municipality_name': 'municipality_name', 'municipalitycode': 'municipalitycode', 'stopdatamanager_name': 'stopdatamanager_name', 'stopdatamanager': 'stopdatamanager', 'last_accepted_infrastructure_mutation_at': 'last_accepted_infrastructure_mutation_at', 'quayshapetype': 'quayshapetype', 'embaymentwidth': 'embaymentwidth', 'bayentranceangles': 'bayentranceangles', 'baylength': 'baylength', 'bayexitangles': 'bayexitangles', 'kerbheight': 'kerbheight', 'liftedpartlength': 'liftedpartlength', 'boardingpositionwidth': 'boardingpositionwidth', 'alightingpositionwidth': 'alightingpositionwidth', 'stopplaceaccessroute': 'stopplaceaccessroute', 'narrowestpassagewidth': 'narrowestpassagewidth', 'heightwithenvironment': 'heightwithenvironment', 'quaylevel': 'quaylevel', 'lift': 'lift', 'ramp': 'ramp', 'rampwidth': 'rampwidth', 'ramplength': 'ramplength', 'last_accepted_facilities_mutation_at': 'last_accepted_facilities_mutation_at', 'quaydisabledaccessible': 'quaydisabledaccessible', 'stepfree': 'stepfree', 'groundsurfaceindicator': 'groundsurfaceindicator', 'tactilegroundsurfaceindicator': 'tactilegroundsurfaceindicator', 'guidelines': 'guidelines', 'fulllengthguideline': 'fulllengthguideline', 'guidelinestopplaceconnection': 'guidelinestopplaceconnection', 'markedkerb': 'markedkerb', 'quayvisuallyaccessible': 'quayvisuallyaccessible', 'stopsign': 'stopsign', 'stopsigntype': 'stopsigntype', 'illuminatedstop': 'illuminatedstop', 'shelter': 'shelter', 'shelterpublicity': 'shelterpublicity', 'seatavailable': 'seatavailable', 'leantosupport': 'leantosupport', 'bins': 'bins', 'bicycleparking': 'bicycleparking', 'numberofbicycleplaces': 'numberofbicycleplaces', 'ovccico': 'ovccico', 'ovccharging': 'ovccharging', 'infounit': 'infounit', 'timetableinformation': 'timetableinformation', 'routenetworkmap': 'routenetworkmap', 'passengerinformationdisplay': 'passengerinformationdisplay', 'audiobutton': 'audiobutton', 'passengerinformationdisplaytype': 'passengerinformationdisplaytype', 'passengerinformationdisplaylines': 'passengerinformationdisplaylines', 'roadcode': 'roadcode', 'hectometersign': 'hectometersign', 'liftedbicyclepath': 'liftedbicyclepath', 'location': 'location', 'greenstop': 'greenstop', 'obstacles': 'obstacles', 'rightposition': 'rightposition', 'remarks': 'remarks', 'visuallyimpairedaccess': 'visuallyimpairedaccess', 'tactileguidanceavailable': 'tactileguidanceavailable', 'escalatorfreeaccess': 'escalatorfreeaccess', 'stepfreeaccess': 'stepfreeaccess', 'levelaccessintovehicle': 'levelaccessintovehicle', 'visualsignsavailable': 'visualsignsavailable', 'rampfreeaccess': 'rampfreeaccess', 'liftfreeaccess': 'liftfreeaccess', 'audiblesignsavailable': 'audiblesignsavailable', 'wheelchairaccess': 'wheelchairaccess', });
lyr_LoopafstandenOVVT800plus_6.set('fieldAliases', {});
lyr_LoopafstandenOVVT400800_7.set('fieldAliases', {});
lyr_LoopafstandenOVVT250400_8.set('fieldAliases', {});
lyr_LoopafstandenOVVTkleinerdan250_9.set('fieldAliases', {});
lyr_HaltesOV_visueeltoegankelijkVT_10.set('fieldAliases', {'fid': 'fid', 'quaycode': 'quaycode', 'stopplacecode': 'stopplacecode', 'stopobjectnr': 'stopobjectnr', 'town': 'town', 'quayname': 'quayname', 'stopsidecode': 'stopsidecode', 'transportmode': 'transportmode', 'rd-x': 'rd-x', 'rd-y': 'rd-y', 'wgs84-lat': 'wgs84-lat', 'wgs84-lon': 'wgs84-lon', 'compassdirection': 'compassdirection', 'street': 'street', 'quaytype': 'quaytype', 'quaystatus': 'quaystatus', 'concessionprovidercode': 'concessionprovidercode', 'concessioncode': 'concessioncode', 'quayownercode_name': 'quayownercode_name', 'quayownercode': 'quayownercode', 'municipality_name': 'municipality_name', 'municipalitycode': 'municipalitycode', 'stopdatamanager_name': 'stopdatamanager_name', 'stopdatamanager': 'stopdatamanager', 'last_accepted_infrastructure_mutation_at': 'last_accepted_infrastructure_mutation_at', 'quayshapetype': 'quayshapetype', 'embaymentwidth': 'embaymentwidth', 'bayentranceangles': 'bayentranceangles', 'baylength': 'baylength', 'bayexitangles': 'bayexitangles', 'kerbheight': 'kerbheight', 'liftedpartlength': 'liftedpartlength', 'boardingpositionwidth': 'boardingpositionwidth', 'alightingpositionwidth': 'alightingpositionwidth', 'stopplaceaccessroute': 'stopplaceaccessroute', 'narrowestpassagewidth': 'narrowestpassagewidth', 'heightwithenvironment': 'heightwithenvironment', 'quaylevel': 'quaylevel', 'lift': 'lift', 'ramp': 'ramp', 'rampwidth': 'rampwidth', 'ramplength': 'ramplength', 'last_accepted_facilities_mutation_at': 'last_accepted_facilities_mutation_at', 'quaydisabledaccessible': 'quaydisabledaccessible', 'stepfree': 'stepfree', 'groundsurfaceindicator': 'groundsurfaceindicator', 'tactilegroundsurfaceindicator': 'tactilegroundsurfaceindicator', 'guidelines': 'guidelines', 'fulllengthguideline': 'fulllengthguideline', 'guidelinestopplaceconnection': 'guidelinestopplaceconnection', 'markedkerb': 'markedkerb', 'quayvisuallyaccessible': 'quayvisuallyaccessible', 'stopsign': 'stopsign', 'stopsigntype': 'stopsigntype', 'illuminatedstop': 'illuminatedstop', 'shelter': 'shelter', 'shelterpublicity': 'shelterpublicity', 'seatavailable': 'seatavailable', 'leantosupport': 'leantosupport', 'bins': 'bins', 'bicycleparking': 'bicycleparking', 'numberofbicycleplaces': 'numberofbicycleplaces', 'ovccico': 'ovccico', 'ovccharging': 'ovccharging', 'infounit': 'infounit', 'timetableinformation': 'timetableinformation', 'routenetworkmap': 'routenetworkmap', 'passengerinformationdisplay': 'passengerinformationdisplay', 'audiobutton': 'audiobutton', 'passengerinformationdisplaytype': 'passengerinformationdisplaytype', 'passengerinformationdisplaylines': 'passengerinformationdisplaylines', 'roadcode': 'roadcode', 'hectometersign': 'hectometersign', 'liftedbicyclepath': 'liftedbicyclepath', 'location': 'location', 'greenstop': 'greenstop', 'obstacles': 'obstacles', 'rightposition': 'rightposition', 'remarks': 'remarks', 'visuallyimpairedaccess': 'visuallyimpairedaccess', 'tactileguidanceavailable': 'tactileguidanceavailable', 'escalatorfreeaccess': 'escalatorfreeaccess', 'stepfreeaccess': 'stepfreeaccess', 'levelaccessintovehicle': 'levelaccessintovehicle', 'visualsignsavailable': 'visualsignsavailable', 'rampfreeaccess': 'rampfreeaccess', 'liftfreeaccess': 'liftfreeaccess', 'audiblesignsavailable': 'audiblesignsavailable', 'wheelchairaccess': 'wheelchairaccess', });
lyr_LoopafstandenOV800plus_11.set('fieldAliases', {});
lyr_LoopafstandenOV400800_12.set('fieldAliases', {});
lyr_LoopafstandenOV250400_13.set('fieldAliases', {});
lyr_LoopafstandenOVkleinerdan250_14.set('fieldAliases', {});
lyr_HaltesAmsterdam_15.set('fieldAliases', {'fid': 'fid', 'quaycode': 'quaycode', 'stopplacecode': 'stopplacecode', 'stopobjectnr': 'stopobjectnr', 'town': 'town', 'quayname': 'quayname', 'stopsidecode': 'stopsidecode', 'transportmode': 'transportmode', 'rd-x': 'rd-x', 'rd-y': 'rd-y', 'wgs84-lat': 'wgs84-lat', 'wgs84-lon': 'wgs84-lon', 'compassdirection': 'compassdirection', 'street': 'street', 'quaytype': 'quaytype', 'quaystatus': 'quaystatus', 'concessionprovidercode': 'concessionprovidercode', 'concessioncode': 'concessioncode', 'quayownercode_name': 'quayownercode_name', 'quayownercode': 'quayownercode', 'municipality_name': 'municipality_name', 'municipalitycode': 'municipalitycode', 'stopdatamanager_name': 'stopdatamanager_name', 'stopdatamanager': 'stopdatamanager', 'last_accepted_infrastructure_mutation_at': 'last_accepted_infrastructure_mutation_at', 'quayshapetype': 'quayshapetype', 'embaymentwidth': 'embaymentwidth', 'bayentranceangles': 'bayentranceangles', 'baylength': 'baylength', 'bayexitangles': 'bayexitangles', 'kerbheight': 'kerbheight', 'liftedpartlength': 'liftedpartlength', 'boardingpositionwidth': 'boardingpositionwidth', 'alightingpositionwidth': 'alightingpositionwidth', 'stopplaceaccessroute': 'stopplaceaccessroute', 'narrowestpassagewidth': 'narrowestpassagewidth', 'heightwithenvironment': 'heightwithenvironment', 'quaylevel': 'quaylevel', 'lift': 'lift', 'ramp': 'ramp', 'rampwidth': 'rampwidth', 'ramplength': 'ramplength', 'last_accepted_facilities_mutation_at': 'last_accepted_facilities_mutation_at', 'quaydisabledaccessible': 'quaydisabledaccessible', 'stepfree': 'stepfree', 'groundsurfaceindicator': 'groundsurfaceindicator', 'tactilegroundsurfaceindicator': 'tactilegroundsurfaceindicator', 'guidelines': 'guidelines', 'fulllengthguideline': 'fulllengthguideline', 'guidelinestopplaceconnection': 'guidelinestopplaceconnection', 'markedkerb': 'markedkerb', 'quayvisuallyaccessible': 'quayvisuallyaccessible', 'stopsign': 'stopsign', 'stopsigntype': 'stopsigntype', 'illuminatedstop': 'illuminatedstop', 'shelter': 'shelter', 'shelterpublicity': 'shelterpublicity', 'seatavailable': 'seatavailable', 'leantosupport': 'leantosupport', 'bins': 'bins', 'bicycleparking': 'bicycleparking', 'numberofbicycleplaces': 'numberofbicycleplaces', 'ovccico': 'ovccico', 'ovccharging': 'ovccharging', 'infounit': 'infounit', 'timetableinformation': 'timetableinformation', 'routenetworkmap': 'routenetworkmap', 'passengerinformationdisplay': 'passengerinformationdisplay', 'audiobutton': 'audiobutton', 'passengerinformationdisplaytype': 'passengerinformationdisplaytype', 'passengerinformationdisplaylines': 'passengerinformationdisplaylines', 'roadcode': 'roadcode', 'hectometersign': 'hectometersign', 'liftedbicyclepath': 'liftedbicyclepath', 'location': 'location', 'greenstop': 'greenstop', 'obstacles': 'obstacles', 'rightposition': 'rightposition', 'remarks': 'remarks', 'visuallyimpairedaccess': 'visuallyimpairedaccess', 'tactileguidanceavailable': 'tactileguidanceavailable', 'escalatorfreeaccess': 'escalatorfreeaccess', 'stepfreeaccess': 'stepfreeaccess', 'levelaccessintovehicle': 'levelaccessintovehicle', 'visualsignsavailable': 'visualsignsavailable', 'rampfreeaccess': 'rampfreeaccess', 'liftfreeaccess': 'liftfreeaccess', 'audiblesignsavailable': 'audiblesignsavailable', 'wheelchairaccess': 'wheelchairaccess', });
lyr_LoopafstandenOVRT800plus_1.set('fieldImages', {});
lyr_LoopafstandenOVRT400800_2.set('fieldImages', {});
lyr_LoopafstandenOVRT250400_3.set('fieldImages', {});
lyr_LoopafstandenOVRTkleinerdan250_4.set('fieldImages', {});
lyr_HaltesOV_rolstoeltoegankelijkRT_5.set('fieldImages', {'fid': '', 'qc_id': '', 'quaycode': '', 'stopplacecode': '', 'stopobjectnr': '', 'town': '', 'quayname': '', 'stopsidecode': '', 'transportmode': '', 'rd-x': '', 'rd-y': '', 'wgs84-lat': '', 'wgs84-lon': '', 'compassdirection': '', 'street': '', 'quaytype': '', 'quaystatus': '', 'concessionprovidercode': '', 'concessioncode': '', 'quayownercode_name': '', 'quayownercode': '', 'municipality_name': '', 'municipalitycode': '', 'stopdatamanager_name': '', 'stopdatamanager': '', 'last_accepted_infrastructure_mutation_at': '', 'quayshapetype': '', 'embaymentwidth': '', 'bayentranceangles': '', 'baylength': '', 'bayexitangles': '', 'kerbheight': '', 'liftedpartlength': '', 'boardingpositionwidth': '', 'alightingpositionwidth': '', 'stopplaceaccessroute': '', 'narrowestpassagewidth': '', 'heightwithenvironment': '', 'quaylevel': '', 'lift': '', 'ramp': '', 'rampwidth': '', 'ramplength': '', 'last_accepted_facilities_mutation_at': '', 'quaydisabledaccessible': '', 'stepfree': '', 'groundsurfaceindicator': '', 'tactilegroundsurfaceindicator': '', 'guidelines': '', 'fulllengthguideline': '', 'guidelinestopplaceconnection': '', 'markedkerb': '', 'quayvisuallyaccessible': '', 'stopsign': '', 'stopsigntype': '', 'illuminatedstop': '', 'shelter': '', 'shelterpublicity': '', 'seatavailable': '', 'leantosupport': '', 'bins': '', 'bicycleparking': '', 'numberofbicycleplaces': '', 'ovccico': '', 'ovccharging': '', 'infounit': '', 'timetableinformation': '', 'routenetworkmap': '', 'passengerinformationdisplay': '', 'audiobutton': '', 'passengerinformationdisplaytype': '', 'passengerinformationdisplaylines': '', 'roadcode': '', 'hectometersign': '', 'liftedbicyclepath': '', 'location': '', 'greenstop': '', 'obstacles': '', 'rightposition': '', 'remarks': '', 'visuallyimpairedaccess': '', 'tactileguidanceavailable': '', 'escalatorfreeaccess': '', 'stepfreeaccess': '', 'levelaccessintovehicle': '', 'visualsignsavailable': '', 'rampfreeaccess': '', 'liftfreeaccess': '', 'audiblesignsavailable': '', 'wheelchairaccess': '', });
lyr_LoopafstandenOVVT800plus_6.set('fieldImages', {});
lyr_LoopafstandenOVVT400800_7.set('fieldImages', {});
lyr_LoopafstandenOVVT250400_8.set('fieldImages', {});
lyr_LoopafstandenOVVTkleinerdan250_9.set('fieldImages', {});
lyr_HaltesOV_visueeltoegankelijkVT_10.set('fieldImages', {'fid': '', 'quaycode': '', 'stopplacecode': '', 'stopobjectnr': '', 'town': '', 'quayname': '', 'stopsidecode': '', 'transportmode': '', 'rd-x': '', 'rd-y': '', 'wgs84-lat': '', 'wgs84-lon': '', 'compassdirection': '', 'street': '', 'quaytype': '', 'quaystatus': '', 'concessionprovidercode': '', 'concessioncode': '', 'quayownercode_name': '', 'quayownercode': '', 'municipality_name': '', 'municipalitycode': '', 'stopdatamanager_name': '', 'stopdatamanager': '', 'last_accepted_infrastructure_mutation_at': '', 'quayshapetype': '', 'embaymentwidth': '', 'bayentranceangles': '', 'baylength': '', 'bayexitangles': '', 'kerbheight': '', 'liftedpartlength': '', 'boardingpositionwidth': '', 'alightingpositionwidth': '', 'stopplaceaccessroute': '', 'narrowestpassagewidth': '', 'heightwithenvironment': '', 'quaylevel': '', 'lift': '', 'ramp': '', 'rampwidth': '', 'ramplength': '', 'last_accepted_facilities_mutation_at': '', 'quaydisabledaccessible': '', 'stepfree': '', 'groundsurfaceindicator': '', 'tactilegroundsurfaceindicator': '', 'guidelines': '', 'fulllengthguideline': '', 'guidelinestopplaceconnection': '', 'markedkerb': '', 'quayvisuallyaccessible': '', 'stopsign': '', 'stopsigntype': '', 'illuminatedstop': '', 'shelter': '', 'shelterpublicity': '', 'seatavailable': '', 'leantosupport': '', 'bins': '', 'bicycleparking': '', 'numberofbicycleplaces': '', 'ovccico': '', 'ovccharging': '', 'infounit': '', 'timetableinformation': '', 'routenetworkmap': '', 'passengerinformationdisplay': '', 'audiobutton': '', 'passengerinformationdisplaytype': '', 'passengerinformationdisplaylines': '', 'roadcode': '', 'hectometersign': '', 'liftedbicyclepath': '', 'location': '', 'greenstop': '', 'obstacles': '', 'rightposition': '', 'remarks': '', 'visuallyimpairedaccess': '', 'tactileguidanceavailable': '', 'escalatorfreeaccess': '', 'stepfreeaccess': '', 'levelaccessintovehicle': '', 'visualsignsavailable': '', 'rampfreeaccess': '', 'liftfreeaccess': '', 'audiblesignsavailable': '', 'wheelchairaccess': '', });
lyr_LoopafstandenOV800plus_11.set('fieldImages', {});
lyr_LoopafstandenOV400800_12.set('fieldImages', {});
lyr_LoopafstandenOV250400_13.set('fieldImages', {});
lyr_LoopafstandenOVkleinerdan250_14.set('fieldImages', {});
lyr_HaltesAmsterdam_15.set('fieldImages', {'fid': '', 'quaycode': '', 'stopplacecode': '', 'stopobjectnr': '', 'town': '', 'quayname': '', 'stopsidecode': '', 'transportmode': '', 'rd-x': '', 'rd-y': '', 'wgs84-lat': '', 'wgs84-lon': '', 'compassdirection': '', 'street': '', 'quaytype': '', 'quaystatus': '', 'concessionprovidercode': '', 'concessioncode': '', 'quayownercode_name': '', 'quayownercode': '', 'municipality_name': '', 'municipalitycode': '', 'stopdatamanager_name': '', 'stopdatamanager': '', 'last_accepted_infrastructure_mutation_at': '', 'quayshapetype': '', 'embaymentwidth': '', 'bayentranceangles': '', 'baylength': '', 'bayexitangles': '', 'kerbheight': '', 'liftedpartlength': '', 'boardingpositionwidth': '', 'alightingpositionwidth': '', 'stopplaceaccessroute': '', 'narrowestpassagewidth': '', 'heightwithenvironment': '', 'quaylevel': '', 'lift': '', 'ramp': '', 'rampwidth': '', 'ramplength': '', 'last_accepted_facilities_mutation_at': '', 'quaydisabledaccessible': '', 'stepfree': '', 'groundsurfaceindicator': '', 'tactilegroundsurfaceindicator': '', 'guidelines': '', 'fulllengthguideline': '', 'guidelinestopplaceconnection': '', 'markedkerb': '', 'quayvisuallyaccessible': '', 'stopsign': '', 'stopsigntype': '', 'illuminatedstop': '', 'shelter': '', 'shelterpublicity': '', 'seatavailable': '', 'leantosupport': '', 'bins': '', 'bicycleparking': '', 'numberofbicycleplaces': '', 'ovccico': '', 'ovccharging': '', 'infounit': '', 'timetableinformation': '', 'routenetworkmap': '', 'passengerinformationdisplay': '', 'audiobutton': '', 'passengerinformationdisplaytype': '', 'passengerinformationdisplaylines': '', 'roadcode': '', 'hectometersign': '', 'liftedbicyclepath': '', 'location': '', 'greenstop': '', 'obstacles': '', 'rightposition': '', 'remarks': '', 'visuallyimpairedaccess': '', 'tactileguidanceavailable': '', 'escalatorfreeaccess': '', 'stepfreeaccess': '', 'levelaccessintovehicle': '', 'visualsignsavailable': '', 'rampfreeaccess': '', 'liftfreeaccess': '', 'audiblesignsavailable': '', 'wheelchairaccess': '', });
lyr_LoopafstandenOVRT800plus_1.set('fieldLabels', {});
lyr_LoopafstandenOVRT400800_2.set('fieldLabels', {});
lyr_LoopafstandenOVRT250400_3.set('fieldLabels', {});
lyr_LoopafstandenOVRTkleinerdan250_4.set('fieldLabels', {});
lyr_HaltesOV_rolstoeltoegankelijkRT_5.set('fieldLabels', {'fid': 'no label', 'qc_id': 'no label', 'quaycode': 'no label', 'stopplacecode': 'no label', 'stopobjectnr': 'no label', 'town': 'no label', 'quayname': 'no label', 'stopsidecode': 'no label', 'transportmode': 'no label', 'rd-x': 'no label', 'rd-y': 'no label', 'wgs84-lat': 'no label', 'wgs84-lon': 'no label', 'compassdirection': 'no label', 'street': 'no label', 'quaytype': 'no label', 'quaystatus': 'no label', 'concessionprovidercode': 'no label', 'concessioncode': 'no label', 'quayownercode_name': 'no label', 'quayownercode': 'no label', 'municipality_name': 'no label', 'municipalitycode': 'no label', 'stopdatamanager_name': 'no label', 'stopdatamanager': 'no label', 'last_accepted_infrastructure_mutation_at': 'no label', 'quayshapetype': 'no label', 'embaymentwidth': 'no label', 'bayentranceangles': 'no label', 'baylength': 'no label', 'bayexitangles': 'no label', 'kerbheight': 'no label', 'liftedpartlength': 'no label', 'boardingpositionwidth': 'no label', 'alightingpositionwidth': 'no label', 'stopplaceaccessroute': 'no label', 'narrowestpassagewidth': 'no label', 'heightwithenvironment': 'no label', 'quaylevel': 'no label', 'lift': 'no label', 'ramp': 'no label', 'rampwidth': 'no label', 'ramplength': 'no label', 'last_accepted_facilities_mutation_at': 'no label', 'quaydisabledaccessible': 'no label', 'stepfree': 'no label', 'groundsurfaceindicator': 'no label', 'tactilegroundsurfaceindicator': 'no label', 'guidelines': 'no label', 'fulllengthguideline': 'no label', 'guidelinestopplaceconnection': 'no label', 'markedkerb': 'no label', 'quayvisuallyaccessible': 'no label', 'stopsign': 'no label', 'stopsigntype': 'no label', 'illuminatedstop': 'no label', 'shelter': 'no label', 'shelterpublicity': 'no label', 'seatavailable': 'no label', 'leantosupport': 'no label', 'bins': 'no label', 'bicycleparking': 'no label', 'numberofbicycleplaces': 'no label', 'ovccico': 'no label', 'ovccharging': 'no label', 'infounit': 'no label', 'timetableinformation': 'no label', 'routenetworkmap': 'no label', 'passengerinformationdisplay': 'no label', 'audiobutton': 'no label', 'passengerinformationdisplaytype': 'no label', 'passengerinformationdisplaylines': 'no label', 'roadcode': 'no label', 'hectometersign': 'no label', 'liftedbicyclepath': 'no label', 'location': 'no label', 'greenstop': 'no label', 'obstacles': 'no label', 'rightposition': 'no label', 'remarks': 'no label', 'visuallyimpairedaccess': 'no label', 'tactileguidanceavailable': 'no label', 'escalatorfreeaccess': 'no label', 'stepfreeaccess': 'no label', 'levelaccessintovehicle': 'no label', 'visualsignsavailable': 'no label', 'rampfreeaccess': 'no label', 'liftfreeaccess': 'no label', 'audiblesignsavailable': 'no label', 'wheelchairaccess': 'no label', });
lyr_LoopafstandenOVVT800plus_6.set('fieldLabels', {});
lyr_LoopafstandenOVVT400800_7.set('fieldLabels', {});
lyr_LoopafstandenOVVT250400_8.set('fieldLabels', {});
lyr_LoopafstandenOVVTkleinerdan250_9.set('fieldLabels', {});
lyr_HaltesOV_visueeltoegankelijkVT_10.set('fieldLabels', {'fid': 'no label', 'quaycode': 'no label', 'stopplacecode': 'no label', 'stopobjectnr': 'no label', 'town': 'no label', 'quayname': 'no label', 'stopsidecode': 'no label', 'transportmode': 'no label', 'rd-x': 'no label', 'rd-y': 'no label', 'wgs84-lat': 'no label', 'wgs84-lon': 'no label', 'compassdirection': 'no label', 'street': 'no label', 'quaytype': 'no label', 'quaystatus': 'no label', 'concessionprovidercode': 'no label', 'concessioncode': 'no label', 'quayownercode_name': 'no label', 'quayownercode': 'no label', 'municipality_name': 'no label', 'municipalitycode': 'no label', 'stopdatamanager_name': 'no label', 'stopdatamanager': 'no label', 'last_accepted_infrastructure_mutation_at': 'no label', 'quayshapetype': 'no label', 'embaymentwidth': 'no label', 'bayentranceangles': 'no label', 'baylength': 'no label', 'bayexitangles': 'no label', 'kerbheight': 'no label', 'liftedpartlength': 'no label', 'boardingpositionwidth': 'no label', 'alightingpositionwidth': 'no label', 'stopplaceaccessroute': 'no label', 'narrowestpassagewidth': 'no label', 'heightwithenvironment': 'no label', 'quaylevel': 'no label', 'lift': 'no label', 'ramp': 'no label', 'rampwidth': 'no label', 'ramplength': 'no label', 'last_accepted_facilities_mutation_at': 'no label', 'quaydisabledaccessible': 'no label', 'stepfree': 'no label', 'groundsurfaceindicator': 'no label', 'tactilegroundsurfaceindicator': 'no label', 'guidelines': 'no label', 'fulllengthguideline': 'no label', 'guidelinestopplaceconnection': 'no label', 'markedkerb': 'no label', 'quayvisuallyaccessible': 'no label', 'stopsign': 'no label', 'stopsigntype': 'no label', 'illuminatedstop': 'no label', 'shelter': 'no label', 'shelterpublicity': 'no label', 'seatavailable': 'no label', 'leantosupport': 'no label', 'bins': 'no label', 'bicycleparking': 'no label', 'numberofbicycleplaces': 'no label', 'ovccico': 'no label', 'ovccharging': 'no label', 'infounit': 'no label', 'timetableinformation': 'no label', 'routenetworkmap': 'no label', 'passengerinformationdisplay': 'no label', 'audiobutton': 'no label', 'passengerinformationdisplaytype': 'no label', 'passengerinformationdisplaylines': 'no label', 'roadcode': 'no label', 'hectometersign': 'no label', 'liftedbicyclepath': 'no label', 'location': 'no label', 'greenstop': 'no label', 'obstacles': 'no label', 'rightposition': 'no label', 'remarks': 'no label', 'visuallyimpairedaccess': 'no label', 'tactileguidanceavailable': 'no label', 'escalatorfreeaccess': 'no label', 'stepfreeaccess': 'no label', 'levelaccessintovehicle': 'no label', 'visualsignsavailable': 'no label', 'rampfreeaccess': 'no label', 'liftfreeaccess': 'no label', 'audiblesignsavailable': 'no label', 'wheelchairaccess': 'no label', });
lyr_LoopafstandenOV800plus_11.set('fieldLabels', {});
lyr_LoopafstandenOV400800_12.set('fieldLabels', {});
lyr_LoopafstandenOV250400_13.set('fieldLabels', {});
lyr_LoopafstandenOVkleinerdan250_14.set('fieldLabels', {});
lyr_HaltesAmsterdam_15.set('fieldLabels', {'fid': 'no label', 'quaycode': 'no label', 'stopplacecode': 'no label', 'stopobjectnr': 'no label', 'town': 'no label', 'quayname': 'no label', 'stopsidecode': 'no label', 'transportmode': 'no label', 'rd-x': 'no label', 'rd-y': 'no label', 'wgs84-lat': 'no label', 'wgs84-lon': 'no label', 'compassdirection': 'no label', 'street': 'no label', 'quaytype': 'no label', 'quaystatus': 'no label', 'concessionprovidercode': 'no label', 'concessioncode': 'no label', 'quayownercode_name': 'no label', 'quayownercode': 'no label', 'municipality_name': 'no label', 'municipalitycode': 'no label', 'stopdatamanager_name': 'no label', 'stopdatamanager': 'no label', 'last_accepted_infrastructure_mutation_at': 'no label', 'quayshapetype': 'no label', 'embaymentwidth': 'no label', 'bayentranceangles': 'no label', 'baylength': 'no label', 'bayexitangles': 'no label', 'kerbheight': 'no label', 'liftedpartlength': 'no label', 'boardingpositionwidth': 'no label', 'alightingpositionwidth': 'no label', 'stopplaceaccessroute': 'no label', 'narrowestpassagewidth': 'no label', 'heightwithenvironment': 'no label', 'quaylevel': 'no label', 'lift': 'no label', 'ramp': 'no label', 'rampwidth': 'no label', 'ramplength': 'no label', 'last_accepted_facilities_mutation_at': 'no label', 'quaydisabledaccessible': 'no label', 'stepfree': 'no label', 'groundsurfaceindicator': 'no label', 'tactilegroundsurfaceindicator': 'no label', 'guidelines': 'no label', 'fulllengthguideline': 'no label', 'guidelinestopplaceconnection': 'no label', 'markedkerb': 'no label', 'quayvisuallyaccessible': 'no label', 'stopsign': 'no label', 'stopsigntype': 'no label', 'illuminatedstop': 'no label', 'shelter': 'no label', 'shelterpublicity': 'no label', 'seatavailable': 'no label', 'leantosupport': 'no label', 'bins': 'no label', 'bicycleparking': 'no label', 'numberofbicycleplaces': 'no label', 'ovccico': 'no label', 'ovccharging': 'no label', 'infounit': 'no label', 'timetableinformation': 'no label', 'routenetworkmap': 'no label', 'passengerinformationdisplay': 'no label', 'audiobutton': 'no label', 'passengerinformationdisplaytype': 'no label', 'passengerinformationdisplaylines': 'no label', 'roadcode': 'no label', 'hectometersign': 'no label', 'liftedbicyclepath': 'no label', 'location': 'no label', 'greenstop': 'no label', 'obstacles': 'no label', 'rightposition': 'no label', 'remarks': 'no label', 'visuallyimpairedaccess': 'no label', 'tactileguidanceavailable': 'no label', 'escalatorfreeaccess': 'no label', 'stepfreeaccess': 'no label', 'levelaccessintovehicle': 'no label', 'visualsignsavailable': 'no label', 'rampfreeaccess': 'no label', 'liftfreeaccess': 'no label', 'audiblesignsavailable': 'no label', 'wheelchairaccess': 'no label', });
lyr_HaltesAmsterdam_15.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});