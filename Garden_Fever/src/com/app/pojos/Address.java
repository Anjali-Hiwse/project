package com.app.pojos;

import javax.persistence.*;

@Embeddable
public class Address 
{
   private String state,city,zip;
   private String addressLine1,addressLine2;
   private String country;
   
   
    
	
	@Column(name="state",length=20)
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	
	@Column(name="city",length = 20)
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	
	@Column(name = "zip",length=10)
	public String getZip() {
		return zip;
	}
	public void setZip(String zip) {
		this.zip = zip;
	}
	
	@Column(name = "addressline1",length=50)
	public String getAddressLine1() {
		return addressLine1;
	}
	public void setAddressLine1(String addressLine1) {
		this.addressLine1 = addressLine1;
	}
	
	@Column(name="addressline2",length = 50)
	public String getAddressLine2() {
		return addressLine2;
	}
	public void setAddressLine2(String addressLine2) {
		this.addressLine2 = addressLine2;
	}
	
	@Column(name = "country",length = 20)
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	@Override
	public String toString() {
		return "Address [state=" + state + ", city=" + city + ", zip=" + zip + ", addressLine1=" + addressLine1
				+ ", addressLine2=" + addressLine2 + ", country=" + country + "]";
	}
	
		      
}
