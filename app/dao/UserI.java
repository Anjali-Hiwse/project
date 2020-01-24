package com.app.dao;

import java.util.List;

import com.app.pojo.Role;
import com.app.pojo.User;

public interface UserI 
{
	User validateUser(String email, String password);
	
	 List<User> getAllUsers();
	 List<User> listUserByRole(Role role);
	 User listUserById(int user_id);
	 User addUserDetails(User user);
	 void deleteUser(int user_id);
    
}
