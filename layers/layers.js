var format_ADM_KEC_KOTA_SEMARANG_250K = new ol.format.GeoJSON();
var features_ADM_KEC_KOTA_SEMARANG_250K = format_ADM_KEC_KOTA_SEMARANG_250K.readFeatures(geojson_ADM_KEC_KOTA_SEMARANG_250K, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADM_KEC_KOTA_SEMARANG_250K = new ol.source.Vector();
jsonSource_ADM_KEC_KOTA_SEMARANG_250K.addFeatures(features_ADM_KEC_KOTA_SEMARANG_250K);var lyr_ADM_KEC_KOTA_SEMARANG_250K = new ol.layer.Vector({
                source:jsonSource_ADM_KEC_KOTA_SEMARANG_250K, 
                style: style_ADM_KEC_KOTA_SEMARANG_250K,
                title: "ADM_KEC_KOTA_SEMARANG_250K"
            });

lyr_ADM_KEC_KOTA_SEMARANG_250K.setVisible(true);
var layersList = [lyr_ADM_KEC_KOTA_SEMARANG_250K];
lyr_ADM_KEC_KOTA_SEMARANG_250K.set('fieldAliases', {'PROVINSI': 'PROVINSI', 'KABUPATEN': 'KABUPATEN', 'KECAMATAN': 'KECAMATAN', 'KODE_DAGRI': 'KODE_DAGRI', 'jml': 'jml', });
lyr_ADM_KEC_KOTA_SEMARANG_250K.set('fieldImages', {'PROVINSI': 'TextEdit', 'KABUPATEN': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KODE_DAGRI': 'TextEdit', 'jml': 'TextEdit', });
lyr_ADM_KEC_KOTA_SEMARANG_250K.set('fieldLabels', {'PROVINSI': 'inline label', 'KABUPATEN': 'inline label', 'KECAMATAN': 'inline label', 'KODE_DAGRI': 'inline label', 'jml': 'inline label', });
lyr_ADM_KEC_KOTA_SEMARANG_250K.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});