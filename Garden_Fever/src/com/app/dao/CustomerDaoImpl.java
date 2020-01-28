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
public class CustomerDaoImpl implements ICustomerDao
{
	@Autowired
    private SessionFactory sf;
		
	@Override
	public UserRegistration registerNewCustomer(UserRegistration c) 
	{
		c.setRole(UserRole.CUSTOMER);
		c.setStatus(Status.ACTIVE);
		sf.getCurrentSession().save(c);
		return c;
	}

	@Override
	public Product getProductById(int pId) {
       return sf.getCurrentSession().get(Product.class,pId);
	}

	@Override
	public UserRegistration getUserById(int id) 
	{
		return sf.getCurrentSession().get(UserRegistration.class,id);
	}

	@Override
	public Void addOrders(Orders order) {
		sf.getCurrentSession().persist(order);
		return null;
	}

	@Override
	public int getId(String email) 
	{
		String jpql="select u from UserRegistration u where u.email=:em";
		System.out.println(email);
		UserRegistration u = sf.getCurrentSession().createQuery(jpql, UserRegistration.class).setParameter("em", email).getSingleResult();
		if(u==null)
		{
			System.out.println("No User Found");
			return 0;
		}else
		{
			System.out.println(" User Found");
		return u.getUserId();
		}
	}

	@Override
	public List<Orders> getcartDetails(int id) 
	{
        String jpql="select o from Orders o left outer join fetch o.userId where o.usr.id=:id";
		
		return sf.getCurrentSession().createQuery(jpql, Orders.class).setParameter("id",id ).getResultList();
	}
     
}
