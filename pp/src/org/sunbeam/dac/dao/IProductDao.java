package org.sunbeam.dac.dao;

import java.util.List;


import org.sunbeam.dac.pojos.Product;

public interface IProductDao 
{
 List<Product> getAllProducts();
 List<Product> getProductBybat();
 List<Product> getProductByball();
 List<Product> getProductBygloves();
 List<Product> getProductByclothing();
 List<Product> getProductByshoes();
 List<Product> addProduct(Product p);
 
}
