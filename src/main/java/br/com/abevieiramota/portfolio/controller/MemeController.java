package br.com.abevieiramota.portfolio.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/meme")
public class MemeController {

	@RequestMapping
	public String index() {
		return "meme-index";
	}
}