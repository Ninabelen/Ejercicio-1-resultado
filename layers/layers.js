var wms_layers = [];


        var lyr_GoogleTerrainHybrid_0 = new ol.layer.Tile({
            'title': 'Google Terrain Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });
var format_EJERCICIO1_1 = new ol.format.GeoJSON();
var features_EJERCICIO1_1 = format_EJERCICIO1_1.readFeatures(json_EJERCICIO1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EJERCICIO1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EJERCICIO1_1.addFeatures(features_EJERCICIO1_1);
var lyr_EJERCICIO1_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EJERCICIO1_1, 
                style: style_EJERCICIO1_1,
                popuplayertitle: 'EJERCICIO 1',
                interactive: false,
                title: '<img src="styles/legend/EJERCICIO1_1.png" /> EJERCICIO 1'
            });
var format_EJERCICIO1_2 = new ol.format.GeoJSON();
var features_EJERCICIO1_2 = format_EJERCICIO1_2.readFeatures(json_EJERCICIO1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EJERCICIO1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EJERCICIO1_2.addFeatures(features_EJERCICIO1_2);
cluster_EJERCICIO1_2 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_EJERCICIO1_2
});
var lyr_EJERCICIO1_2 = new ol.layer.Vector({
                declutter: false,
                source:cluster_EJERCICIO1_2, 
                style: style_EJERCICIO1_2,
                popuplayertitle: 'EJERCICIO 1',
                interactive: true,
                title: '<img src="styles/legend/EJERCICIO1_2.png" /> EJERCICIO 1'
            });

