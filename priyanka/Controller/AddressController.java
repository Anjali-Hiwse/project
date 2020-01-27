package com.app.Controller;

import java.util.List;

import javax.annotation.PostConstruct;

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

import com.app.dao.AddressI;
import com.app.pojo.Address;
import com.app.pojo.User;




@RestController 
@CrossOrigin
@RequestMapping("/address")
public class AddressController 
{

	@Autowired
	private AddressI addressdao;

	@PostConstruct
	public void init() {
		System.out.println("in init " + addressdao);
	}
	
	@GetMapping("/{user_id}")
	public ResponseEntity<?> getEmpDetails(@PathVariable int user_id) {
		System.out.println("in user details " + user_id);
		List<Address> role = addressdao.getAllAddress(user_id);
		if (role == null)
			return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
		return new ResponseEntity<List<Address>>(role, HttpStatus.OK);
	}
	
//	@PostMapping("/multiaddr/{user_id}")
//	public ResponseEntity<?> ValidateUserDetails(@RequestBody Address address, Integer user_id)
//	{
//		System.out.println("in multiple addr dtls ");
//		try {
//			return new ResponseEntity<Address>(addressdao.addUserAddress(address,user_id), HttpStatus.CREATED);
//		} catch (RuntimeException e1) {
//			e1.printStackTrace();
//			return new ResponseEntity<Void>(HttpStatus.INTERNAL_SERVER_ERROR);
//		}
//		
//	}
}
