package com.app.dao;

import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.app.pojos.OrderDetails;
import com.app.pojos.Status;
import com.app.pojos.UserRegistration;
import com.app.pojos.UserRole;

@Repository
@Transactional
public class UserDaoImpl implements IUserDao
{

	 @Autowired
     private SessionFactory sf;
	 
	@Override
	public List<UserRegistration> getUserList() 
	{
		String jpql="select u from UserRegistration u";
		return sf.getCurrentSession().createQuery(jpql, UserRegistration.class).getResultList();
	}

	@Override
	public UserRegistration authenticateUser(String email, String password) {
		String jpql = "select u from UserRegistration u where u.email =:eml and u.password =:pwd";
		return sf.getCurrentSession().createQuery(jpql, UserRegistration.class).setParameter("eml", email)
				.setParameter("pwd", password).getSingleResult();
	}

	@Override
	public UserRegistration register(UserRegistration user) {
		user.setRole(UserRole.CUSTOMER);
		user.setStatus(Status.ACTIVE);
		sf.getCurrentSession().save(user);
		return user;
	}

	@Override
	public List<OrderDetails> getAllOrders() 
	{
		String jpql="select o from OrderDetails o left outer join fetch o.orderId";
		return sf.getCurrentSession().createQuery(jpql, OrderDetails.class).getResultList();
	
	}
    
}
