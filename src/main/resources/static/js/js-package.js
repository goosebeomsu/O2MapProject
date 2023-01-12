
var AppLibFiles = {

    JS: {
        Ref : [

        ],

        Core : [
            "common/Config.js",
            "init/initMap.js",

            "mymap/myUtil/Popup.js",

            // map
            "mymap/MapControl.js",
            "mymap/Measure.js",
            "mymap/Image.js",
            "mymap/Layer.js",
            "mymap/Popup.js"
        ]
    }

}

if (typeof exports !== "undefined") {
    exports.AppLibFiles = AppLibFiles;
}