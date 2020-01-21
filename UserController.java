package org.sunbeam.dac.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.sunbeam.dac.dao.IUserDao;
import org.sunbeam.dac.pojos.UserRole;
import org.sunbeam.dac.pojos.Users;

@RestController
@CrossOrigin
@RequestMapping("/user")
public class UserController {

	@Autowired
	private IUserDao dao;
	
	@GetMapping("/{id}")
	public ResponseEntity<?> orderlist(@PathVariable int id){
		Users user = dao.getUserOrderDetails(id);
		
		if(user==null)
		{
			return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<Users>(user,HttpStatus.OK);
	}
	@GetMapping("")
	public ResponseEntity<?> getallUser(){
		  List<Users> allusers = dao.getAllusers();
		
		if(allusers==null)
		{
			return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<List<Users>>(allusers,HttpStatus.OK);
	}
	@GetMapping("/val/{email}")
	public ResponseEntity<?> validateuser(@PathVariable String email){
		 Users role = dao.getrole(email);
		 System.out.println(role);
		if(role==null)
		{
			return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<UserRole>(role.getRole(),HttpStatus.OK);
	}
	@PostMapping("/validate")
	public ResponseEntity<?> checkUser(@RequestBody Users u)
	{
		  Users user = dao.checkUser(u.getEmail(),u.getPassword());
		  user.setAddr(null);
		  user.setOrdr(null);
		  
		  try {
				if (user != null)
					return new ResponseEntity<UserRole>(user.getRole(), HttpStatus.OK);
				
			return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
			} catch (Exception e) {
				e.printStackTrace();
				System.out.println("Inside Catch Block");
				return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
			}
	}
	
	@PostMapping("/register")
	public ResponseEntity<?> register(@RequestBody Users u)
	{
		System.out.println(u);
		System.out.println(u.getAddr().getCountry());
		
		try {
			return new ResponseEntity<Users>(dao.registerUser(u), HttpStatus.CREATED);
		} catch (RuntimeException e1) {
			e1.printStackTrace();
			return new ResponseEntity<Void>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	
	
}
