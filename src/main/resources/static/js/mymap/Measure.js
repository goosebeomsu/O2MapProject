(function () {
    let _map = o2.mapMngr.map;

    document.querySelector(".distance").addEventListener("click", function measureLine(){
        let type = 'LineString';
        measure(type);
    })

    document.querySelector(".measurement").addEventListener("click", function measurePolygon(){
        let type = 'Polygon';
        measure(type);
    })

    document.querySelector(".radius").addEventListener("click", function measureRadius(){
        let type = 'Circle';
        measure(type);
    })

    document.querySelector(".clear").addEventListener("click", function clearMap(){
        _map.clear();
    })

    function measure(type) {

        let measureOpt = {
            targetMap: _map
        }

        if(o2.util.Common.defined(type)){
            measureOpt.type = type;
        }

        let handler = new o2.handler.Measure(measureOpt);

        _map.setHandler(handler);

    }
})()