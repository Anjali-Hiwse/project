package com.app.Controller;

import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dao.UserI;
import com.app.pojo.Role;
import com.app.pojo.User;

@RestController 
@CrossOrigin
@RequestMapping("/users")
public class UserController 
{
	
	@Autowired
	private UserI userdao;

	@PostConstruct
	public void init() {
		System.out.println("in init " + userdao);
	}
	
	@PostMapping("/{login}")
	public ResponseEntity<?> ValidateUserDetails(@RequestBody User u)
	{
		System.out.println("in validate user dtls ");
		try {
			return new ResponseEntity<User>(userdao.validateUser(u.getEmail(), u.getPassword()), HttpStatus.CREATED);
		} catch (RuntimeException e1) {
			e1.printStackTrace();
			return new ResponseEntity<Void>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
	}
	
	
	@GetMapping
	public ResponseEntity<?> listUsers() {
		System.out.println("in list users");
		List<User> allUsers = userdao.getAllUsers();
		if (allUsers.size() == 0)
			return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
		return new ResponseEntity<List<User>>(allUsers, HttpStatus.OK);
	}
	
	@GetMapping("/{roles}")
	public ResponseEntity<?> getEmpDetails(@PathVariable Role roles) {
		System.out.println("in user details " + roles);
		List<User> role = userdao.listUserByRole(roles);
		if (role == null)
			return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
		return new ResponseEntity<List<User>>(role, HttpStatus.OK);
	}
	
	@GetMapping("/id/{user_id}")
	public ResponseEntity<?> getEmpDetails(@PathVariable int user_id) {
		System.out.println("in user details " + user_id);
		User id =  userdao.listUserById(user_id);
		if (id == null)
			return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
		return new ResponseEntity<User>(id, HttpStatus.OK);
	}
	
	@PostMapping("/register")
	public ResponseEntity<?> addUserDetails(@RequestBody User user) {
		System.out.println("in add user dtls " + user);
		try {
			return new ResponseEntity<User>(userdao.addUserDetails(user), HttpStatus.CREATED);
		} catch (RuntimeException e1) {
			e1.printStackTrace();
			return new ResponseEntity<Void>(HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}
	
	@DeleteMapping("/{user_id}")
	public void deleteEmpDetails(@PathVariable int user_id)
	{
		System.out.println("in delete User "+user_id);
		userdao.deleteUser(user_id);
	}
	

}
