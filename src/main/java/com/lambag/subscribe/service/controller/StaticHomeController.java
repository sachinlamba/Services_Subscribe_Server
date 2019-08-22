package com.lambag.subscribe.service.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Controller
public class StaticHomeController {
	
	@RequestMapping(value = "/home")
    public String index() {
        return "index.html";
    }
	
	
	
}
