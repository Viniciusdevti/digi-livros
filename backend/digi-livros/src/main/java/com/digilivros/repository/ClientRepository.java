package com.digilivros.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.digilivros.models.Client;

public interface ClientRepository extends JpaRepository<Client, Long> {
	
	Client findById(long id);

}
