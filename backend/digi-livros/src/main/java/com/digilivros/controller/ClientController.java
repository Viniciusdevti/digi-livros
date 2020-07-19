package com.digilivros.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.digilivros.models.Client;
import com.digilivros.repository.ClientRepository;

@RestController
@RequestMapping(value = "/api")
public class ClientController {

	@Autowired
	ClientRepository clientRepository;

	@GetMapping("client")
	public List<Client> ListClient() {
		return clientRepository.findAll();
	}

	@GetMapping("/client/{id}")
	public Client ListClientId(@PathVariable(value = "id") long id) {
		return clientRepository.findById(id);
	}
	
	
	@PostMapping("/client")
	public Client  saveClient(@RequestBody Client client) {
		return clientRepository.save(client);
	}

	
	@DeleteMapping("/client")
	public void  deletClient(@RequestBody Client client) {
		 clientRepository.delete(client);
	}
	
	@PutMapping("/client")
	public Client  editClient(@RequestBody Client client) {
		return clientRepository.save(client); 
	}
}
