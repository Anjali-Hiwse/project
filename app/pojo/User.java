package com.app.pojo;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.Pattern;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.*;

@Entity
@Table(name = "User")
public class User 
{
  private Integer user_id;
  private String email;
  private String password;
  private String name;
  private byte[] image;
  @JsonIgnore
  private List<Address> addr_id = new ArrayList<>();
  @JsonIgnore
  private List<Salary> salary_id= new ArrayList<>();
  @JsonIgnore
  private List<Cart> cart_id = new ArrayList<>();
  @JsonIgnore
  private  List<Feedback>  feedback_id= new ArrayList<>();
  
  @JsonIgnore
  private List<Orders> orders = new ArrayList<>();
  @JsonProperty
  private Role role;
  
  
  

public User() {
	super();
}
public User(String email, String password, String name, byte[] image) {
	super();
	this.email = email;
	this.password = password;
	this.name = name;
	this.image = image;
}
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
@Column(name="user_id")
public Integer getUser_id() {
	return user_id;
}
public void setUser_id(Integer user_id) {
	this.user_id = user_id;
}
@Column(length = 30)
@Pattern(regexp = "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@"
+ "[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$")
public String getEmail() {
	return email;
}
public void setEmail(String email) {
	this.email = email;
}
@Column(length = 16)
@Pattern(regexp = "((?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})")
public String getPassword() {
	return password;
}
public void setPassword(String password) {
	this.password = password;
}
@Enumerated(EnumType.STRING)
@Column(length = 20)
public Role getRole() {
	return role;
}
public void setRole(Role role) {
	this.role = role;
}
@Column(length=20)
public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
}
@Lob
public byte[] getImage() {
	return image;
}
public void setImage(byte[] image) {
	this.image = image;
}

@OneToMany(mappedBy = "owner",cascade = CascadeType.ALL,orphanRemoval = true)
public List<Address> getAddr_id() {
	return addr_id;
}
public void setAddr_id(List<Address> addr_id) {
	this.addr_id = addr_id;
}
@OneToMany(mappedBy = "owner",cascade = CascadeType.ALL,orphanRemoval = true)
public List<Salary> getSalary_id() {
	return salary_id;
}
public void setSalary_id(List<Salary> salary_id) {
	this.salary_id = salary_id;
}
@OneToMany(mappedBy = "user_id",cascade = CascadeType.ALL,orphanRemoval = true)
public List<Feedback> getFeedback_id() {
	return feedback_id;
}
public void setFeedback_id(List<Feedback> feedback_id) {
	this.feedback_id = feedback_id;
}
@OneToMany(mappedBy = "owner",cascade = CascadeType.ALL,orphanRemoval = true)
public List<Cart> getCart_id() {
	return cart_id;
}
public void setCart_id(List<Cart> cart_id) {
	this.cart_id = cart_id;
}
@OneToMany(mappedBy = "owner", cascade = CascadeType.ALL, orphanRemoval = true)
public List<Orders> getOrders() {
	return orders;
}
public void setOrders(List<Orders> orders) {
	this.orders = orders;
}


//helper methods

     //address
public void addAddress(Address addr)
{
	addr_id.add(addr);
	addr.setOwner(this);
}
public void removeAddress(Address addr)
{
	addr_id.remove(addr);
	addr.setOwner(null);
}
     //salary
public void addSalary(Salary salary)
{
	salary_id.add(salary);
	salary.setOwner(this);
}
public void removeSalary(Salary salary)
{
	salary_id.remove(salary);
	salary.setOwner(null);
}

//Cart
public void addtoCart(Cart cart)
{
	cart_id.add(cart);
	cart.setOwner(this);
}
public void removeCart(Cart cart)
{
	cart_id.remove(cart);
	cart.setOwner(null);
}
//feedback
//public void addfeedback(Feedback feedback)
//{
//	feedback_id.add(feedback);
//	feedback.setFeedback_id(feedback_id);;
//}

//orders
public void addOrder(Orders order)
{
	orders.add(order);
	order.setOwner(this);
}
public void removeOrder(Orders order)
{
	orders.remove(order);
	order.setOwner(null);
}
@Override
public String toString() {
	return "User [user_id=" + user_id + ", email=" + email + ", password=" + password + ", name=" + name + ", image="
			+ Arrays.toString(image) + ", role=" + role + "]";
}




  
  
}
