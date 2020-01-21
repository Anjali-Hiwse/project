package com.app.dao;

import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.app.pojos.UserLogin;

@Repository
@Transactional
public class UserDaoImpl implements IUserDao
{

	 @Autowired
     private SessionFactory sf;
	 
	@Override
	public List<UserLogin> getUserList() 
	{
		String jpql="select u from UserLogin u";
		return sf.getCurrentSession().createQuery(jpql, UserLogin.class).getResultList();
	}
    
}
