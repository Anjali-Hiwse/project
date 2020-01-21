package com.app.controller;

import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dao.IUserDao;
import com.app.pojos.UserLogin;

@RestController
@CrossOrigin
@RequestMapping("/login_details")
public class UserController 
{
    @Autowired
    private IUserDao users;
    
    @PostConstruct
    public void init()
    {
    	System.out.println("in init"+users);
    }
    
    @GetMapping
    public ResponseEntity<?> getAllUser()
    {
    	System.out.println("in user controller");
    	List<UserLogin> list=users.getUserList();
    	if(list.size() ==0 )
    		return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
    	return new ResponseEntity<List<UserLogin>>(list,HttpStatus.OK);
    }
}
