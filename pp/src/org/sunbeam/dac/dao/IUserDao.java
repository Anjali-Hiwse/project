package org.sunbeam.dac.dao;

import java.util.List;


import org.sunbeam.dac.pojos.Users;

public interface IUserDao 
{
   List<Users> getAllusers();
   Users checkUser(String email,String password);
   Users registerUser(Users u);
   Users getUserOrderDetails(int id);
   Users getrole(String email);
}
