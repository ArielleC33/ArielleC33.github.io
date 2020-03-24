var wms_layers = [];


        var lyr_GoogleTerrain_0 = new ol.layer.Tile({
            'title': 'Google Terrain',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleRoad_1 = new ol.layer.Tile({
            'title': 'Google Road',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleHybrid_2 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Remainingfields_3 = new ol.format.GeoJSON();
var features_Remainingfields_3 = format_Remainingfields_3.readFeatures(json_Remainingfields_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Remainingfields_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Remainingfields_3.addFeatures(features_Remainingfields_3);
var lyr_Remainingfields_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Remainingfields_3, 
                style: style_Remainingfields_3,
                interactive: true,
    title: 'Remaining fields<br />\
    <img src="styles/legend/Remainingfields_3_0.png" /> Low<br />\
    <img src="styles/legend/Remainingfields_3_1.png" /> Medium<br />\
    <img src="styles/legend/Remainingfields_3_2.png" /> High<br />'
        });
var format_Dissolved_4 = new ol.format.GeoJSON();
var features_Dissolved_4 = format_Dissolved_4.readFeatures(json_Dissolved_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dissolved_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dissolved_4.addFeatures(features_Dissolved_4);
var lyr_Dissolved_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Dissolved_4, 
                style: style_Dissolved_4,
                interactive: false,
    title: 'Dissolved<br />\
    <img src="styles/legend/Dissolved_4_0.png" /> High<br />\
    <img src="styles/legend/Dissolved_4_1.png" /> Low<br />'
        });

lyr_GoogleTerrain_0.setVisible(true);lyr_GoogleRoad_1.setVisible(true);lyr_GoogleHybrid_2.setVisible(true);lyr_Remainingfields_3.setVisible(true);lyr_Dissolved_4.setVisible(true);
var layersList = [lyr_GoogleTerrain_0,lyr_GoogleRoad_1,lyr_GoogleHybrid_2,lyr_Remainingfields_3,lyr_Dissolved_4];
lyr_Remainingfields_3.set('fieldAliases', {'NAME': 'NAME', 'aHC01_EST_': 'aHC01_EST_', 'aHC05_EST_': 'aHC05_EST_', });
lyr_Dissolved_4.set('fieldAliases', {'POLY_ID': 'POLY_ID', 'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'COUNTYNS': 'COUNTYNS', 'AFFGEOID': 'AFFGEOID', 'GEOID': 'GEOID', 'NAME': 'NAME', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'aGEO.id2': 'aGEO.id2', 'aHC01_EST_': 'aHC01_EST_', 'aHC05_EST_': 'aHC05_EST_', 'LISA_I': 'LISA_I', 'LISA_CL': 'LISA_CL', 'LISA_P': 'LISA_P', });
lyr_Remainingfields_3.set('fieldImages', {'NAME': 'TextEdit', 'aHC01_EST_': 'TextEdit', 'aHC05_EST_': 'TextEdit', });
lyr_Dissolved_4.set('fieldImages', {'POLY_ID': 'TextEdit', 'STATEFP': 'TextEdit', 'COUNTYFP': 'TextEdit', 'COUNTYNS': 'TextEdit', 'AFFGEOID': 'TextEdit', 'GEOID': 'TextEdit', 'NAME': 'TextEdit', 'LSAD': 'TextEdit', 'ALAND': 'TextEdit', 'AWATER': 'TextEdit', 'aGEO.id2': 'TextEdit', 'aHC01_EST_': 'TextEdit', 'aHC05_EST_': 'TextEdit', 'LISA_I': 'TextEdit', 'LISA_CL': 'TextEdit', 'LISA_P': 'TextEdit', });
lyr_Remainingfields_3.set('fieldLabels', {'NAME': 'header label', 'aHC01_EST_': 'header label', 'aHC05_EST_': 'header label', });
lyr_Dissolved_4.set('fieldLabels', {'POLY_ID': 'no label', 'STATEFP': 'no label', 'COUNTYFP': 'no label', 'COUNTYNS': 'no label', 'AFFGEOID': 'no label', 'GEOID': 'no label', 'NAME': 'no label', 'LSAD': 'no label', 'ALAND': 'no label', 'AWATER': 'no label', 'aGEO.id2': 'no label', 'aHC01_EST_': 'no label', 'aHC05_EST_': 'no label', 'LISA_I': 'no label', 'LISA_CL': 'no label', 'LISA_P': 'no label', });
lyr_Dissolved_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});