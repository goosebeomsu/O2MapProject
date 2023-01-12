package com.example.maptest.layers;

public enum DefaultLayerNames {

    LSMD_CONT_LDREG("연속저적도"),
    TL_SPBD_BULD("새주소건물"),
    CML_BADM_AS("법정동"),
    CML_I005_AS("1:500색인도");

    private final String value;

    private DefaultLayerNames(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }
}
