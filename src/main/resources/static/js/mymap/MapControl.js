(function () {
    let _map = o2.mapMngr.map;
    const mapCRS = _map.getCrsCode();

    document.querySelector(".changeMap").addEventListener("change", function chooseMap(){
        let chooseValue = this.options[this.selectedIndex].value;
        _map.setBaseLayer({id:chooseValue,autoResolutionsByBasemap: true})
    })

    document.querySelector(".viewAll").addEventListener("click", function viewAllMap() {
        const bbox = o2.util.Crs.transformBbox([13947673.380397255,4372993.9668897,14351260.889742984,4617592.457402265], mapCRS, mapCRS);
        _map.zoomExtent(bbox);
    });

    document.querySelector(".zoomIn").addEventListener("click", function zoomIn() {
        _map.zoomIn();
    });

    document.querySelector(".zoomOut").addEventListener("click", function zoomOut() {
        _map.zoomOut();
    });

    document.querySelector(".prev").addEventListener("click", function movePrevPosition() {
        _map.prevPosition();
    });


    // 이후 버튼 클릭시 이벤트
    document.querySelector(".next").addEventListener("click", function() {
        moveNextPosition()
    });

    const moveNextPosition = () => {
        _map.nextPosition();
    }

})()