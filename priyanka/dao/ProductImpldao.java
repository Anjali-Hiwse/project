package com.app.dao;

import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.app.pojo.Categoryenum;
import com.app.pojo.Product;
import com.app.pojo.User;


@Repository
@Transactional
public class ProductImpldao implements ProductI
{
	@Autowired // byType , mandatory
	private SessionFactory sf;

	@Override
	public List<Product> getAllProducts()
	{
		String jpql = "select p from Product p";
     	System.out.println("getallproducts");
		return sf.getCurrentSession().createQuery(jpql,Product.class).getResultList();
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Product> listUserByCategory(Categoryenum category) 
	{
		String jpql = "select p from Product p where p.category=:category";
		return sf.getCurrentSession().createQuery(jpql,Product.class).setParameter("category", category).getResultList();
	}
	@Override
	public Product listProductById(int prod_id) 
	{
		
		return sf.getCurrentSession().get(Product.class, prod_id);
	}


	@Override
	public void deleteProduct(int prod_id) 
	{
		Product product = listProductById(prod_id);
		sf.getCurrentSession().delete(product);
		
	}

	@Override
	public Product addProductDetails(Product product,Integer cart_id) 
	{
		product.getOwner().setCart_id(cart_id);
		sf.getCurrentSession().persist(product);
		return product;
	}

}
