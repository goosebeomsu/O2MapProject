package com.example.maptest.controller;

import com.example.maptest.layers.DefaultLayerNames;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.*;


@Controller
public class IndexController {

    @RequestMapping("/")
    public String navigateHome(Model model) {

        Map<String, String> layerNamesMap = new LinkedHashMap<>();

        layerNamesMap.put("LSMD_CONT_LDREG", DefaultLayerNames.LSMD_CONT_LDREG.getValue());
        layerNamesMap.put("TL_SPBD_BULD", DefaultLayerNames.TL_SPBD_BULD.getValue());
        layerNamesMap.put("CML_BADM_AS", DefaultLayerNames.CML_BADM_AS.getValue());
        layerNamesMap.put("CML_I005_AS", DefaultLayerNames.CML_I005_AS.getValue());

        model.addAttribute("layerNamesMap", layerNamesMap);

        return "index";
    }
}
