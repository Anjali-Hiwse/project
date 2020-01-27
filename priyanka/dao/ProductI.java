package com.app.dao;

import java.util.List;

import com.app.pojo.Categoryenum;
import com.app.pojo.Product;
import com.app.pojo.User;

public interface ProductI 
{
	List<Product> getAllProducts(); 
	Product listProductById(int prod_id);
	Product addProductDetails(Product product,Integer cart_id);
	List<Product> listUserByCategory(Categoryenum category);
	void deleteProduct(int prod_id) ;
	
}