lyr_GoogleTerrainHybrid_0.setVisible(true);lyr_EJERCICIO1_1.setVisible(true);lyr_EJERCICIO1_2.setVisible(true);
var layersList = [lyr_GoogleTerrainHybrid_0,lyr_EJERCICIO1_1,lyr_EJERCICIO1_2];
lyr_EJERCICIO1_1.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'T_Pregunta': 'T_Pregunta', 'N°_Preg_I': 'N°_Preg_I', 'N_Preg_Cor': 'N_Preg_Cor', 'Por_Correc': 'Por_Correc', 'Porc_Incor': 'Porc_Incor', 'Porc_Total': 'Porc_Total', 'Preg_Incor': 'Preg_Incor', 'Nombre': 'Nombre', 'Video': 'Video', });
lyr_EJERCICIO1_2.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'T_Pregunta': 'T_Pregunta', 'N°_Preg_I': 'N°_Preg_I', 'N_Preg_Cor': 'N_Preg_Cor', 'Por_Correc': 'Por_Correc', 'Porc_Incor': 'Porc_Incor', 'Porc_Total': 'Porc_Total', 'Preg_Incor': 'Preg_Incor', 'Nombre': 'Nombre', 'Video': 'Video', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', 'auxiliary_storage_labeling_show': 'auxiliary_storage_labeling_show', 'auxiliary_storage_labeling_labelrotation': 'auxiliary_storage_labeling_labelrotation', 'auxiliary_storage_labeling_family': 'auxiliary_storage_labeling_family', 'auxiliary_storage_labeling_fontstyle': 'auxiliary_storage_labeling_fontstyle', 'auxiliary_storage_labeling_size': 'auxiliary_storage_labeling_size', 'auxiliary_storage_labeling_bold': 'auxiliary_storage_labeling_bold', 'auxiliary_storage_labeling_italic': 'auxiliary_storage_labeling_italic', 'auxiliary_storage_labeling_underline': 'auxiliary_storage_labeling_underline', 'auxiliary_storage_labeling_color': 'auxiliary_storage_labeling_color', 'auxiliary_storage_labeling_strikeout': 'auxiliary_storage_labeling_strikeout', 'auxiliary_storage_labeling_multilinealignment': 'auxiliary_storage_labeling_multilinealignment', 'auxiliary_storage_labeling_buffersize': 'auxiliary_storage_labeling_buffersize', 'auxiliary_storage_labeling_buffercolor': 'auxiliary_storage_labeling_buffercolor', 'auxiliary_storage_labeling_bufferdraw': 'auxiliary_storage_labeling_bufferdraw', 'auxiliary_storage_labeling_labeldistance': 'auxiliary_storage_labeling_labeldistance', 'auxiliary_storage_labeling_hali': 'auxiliary_storage_labeling_hali', 'auxiliary_storage_labeling_vali': 'auxiliary_storage_labeling_vali', 'auxiliary_storage_labeling_scalevisibility': 'auxiliary_storage_labeling_scalevisibility', 'auxiliary_storage_labeling_minscale': 'auxiliary_storage_labeling_minscale', 'auxiliary_storage_labeling_maxscale': 'auxiliary_storage_labeling_maxscale', 'auxiliary_storage_labeling_alwaysshow': 'auxiliary_storage_labeling_alwaysshow', 'auxiliary_storage_labeling_calloutdraw': 'auxiliary_storage_labeling_calloutdraw', 'auxiliary_storage_labeling_labelallparts': 'auxiliary_storage_labeling_labelallparts', });
lyr_EJERCICIO1_1.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'T_Pregunta': 'TextEdit', 'N°_Preg_I': 'TextEdit', 'N_Preg_Cor': 'TextEdit', 'Por_Correc': 'TextEdit', 'Porc_Incor': 'TextEdit', 'Porc_Total': 'TextEdit', 'Preg_Incor': 'TextEdit', 'Nombre': 'TextEdit', 'Video': 'TextEdit', });
lyr_EJERCICIO1_2.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'T_Pregunta': 'Range', 'N°_Preg_I': 'Range', 'N_Preg_Cor': 'Range', 'Por_Correc': 'Range', 'Porc_Incor': 'Range', 'Porc_Total': 'Range', 'Preg_Incor': 'Range', 'Nombre': 'TextEdit', 'Video': 'TextEdit', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', 'auxiliary_storage_labeling_show': 'Hidden', 'auxiliary_storage_labeling_labelrotation': 'Hidden', 'auxiliary_storage_labeling_family': 'Hidden', 'auxiliary_storage_labeling_fontstyle': 'Hidden', 'auxiliary_storage_labeling_size': 'Hidden', 'auxiliary_storage_labeling_bold': 'Hidden', 'auxiliary_storage_labeling_italic': 'Hidden', 'auxiliary_storage_labeling_underline': 'Hidden', 'auxiliary_storage_labeling_color': 'Hidden', 'auxiliary_storage_labeling_strikeout': 'Hidden', 'auxiliary_storage_labeling_multilinealignment': 'Hidden', 'auxiliary_storage_labeling_buffersize': 'Hidden', 'auxiliary_storage_labeling_buffercolor': 'Hidden', 'auxiliary_storage_labeling_bufferdraw': 'Hidden', 'auxiliary_storage_labeling_labeldistance': 'Hidden', 'auxiliary_storage_labeling_hali': 'Hidden', 'auxiliary_storage_labeling_vali': 'Hidden', 'auxiliary_storage_labeling_scalevisibility': 'Hidden', 'auxiliary_storage_labeling_minscale': 'Hidden', 'auxiliary_storage_labeling_maxscale': 'Hidden', 'auxiliary_storage_labeling_alwaysshow': 'Hidden', 'auxiliary_storage_labeling_calloutdraw': 'Hidden', 'auxiliary_storage_labeling_labelallparts': 'Hidden', });
lyr_EJERCICIO1_1.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'T_Pregunta': 'no label', 'N°_Preg_I': 'no label', 'N_Preg_Cor': 'no label', 'Por_Correc': 'no label', 'Porc_Incor': 'no label', 'Porc_Total': 'no label', 'Preg_Incor': 'no label', 'Nombre': 'no label', 'Video': 'no label', });
lyr_EJERCICIO1_2.set('fieldLabels', {'id': 'no label', 'Name': 'header label - always visible', 'T_Pregunta': 'inline label - always visible', 'N°_Preg_I': 'inline label - always visible', 'N_Preg_Cor': 'inline label - always visible', 'Por_Correc': 'inline label - always visible', 'Porc_Incor': 'inline label - always visible', 'Porc_Total': 'inline label - always visible', 'Preg_Incor': 'inline label - always visible', 'Nombre': 'header label - always visible', 'Video': 'inline label - always visible', });
lyr_EJERCICIO1_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});