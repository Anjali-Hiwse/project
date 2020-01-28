package com.app.pojos;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="user_details")

public class UserRegistration 
{
   private Integer userId;
   private String firstName,lastName,email,password,phone;
   private Address address;
   private UserRole role;
   private Status status;
   @JsonIgnore
   private List<Orders> list=new ArrayList<Orders>();
   
   
	   public UserRegistration() {
		System.out.println("in default ctor");
	 }
		  
	public UserRegistration(String firstName, String lastName, String email, String password, String phone) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
		this.phone = phone;
	}

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	public Integer getUserId() {
		return userId;
	}
	public void setUserId(Integer userId) {
		this.userId = userId;
	}
	
	@Column(name="phone",length = 20)
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	@Column(name = "fname",length = 20)
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
	
	@Column(name = "email",length=20,unique = true)
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	
	@Column(name="password",unique =true,length=20)
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

    @OneToMany(mappedBy = "userId",cascade = CascadeType.ALL,orphanRemoval = true,fetch = FetchType.EAGER)
	public List<Orders> getList() {
		return list;
	}
	public void setList(List<Orders> list) {
		this.list = list;
	}

	@Enumerated(EnumType.STRING)
	@Column(name = "user_role")
	public UserRole getRole() {
		return role;
	}
	public void setRole(UserRole role) {
		this.role = role;
	}
	
	@Enumerated(EnumType.STRING)
	@Column(name= "user_status",length=20)
	public Status getStatus() {
		return status;
	}
	public void setStatus(Status status) {
		this.status = status;
	}

	@Override
	public String toString() {
		return "UserRegistration [userId=" + userId + ", firstName=" + firstName + ", lastName=" + lastName + ", email="
				+ email + ", password=" + password + ", phone=" + phone + ", address=" + address + ", role=" + role
				+ ", status=" + status + ", list=" + list + "]";
	}

	// add helper methods of orders
	public void addOrders(Orders o)
	{
		list.add(o);
		o.setUserId(this);
	}
	
	public void removeOrders(Orders o)
	{
		list.remove(o);
		o.setUserId(null);
	}
	
}
