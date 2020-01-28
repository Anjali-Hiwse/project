package com.app.controller;



import java.util.Date;
import java.util.List;

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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.app.dao.IAdminDao;
import com.app.pojos.Category;
import com.app.pojos.Orders;
import com.app.pojos.Product;
import com.app.pojos.UserRegistration;

@RestController
@RequestMapping("/admin")
@CrossOrigin(origins="http://localhost:4200")
public class AdminController 
{
   @Autowired
   private IAdminDao adao;
   
   @PostMapping("/editprofile")
   public ResponseEntity<?> editProfile(@RequestBody UserRegistration u)
   {
	   System.out.println("in admin controller"+u.getUserId());
	   adao.editProfile(u);
	   return null;   
   }
   
   @PostMapping("/addproduct")
   public ResponseEntity<?> addProduct(@RequestParam String pName,@RequestParam String pDesc,@RequestParam double price
		                              ,@RequestParam String productCategory,@RequestParam int stock,@RequestBody Date date,
		                              @RequestParam(value = "p_image", required = false) MultipartFile p_image
		                              )
   {
	   System.out.println(pName+pDesc+price);
	   try 
		{	
		Product p =new Product(pName,pDesc,price,Category.valueOf(productCategory),stock,date);
		if(p_image!=null)
		{
			p.setImage(p_image.getBytes());
		}
		adao.addProduct(p);
		return new ResponseEntity<Void>( HttpStatus.CREATED);
	} catch(Exception e1) {
		e1.printStackTrace();// only for debugging
		return new ResponseEntity<Void>(HttpStatus.INTERNAL_SERVER_ERROR);
	}
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
   @GetMapping("/custlist")
   public ResponseEntity<?> getcustlist()
   {
	   List<UserRegistration> u= adao.getCustomer();
	    if(u.size() == 0 )
	    	return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
	    return new ResponseEntity<List<UserRegistration>>(u,HttpStatus.OK);
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
   
   
   @GetMapping("/val/{email}")
   public ResponseEntity<?> validateUser(@PathVariable String email)
   {
	   UserRegistration u=adao.getId(email);
	   if(u== null)
		   return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
	   return  new ResponseEntity<UserRegistration>(u,HttpStatus.OK);
	   
   }
   
   @GetMapping("/editproduct/{id}")
   public ResponseEntity<?> validateProdId(@PathVariable int id)
   {
	   Product p = adao.getProductById(id);
	   if(p == null)
		   return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
	   return new ResponseEntity<Product>(p,HttpStatus.OK);
   }
   
   @PostMapping("/updateproduct/{pid}")
   public ResponseEntity<?> updateProduct(@PathVariable int pid,@RequestBody Product prod)
   {
	   Product p=adao.editProduct(prod, pid);
	   if(p == null)
		   return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
	   return new ResponseEntity<Product>(p,HttpStatus.OK);
   }
}
