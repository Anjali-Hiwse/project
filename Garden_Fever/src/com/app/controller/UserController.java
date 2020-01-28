package com.app.controller;

import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dao.IUserDao;
import com.app.pojos.OrderDetails;
import com.app.pojos.UserRegistration;
import com.app.pojos.UserRole;

@RestController
@CrossOrigin
@RequestMapping("/login_details")
public class UserController 
{
    @Autowired
    private IUserDao dao;
    
    @PostConstruct
    public void init()
    {
    	System.out.println("in init"+dao);
    }
    
    @GetMapping
    public ResponseEntity<?> getAllUser()
    {
    	System.out.println("in user controller");
    	List<UserRegistration> list=dao.getUserList();
    	if(list.size() ==0 )
    		return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
    	return new ResponseEntity<List<UserRegistration>>(list,HttpStatus.OK);
    }
    
    @PostMapping("/login")
    public ResponseEntity<?> checkUser(@RequestBody UserRegistration u)
    {
    	System.out.println("in user controller1");
    	UserRegistration user= dao.authenticateUser(u.getEmail(),u.getPassword());
    	if(user == null)
    		return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
    	return new ResponseEntity<UserRole>(user.getRole(),HttpStatus.OK);
    }
    
    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody UserRegistration u)
    {
    	System.out.println(u);
    	try
    	{
    		return new ResponseEntity<UserRegistration>(dao.register(u),HttpStatus.CREATED);
    	}
    	catch (RuntimeException e1) {
			e1.printStackTrace();
			return new ResponseEntity<Void>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
    }
    
    @GetMapping("/orderdetails")
    public ResponseEntity<?>  listOfOrders()
    {
    	List<OrderDetails> order = dao.getAllOrders();
		if(order.size()==0)
		{
			return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<List<OrderDetails>>(order,HttpStatus.OK);
    }
}
