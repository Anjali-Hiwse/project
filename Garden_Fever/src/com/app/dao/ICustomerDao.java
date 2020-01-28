package com.app.dao;


import java.util.List;

import com.app.pojos.Orders;
import com.app.pojos.Product;
import com.app.pojos.UserRegistration;

public interface ICustomerDao 
{
   UserRegistration registerNewCustomer(UserRegistration c);
   Product getProductById(int pId);
   UserRegistration getUserById(int id);
   Void addOrders(Orders order);
   int getId(String email);
 List<Orders> getcartDetails(int id);
}
