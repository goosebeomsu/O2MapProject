(function (){

/*    let _class = {

        mapOpt : {
            target : o2map
        },

        map : new o2.map.O2Map(mapOpt)

    }

    o2.mapMngr = $.extend*/

    const mapOpt = {
        target : 'o2map',
    };

    o2.mapMngr.map = new o2.map.O2Map(mapOpt);

})()