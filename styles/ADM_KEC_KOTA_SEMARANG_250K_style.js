var size = 0;
var ranges_ADM_KEC_KOTA_SEMARANG_250K = [[300.000000, 780.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(247,251,255,1.0)'})
    })]],
[780.000000, 1260.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(199,220,239,1.0)'})
    })]],
[1260.000000, 1740.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(114,178,215,1.0)'})
    })]],
[1740.000000, 2220.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(40,120,184,1.0)'})
    })]],
[2220.000000, 2700.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(8,48,107,1.0)'})
    })]]];
var styleCache_ADM_KEC_KOTA_SEMARANG_250K={}
var style_ADM_KEC_KOTA_SEMARANG_250K = function(feature, resolution){
    var value = feature.get("jml");
    var style = ranges_ADM_KEC_KOTA_SEMARANG_250K[0][2];
    for (i = 0; i < ranges_ADM_KEC_KOTA_SEMARANG_250K.length; i++){
        var range = ranges_ADM_KEC_KOTA_SEMARANG_250K[i];
        if (value > range[0] && value<=range[1]){
            style =  range[2];
        }
    };
    if (feature.get("KECAMATAN") !== null) {
        var labelText = String(feature.get("KECAMATAN"));
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_ADM_KEC_KOTA_SEMARANG_250K[key]){
        var text = new ol.style.Text({
              font: '10.725px \'MS Shell Dlg 2\', sans-serif',
              text: labelText,
              textBaseline: "center",
              textAlign: "left",
              offsetX: 5,
              offsetY: 3,
              fill: new ol.style.Fill({
                color: 'rgba(0, 0, 0, 255)'
              }),
            });
        styleCache_ADM_KEC_KOTA_SEMARANG_250K[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_ADM_KEC_KOTA_SEMARANG_250K[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};