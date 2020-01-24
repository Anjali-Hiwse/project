package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dao.IAdminDao;
import com.app.pojos.Orders;
import com.app.pojos.Product;
import com.app.pojos.UserRegistration;

@RestController
@CrossOrigin
@RequestMapping("/admin")
public class AdminController 
{
   @Autowired
   private IAdminDao adao;
   
   @PutMapping("/editprofile/{id}")
   public ResponseEntity<?> editProfile(@PathVariable int id,@RequestBody UserRegistration u)
   {
	   System.out.println("in admin controller"+u.getUserId());
	   adao.editProfile(id,u);
	   return null;   
   }
   
   @PostMapping("/addproduct")
   public ResponseEntity<?> addProduct(@RequestBody Product prod)
   {
	   Product product = adao.addProduct(prod);
	   if( product == null)
	    return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
	  return  new ResponseEntity<Product>(product,HttpStatus.OK); 
   }
   
   @DeleteMapping("/deleteproduct/{id}")
   public ResponseEntity<?> deleteProduct(@PathVariable int id)
   {
	   String product = adao.deleteProduct(id);
	   if( product == null)
	    return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
	  return  new ResponseEntity<Void>(HttpStatus.OK); 
   }
   
   @GetMapping("/productlist")
   public ResponseEntity<?> showProductList()
   {
	   List<Product> prod= adao.listProduct();
	    if(prod.size() == 0 )
	    	return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
	    return new ResponseEntity<List<Product>>(prod,HttpStatus.OK);
   }
   
   @DeleteMapping("/deleteuser/{id}")
   public ResponseEntity<?> deleteUser(@PathVariable int id)
   {
	   String deleteuser=adao.deleteUser(id);
	   if(deleteuser == null)
		   return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
	   return new ResponseEntity<String>("deleted customer",HttpStatus.OK);
   }
   
   @GetMapping("/showorders")
   public ResponseEntity<?> showorders()
   {
	   List<Orders> l1=adao.listOfOrders();
	   if(l1.size() == 0)
		   return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
	   return new ResponseEntity<List<Orders>>(l1,HttpStatus.OK);
   }
   
//   @PutMapping("/editproduct/{id}")
//   public ResponseEntity<?> editProduct(@RequestBody Product p,@PathVariable int id)
//   {
//	   Product prod = adao.editProduct(p);
//	   
//   }
}
