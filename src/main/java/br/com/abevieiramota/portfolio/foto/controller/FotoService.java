package br.com.abevieiramota.portfolio.foto.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Queue;
import java.util.concurrent.ConcurrentLinkedDeque;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.abevieiramota.portfolio.model.Foto;

@RestController
@RequestMapping("/api/foto")
public class FotoService {

	private static final Queue<Foto> fotos = new ConcurrentLinkedDeque<>();
	
	static {
		Foto foto1 = new Foto();
		foto1.setTitulo("Leão1");
		foto1.setUrl("http://www.fundosanimais.com/Minis/leoes.jpg");

		Foto foto2 = new Foto();
		foto2.setTitulo("Danilo");
		foto2.setUrl(
				"https://scontent.fbsb9-1.fna.fbcdn.net/v/t1.0-1/c170.50.621.621/s160x160/309079_2272055114750_290638083_n.jpg?oh=5b8fd121d757ff5d07c7183746b2eaef&oe=596824A2");

		fotos.add(foto1);
		fotos.add(foto2);
	}

	@GetMapping
	public List<Foto> findAll() {

		return new ArrayList<Foto>(fotos);
	}

	@PostMapping
	public void cadastrar(@RequestBody Foto foto) {
		
		fotos.add(foto);
	}
}
