
package com.app.pojo;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "Address")
public class Address 
{
   private Integer addr_id;
   private String flat_no;
   private String street;
   private String addrLine1;
   private String addrLine2;
   private String city;
   private String state;
   private int pincode;
   private int contact_no;
   private User owner;
 
public Address() {
	super();
}
public Address(String flat_no, String street, String addrLine1, String addrLine2, String city, String state,
		int pincode, int contact_no) {
	super();
	this.flat_no = flat_no;
	this.street = street;
	this.addrLine1 = addrLine1;
	this.addrLine2 = addrLine2;
	this.city = city;
	this.state = state;
	this.pincode = pincode;
	this.contact_no = contact_no;
}
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
public Integer getAddr_id() {
	return addr_id;
}
public void setAddr_id(Integer addr_id) {
	this.addr_id = addr_id;
}
@Column(length=20)
public String getFlat_no() {
	return flat_no;
}
public void setFlat_no(String flat_no) {
	this.flat_no = flat_no;
}
@Column(length=20)
public String getStreet() {
	return street;
}
public void setStreet(String street) {
	this.street = street;
}
@Column(length=50)
public String getAddrLine1() {
	return addrLine1;
}
public void setAddrLine1(String addrLine1) {
	this.addrLine1 = addrLine1;
}
@Column(length=50)
public String getAddrLine2() {
	return addrLine2;
}
public void setAddrLine2(String addrLine2) {
	this.addrLine2 = addrLine2;
}
@Column(length=20)
public String getCity() {
	return city;
}
public void setCity(String city) {
	this.city = city;
}
@Column(length=20)
public String getState() {
	return state;
}
public void setState(String state) {
	this.state = state;
}@Column
public int getPincode() {
	return pincode;
}
public void setPincode(int pincode) {
	this.pincode = pincode;
}
@Column
public int getContact_no() {
	return contact_no;
}
public void setContact_no(int contact_no) {
	this.contact_no = contact_no;
}
@ManyToOne(cascade = CascadeType.ALL)
@JoinColumn(name = "user_id")
public User getOwner() {
	return owner;
}
public void setOwner(User owner) {
	this.owner = owner;
}
@Override
public String toString() {
	return "Address [addr_id=" + addr_id + ", flat_no=" + flat_no + ", street=" + street + ", addrLine1=" + addrLine1
			+ ", addrLine2=" + addrLine2 + ", city=" + city + ", state=" + state + ", pincode=" + pincode
			+ ", contact_no=" + contact_no + ", owner=" + owner + "]";
}
   
   
}
