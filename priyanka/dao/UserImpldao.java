package com.app.dao;

import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.app.pojo.Role;
import com.app.pojo.User;


@Repository
@Transactional
public class UserImpldao implements UserI 
{

	@Autowired // byType , mandatory
	private SessionFactory sf;
	@Override
	public User validateUser(String email, String password) 
	{
		
		System.out.println("validateusers"+email+" "+password);
		try {
		String jpql="select u from User u where u.email=:email and u.password=:password";
		System.out.println("Login successfull");
		return sf.getCurrentSession().createQuery(jpql,User.class).setParameter("email", email)
				.setParameter("password", password).getSingleResult();
		}
		catch (Exception e) 
		{
			System.out.println("Login unsuccessfull");
			e.printStackTrace();
			return null;
		}
	}
	@Override
	public List<User> getAllUsers() 
	{
		String jpql = "select u from User u";
		System.out.println("getallusers");
		return sf.getCurrentSession().createQuery(jpql, User.class).getResultList();
	}
	@Override
	public List<User> listUserByRole(Role role) 
	{
		String jpql = "select u from User u where u.role=:role";
		return sf.getCurrentSession().createQuery(jpql,User.class).setParameter("role", role).getResultList();
	}
	@Override
	public User listUserById(int user_id) 
	{
		
		return sf.getCurrentSession().get(User.class, user_id);
	}
	@Override
	public User addUserDetails(User user) 
	{
		sf.getCurrentSession().persist(user);
		return user;
	}
	
	@Override
	public void deleteUser(int user_id) 
	{
		User user = listUserById(user_id);
		sf.getCurrentSession().delete(user);
		
	}

}
