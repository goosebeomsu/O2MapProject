(function (){
    //어플리케이션 컨텍스트패스
    o2.common.Config.HOST.VALUES.APP_CONTEXT_PATH = "";
    //어플리케이션 프록시
    o2.common.Config.HOST.VALUES.APP_PROXY = "common/proxy.jsp";
    //O2Platform 호스트
    o2.common.Config.HOST.VALUES.PLATFORM_HOST = "http://localhost:9090/o2.platform";
    //어플리케이션 프록시 사용 여부
    o2.common.Config.HOST.VALUES.USE_PROXY = true;

    o2.common.Config.MAP = {
        MAP_CRS : "EPSG:3857",
        BBOX : [13947673.380397255,4372993.9668897,14351260.889742984,4617592.457402265]
    }


    o2.mapMngr={
        map: null,
    };

    o2.mymap ={

    };

    o2.layers = ["LSMD_CONT_LDREG", "LSMD_CONT_LDREG"]
})()