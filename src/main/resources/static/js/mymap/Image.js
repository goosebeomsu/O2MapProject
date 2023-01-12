(function () {
    let _map = o2.mapMngr.map;

    document.querySelector(".saveImage").addEventListener("click", function saveImage(){
        _map.saveImage();
    })
})()