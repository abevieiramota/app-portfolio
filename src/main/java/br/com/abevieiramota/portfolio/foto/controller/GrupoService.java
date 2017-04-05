package br.com.abevieiramota.portfolio.foto.controller;

import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.abevieiramota.portfolio.model.Grupo;

@RestController
@RequestMapping("/api/grupo")
public class GrupoService {
	
	@GetMapping
	public List<Grupo> all() {
		
		return Arrays.asList(Grupo.values());
	}
}
