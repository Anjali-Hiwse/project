package com.app.pojo;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import java.util.*;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;




@Entity
@Table(name = "Cart")
public class Cart 
{
 private Integer cart_id;
 private User owner;
 private List<Product> prod_id= new ArrayList<>();
 private int quantity;
 private double price;
 
 
 public Cart() {
		super();
	}
 public Cart(int quantity, double price) {
	super();
	this.quantity = quantity;
	this.price = price;
}
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
public Integer getCart_id() {
	return cart_id;
}
public void setCart_id(Integer cart_id) {
	this.cart_id = cart_id;
}
@ManyToOne
@JoinColumn(name="user_id")
@JsonIgnore
public User getOwner() {
	return owner;
}
public void setOwner(User owner) {
	this.owner = owner;
}
@OneToMany(mappedBy = "owner", cascade = CascadeType.ALL,orphanRemoval = true)
@JsonIgnore
public List<Product> getProd_id() {
	return prod_id;
}
public void setProd_id(List<Product> prod_id) {
	this.prod_id = prod_id;
}
@Column
public int getQuantity() {
	return quantity;
}
public void setQuantity(int quantity) {
	this.quantity = quantity;
}
@Column
public double getPrice() {
	return price;
}
public void setPrice(double price) {
	this.price = price;
}
@Override
public String toString() {
	return "Cart [cart_id=" + cart_id + ", owner=" + owner + ", prod_id=" + prod_id + ", quantity=" + quantity
			+ ", price=" + price + "]";
}
 
}
