package org.sunbeam.dac.dao;

import java.util.List;



import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import org.sunbeam.dac.pojos.Address;
import org.sunbeam.dac.pojos.UserRole;
import org.sunbeam.dac.pojos.Users;


@Repository
@Transactional
public class UserDaoImpl implements IUserDao {

	@Autowired
	private SessionFactory sf;
	@Override
	public List<Users> getAllusers() {
		String jpql="select u from Users u";
		return sf.getCurrentSession().createQuery(jpql, Users.class).getResultList();
	}
	@Override
	public Users checkUser(String email, String password) 
	{
		String jpql="select u from Users u where u.email=:em and u.password=:pwd";	
		Users u = sf.getCurrentSession().createQuery(jpql, Users.class).setParameter("em", email).setParameter("pwd", password).getSingleResult();
		if(u==null)
		{
			System.out.println("No User Found");
			return null;
		}else
		{
			System.out.println(" User Found");
		return u;
		}
	}
	@Override
	public Users registerUser(Users u) {
		
		u.setRole(UserRole.CUSTOMER);
		System.out.println(u);
	
	
	sf.getCurrentSession().save(u);
		
		return u;
	}
	@Override
	public Users getUserOrderDetails(int id) {
		String jpql="select u from Users u left outer join fetch u.ordr where u.id=:id";
		return sf.getCurrentSession().createQuery(jpql, Users.class).setParameter("id", id).getSingleResult();
	}
	@Override
	public Users getrole(String email) {
		String jpql="select u from Users u where u.email=:em";
		System.out.println(email);
		Users u = sf.getCurrentSession().createQuery(jpql, Users.class).setParameter("em", email).getSingleResult();
		if(u==null)
		{
			System.out.println("No User Found");
			return null;
		}else
		{
			System.out.println(" User Found");
		return u;
		}
	}

}
