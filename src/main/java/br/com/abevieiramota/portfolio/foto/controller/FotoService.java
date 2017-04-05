package br.com.abevieiramota.portfolio.foto.controller;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Queue;
import java.util.concurrent.ConcurrentLinkedDeque;
import java.util.concurrent.atomic.AtomicInteger;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.abevieiramota.portfolio.model.Foto;
import br.com.abevieiramota.portfolio.model.Grupo;

@RestController
@RequestMapping("/api/foto")
public class FotoService {

	private static final AtomicInteger idCounter = new AtomicInteger();
	private static final Queue<Foto> fotos = new ConcurrentLinkedDeque<>();

	static {
		Foto foto1 = new Foto();
		foto1.setTitulo("Leão1");
		foto1.setUrl("http://www.fundosanimais.com/Minis/leoes.jpg");
		foto1.setId(idCounter.incrementAndGet());
		foto1.setGrupo(Grupo.ANIMAL);

		Foto foto2 = new Foto();
		foto2.setTitulo("Danilo");
		foto2.setUrl(
				"https://scontent.fbsb9-1.fna.fbcdn.net/v/t1.0-1/c170.50.621.621/s160x160/309079_2272055114750_290638083_n.jpg?oh=5b8fd121d757ff5d07c7183746b2eaef&oe=596824A2");
		foto2.setId(idCounter.incrementAndGet());
		foto2.setGrupo(Grupo.PESSOA);

		fotos.add(foto1);
		fotos.add(foto2);
	}

	@GetMapping
	public List<Foto> findAll() {

		return new ArrayList<Foto>(fotos);
	}

	@GetMapping("/{id}")
	public Foto find(@PathVariable("id") Integer id) {
		for (Foto foto : fotos) {
			if (foto.getId() == id) {
				return foto;
			}
		}

		return null;
	}

	@PostMapping
	public void cadastrar(@RequestBody Foto foto) {

		foto.setId(idCounter.incrementAndGet());

		fotos.add(foto);
	}

	@PutMapping("/{id}")
	public void update(@PathVariable("id") Integer id, @RequestBody Foto fotoUpdate) {
		for (Foto foto : fotos) {
			if (foto.getId() == id) {
				
				foto.setDescricao(fotoUpdate.getDescricao());
				foto.setTitulo(fotoUpdate.getTitulo());
				foto.setUrl(fotoUpdate.getUrl());
			}
		}
	}

	@DeleteMapping("/{id}")
	public void delete(@PathVariable("id") Integer id) {

		Iterator<Foto> fotosIterator = fotos.iterator();

		while (fotosIterator.hasNext()) {
			Foto foto = fotosIterator.next();

			if (foto.getId() == id) {
				fotosIterator.remove();
				break;
			}
		}
	}
}
