package com.app.dao;

import java.util.List;

import com.app.pojo.Address;

public interface AddressI
{
	List<Address> getAllAddress(int user_id);
	//Address addUserAddress(Address address,Integer user_id);
}
