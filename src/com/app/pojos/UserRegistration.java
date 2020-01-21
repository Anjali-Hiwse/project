package com.app.pojos;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;

@Entity
@Table(name="user_details")
@Embeddable
public class UserRegistration 
{
   private Integer userId;
   private String firstName,lastName,email,password;
   private Address address;
   private UserLogin loginDetails;
   private List<Orders> list=new ArrayList<Orders>();
   
   
	   public UserRegistration() {
		System.out.println("in default ctor");
	 }
		  
	    public UserRegistration(String firstName, String lastName, String email, String password) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
	}


	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	public Integer getUserId() {
		return userId;
	}
	public void setUserId(Integer userId) {
		this.userId = userId;
	}
	
	@Column(name = "fname",length = 20,nullable = false)
	public String getFirstName() {
		return firstName;
	}
	
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	
	@Column(name = "lname",length=20)
	public String getLastName() {
		return lastName;
	}
	
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	
	@Column(name = "email",length=20,unique = true,nullable = false)
	public String getEmail() {
		return email;
	}
	
	public void setEmail(String email) {
		this.email = email;
	}
	
	@Column(name="password",nullable = false,unique =true,length=20)
	public String getPassword() {
		return password;
	}
	
	public void setPassword(String password) {
		this.password = password;
	}
	
	@Embedded
    public Address getAddress() {
		return address;
	}

	public void setAddress(Address address) {
		this.address = address;
	}

	@OneToMany(mappedBy = "userId",cascade = CascadeType.ALL)
	public List<Orders> getList() {
		return list;
	}
	public void setList(List<Orders> list) {
		this.list = list;
	}
	
	
	@OneToOne(mappedBy = "selectedUserId",cascade = CascadeType.ALL)
	public UserLogin getLoginDetails() {
		return loginDetails;
	}
	public void setLoginDetails(UserLogin loginDetails) {
		this.loginDetails = loginDetails;
	}

	@Override
	public String toString() {
		return "UserRegistration [userId=" + userId + ", firstName=" + firstName + ", lastName=" + lastName + ", email="
				+ email + ", password=" + password + ", address=" + address + ", loginDetails=" + loginDetails
				+ ", list=" + list + "]";
	}
   
}
