package com.app.dao;

import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.app.pojo.Address;
import com.app.pojo.User;


@Repository
@Transactional
public class AddressImpldao implements AddressI 
{
	@Autowired // byType , mandatory
	private SessionFactory sf;
	@Override
	public List<Address> getAllAddress(int user_id) 
	{
		String jpql = "select a from Address a where a.owner.user_id=:user_id";
		System.out.println("get all address for particular user"+ user_id);
		return (List<Address>) sf.getCurrentSession().createQuery(jpql, Address.class).setParameter("user_id", user_id).getResultList();
	}
//	@Override
//	public Address addUserAddress(Address address,Integer user_id) 
//	{
//		User user = new User();
//		user.addAddress(address);
//		System.out.println("in add userAddress");
//		sf.getCurrentSession().persist(address);
//		return address;
//	}
}
