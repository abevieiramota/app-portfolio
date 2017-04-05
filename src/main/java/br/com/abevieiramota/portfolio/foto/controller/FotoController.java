package br.com.abevieiramota.portfolio.foto.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/foto")
public class FotoController {

	@RequestMapping
	public String home() {

		return "foto-index";
	}

}
