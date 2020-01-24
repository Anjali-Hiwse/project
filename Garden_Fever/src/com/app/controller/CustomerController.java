package com.app.controller;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dao.ICustomerDao;
import com.app.pojos.UserRegistration;

@RestController
@CrossOrigin
@RequestMapping("/customer")
public class CustomerController 
{
    @Autowired
    private ICustomerDao dao;
    
    @PostConstruct
    public void init()
    {
    	System.out.println("in customer controller"+dao);
    }
    
   
}