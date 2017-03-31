package br.com.abevieiramota.portfolio.foto.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.abevieiramota.portfolio.model.Foto;

@RestController
@RequestMapping("/foto")
public class FotoController {

	@RequestMapping("/")
	public List<Foto> findAll() {
		
		Foto foto1 = new Foto();
		foto1.setTitulo("Leão1");
		foto1.setUrl("http://www.fundosanimais.com/Minis/leoes.jpg");
		
		Foto foto2 = new Foto();
		foto2.setTitulo("Leão2");
		foto2.setUrl("http://www.fundosanimais.com/Minis/leoes.jpg");

		ArrayList<Foto> fotos = new ArrayList<>(2);
		fotos.add(foto1);
		fotos.add(foto2);
		
		return fotos;
	}
}
