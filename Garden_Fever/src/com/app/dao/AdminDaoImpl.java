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
import com.app.pojos.UserRole;


@Repository
@Transactional
public class AdminDaoImpl implements IAdminDao {

	@Autowired
	private SessionFactory sf;

	
	@Override
	public UserRegistration editProfile(UserRegistration u) 
	{
		sf.getCurrentSession().update(u);	
		return u;
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
//		  prod.setpStatus(Status.INACTIVE);
//		  sf.getCurrentSession().update(prod);
          sf.getCurrentSession().delete(prod);
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
		u.setStatus(Status.INACTIVE);
		return null;
	}


	@Override
	public List<Orders> listOfOrders() 
	{
		String jpql="select o from Orders o";
		return sf.getCurrentSession().createQuery(jpql, Orders.class).getResultList();
	}


	@Override
	public Product editProduct(Product p, int id) {
//	 Product prod= sf.getCurrentSession().get(Product.class, id);
//	 prod.setpName(p.getpName());
//	 prod.setpDesc(p.getpDesc());
//	 prod
		sf.getCurrentSession().update(p);
		return p;
	}

	@Override
	public Product getProductById(int id) {
		return sf.getCurrentSession().get(Product.class,id);
	}


	@Override
	public UserRegistration getId(String email) {
		String jpql="select u from UserRegistration u where u.email=:email";
		return sf.getCurrentSession().createQuery(jpql,UserRegistration.class).setParameter("email",email).getSingleResult();
		
	}


	@Override
	public List<UserRegistration> getCustomer() {
		String jpql="select u from UserRegistration u where u.role=:cust";
		return sf.getCurrentSession().createQuery(jpql,UserRegistration.class).setParameter("cust",UserRole.CUSTOMER).getResultList();
	}

}
