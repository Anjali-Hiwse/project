package com.app.dao;

import java.util.List;

import com.app.pojos.OrderDetails;
import com.app.pojos.UserRegistration;

public interface IUserDao 
{
	// select method
   List<UserRegistration> getUserList();
   // Login method
   UserRegistration authenticateUser(String email,String password);
   //registration 
   UserRegistration register(UserRegistration user);  
   
   List<OrderDetails> getAllOrders();
}
