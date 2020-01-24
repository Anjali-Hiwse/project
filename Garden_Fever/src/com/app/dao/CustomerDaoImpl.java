package com.app.dao;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

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
		sf.getCurrentSession().save(c);
		return c;
	}
     
}
