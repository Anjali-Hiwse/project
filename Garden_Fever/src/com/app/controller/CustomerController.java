package com.app.controller;

import java.util.Date;
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

import com.app.dao.IAdminDao;
import com.app.dao.ICustomerDao;
import com.app.pojos.OrderDetails;
import com.app.pojos.OrderStatus;
import com.app.pojos.Orders;
import com.app.pojos.Product;
import com.app.pojos.Status;
import com.app.pojos.UserRegistration;

@RestController
@CrossOrigin
@RequestMapping("/customer")
public class CustomerController 
{
    @Autowired
    private ICustomerDao dao;
    
    @Autowired
    private IAdminDao dao2;
    
    @PostConstruct
    public void init()
    {
    	System.out.println("in customer controller"+dao);
    }
    
    @PostMapping("/addtocart/{uid}/{pid}")
    public ResponseEntity<?> addToCart(@RequestBody int quantity,@PathVariable int uid,@PathVariable int pid)
    {
      System.out.println("in add to cart");
      System.out.println(quantity);
      
      Product p =dao.getProductById(pid);
      double  price = p.getPrice();
      UserRegistration u= dao.getUserById(uid);
      double amount = quantity * price;
      OrderDetails od=new OrderDetails(quantity,price);
	  od.setProd(p);
	   Orders order=new Orders(p.getpUpdated(),amount);
	    order.setStatus(OrderStatus.ORDERED);
		order.setUserId(u);
		order.addOrderDetails(od);
		try
		{
		  return new ResponseEntity<Void>(dao.addOrders(order),HttpStatus.CREATED);
		} 
		catch (RuntimeException e) 
		{
		  return new ResponseEntity<Void>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
    }
    
    @GetMapping("/cart/{email}")
	public ResponseEntity<?> showCart(@PathVariable String email){
    	int id = dao.getId(email);
		  List<Orders> or = dao.getcartDetails(id);
		if(or==null)
		{
			return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<List<Orders>>(or,HttpStatus.OK);
	}
	
    @GetMapping("/getsp/{pid}")
	public ResponseEntity<?> getproduct(@PathVariable int pid){
		Product products = dao2.getProductById(pid);
		if(products==null)
		{
			return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<Product>(products,HttpStatus.OK);
		
      }
}
