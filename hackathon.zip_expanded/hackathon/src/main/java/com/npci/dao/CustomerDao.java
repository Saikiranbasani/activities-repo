package com.npci.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.npci.beans.Customer;

import jakarta.persistence.Id;

public interface CustomerDao extends JpaRepository<Customer, Id> {

	@Query("select c from Customer c where c.email_id = ?1")
	public Customer getCustomer(String emailId);
	
	

}
