package com.digilivros.models;


import java.io.Serializable;
import java.time.LocalDate;


import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Entity;
import javax.persistence.Table;


@Entity
@Table(name="TB_Rents")

public class Rent implements  Serializable {
	
	private static final long serialVersionUID = 1L;
	
	@Id	
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long id;
	
   private LocalDate rentloc ; 
    
  
   private String client;


public long getId() {
	return id;
}


public void setId(long id) {
	this.id = id;
}


public LocalDate getRentloc() {
	return rentloc;
}


public void setRentloc(LocalDate rentloc) {
	this.rentloc = rentloc;
}


public String getClient() {
	return client;
}


public void setClient(String client) {
	this.client = client;
}
	

	
    
   
}
