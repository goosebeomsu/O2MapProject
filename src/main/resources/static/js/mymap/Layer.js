(function (){
    let _map = o2.mapMngr.map;

    let beforeLayerId = null;
    let chooseLayer = null;
    let tableName = null;
    let layerIdNum = 1;

    const schemaName = 'O2ASIS';
    const lyrPrefix = 'DBMS:O2ASIS';

    const mapCRS = _map.getCrsCode();
    //이런것도 아래처럼 처리??
    const hostWFS = o2.common.Config.getHostWFS();

  /*  let popup = {
        renderPopup : o2.mymap.Popup.renderPopup,
        showPopup : o2.mymap.Popup.showPopup,
    }*/

    popup = o2.mymap.Popup;

    document.querySelector(".userLayer").addEventListener("change", getLayer);
    document.querySelector(".objectInfo").addEventListener("click", showObjectInfo);


    function getLayer() {
        if(beforeLayerId != null) {
            _map.removeO2LayerById(beforeLayerId)
        }

        let chooseValue = this.options[this.selectedIndex].value;
        let chooseText = this.options[this.selectedIndex].text;

        tableName = chooseValue;

        if(chooseValue != 'none') {
            addLayer(chooseText, chooseValue);

            chooseLayer = _map.getO2LayerByName(chooseText);
            beforeLayerId = chooseLayer.get("ID");
        }
    }

    function addLayer(layerName, tableName) {

        let layerId = 'DATA-' + layerIdNum++;

        const layerInfo = {
            ID: layerId,
            NAME: layerName,
            SCHEMA_NM: schemaName,
            UPPER: "SVC",

            LYR_PREFIX: lyrPrefix,
            TABLE_NM: tableName,
            VISIBLE_YN: "Y",
        }

        _map.addLayerByInfo(layerInfo, "SVC");
    }

    function showObjectInfo() {

        _map.getViewport().addEventListener('contextmenu', async function (e) {

            e.preventDefault();

            let coord = _map.getEventCoordinate(e);
            let newCRS = await getChooseLayerCRS();

            //가져올 레이어의 좌표계로 변경
            let resultCoord = o2.util.Crs.transformCoordinate(coord, mapCRS, newCRS);

            //좌표 -> wkt변환
            let pointWKT = transformCoordToWkt(resultCoord);

            let feature = await getFeature(getCqlFromWkt(pointWKT), getFeatureURL());

            let propertiesData = getPropertiesFromFeature(feature);

            let keys = Object.keys(propertiesData);
            let values = Object.values(propertiesData);

            // popup.renderPopup(keys, values)
            popup.renderPopup(propertiesData)


            popup.showPopup();

        });

    }

    function transformCoordToWkt(coord) {
        return new ol.format.WKT().writeGeometry(new ol.geom.Point(coord));
    }

    function getCqlFromWkt(pointWKT) {
        let resultCQL =  'INTERSECTS(THE_GEOM,' + pointWKT + ')'
        return resultCQL;
    }

    function getFeatureURL() {
        return 'http://localhost:8089' + hostWFS;
    }

    async function getChooseLayerCRS() {

        let featureUrl = getFeatureURL();

        let param = {
            method: 'POST',
            body: new URLSearchParams({
                REQUEST: 'GETFEATURE',
                TYPENAME: lyrPrefix + ":" + tableName,
                MAXFEATURES: 1,
            })
        }

        let data = await fetch(featureUrl, param).then((resolve)=>{return resolve.json()});

        return data.crs;
    }

    function getPropertiesFromFeature(feature) {
        return feature.features[0].properties;
    }

    async function getFeature(cql, featureUrl) {

        let param = {
            method: 'POST',
            body: new URLSearchParams({
                REQUEST: 'GETFEATURE',
                TYPENAME: lyrPrefix + ":" + tableName,
                SRSNAME: mapCRS,
                CQL: cql,
            })
        }

        let feature = await fetch(featureUrl, param).then((resolve) => {return resolve.json()});

        return feature;
    }

})()