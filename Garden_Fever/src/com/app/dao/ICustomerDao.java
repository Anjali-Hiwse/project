package com.app.dao;

import com.app.pojos.UserRegistration;

public interface ICustomerDao 
{
   UserRegistration registerNewCustomer(UserRegistration c);
}
