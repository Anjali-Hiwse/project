package com.app.dao;

import java.util.List;

import com.app.pojos.Orders;
import com.app.pojos.Product;
import com.app.pojos.UserRegistration;

public interface IAdminDao 
{
    UserRegistration editProfile(int id,UserRegistration u);
    Product addProduct(Product p);
    String deleteProduct(int id);
    List<Product> listProduct();
   // String addStock(int id,int stock);
    String deleteUser(int userId);
    List<Orders> listOfOrders();
    Product getProductById();
    Product editProduct(Product p);
    
}
