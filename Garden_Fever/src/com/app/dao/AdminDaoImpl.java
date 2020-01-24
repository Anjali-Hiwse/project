package com.app.dao;

import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.app.pojos.Orders;
import com.app.pojos.Product;
import com.app.pojos.Status;
import com.app.pojos.UserRegistration;


@Repository
@Transactional
public class AdminDaoImpl implements IAdminDao {

	@Autowired
	private SessionFactory sf;

	
	@Override
	public UserRegistration editProfile(int id,UserRegistration u) 
	{
		UserRegistration user = sf.getCurrentSession().get(UserRegistration.class, id);
		user.setFirstName(u.getFirstName());
		user.setLastName(u.getLastName());
		user.setEmail(u.getEmail());
		user.setPassword(u.getPassword());
	    user.setPhone(u.getPhone());	
		return null;
	}


	@Override
	public Product addProduct(Product p) 
	{
	    sf.getCurrentSession().persist(p);
		return null;
	}

    @Override
	public String deleteProduct(int id) {
		 Product prod=sf.getCurrentSession().get(Product.class,id);
		  sf.getCurrentSession().delete(prod);;
		return null;
	}

    @Override
	public List<Product> listProduct() 
	{
		String jpql= "select p from Product p";
		return sf.getCurrentSession().createQuery(jpql, Product.class).getResultList();
	}


	@Override
	public String deleteUser(int userId) 
	{
		UserRegistration u=sf.getCurrentSession().get(UserRegistration.class, userId);
		u.setStatus(Status.INACTIVE);;
		return null;
	}


	@Override
	public List<Orders> listOfOrders() 
	{
		String jpql="select o from Orders o";
		return sf.getCurrentSession().createQuery(jpql, Orders.class).getResultList();
	}


	@Override
	public Product editProduct(Product p) {
		sf.getCurrentSession().persist(p);
		return null;
	}


	@Override
	public Product getProductById() {
		// TODO Auto-generated method stub
		return null;
	}
    

}
