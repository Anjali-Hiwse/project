package com.app.pojo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "Feedback")
public class Feedback
{
  private Integer feedback_id;
  private User user_id;
  private Product prod_id;
  private String feedback_prod;
 
  private int rating;
  private byte[] image;
  
  
public Feedback() {
	super();
}

public Feedback(String feedback_prod, int rating, byte[] image) {
	super();
	this.feedback_prod = feedback_prod;
	//this.feedback_delivery = feedback_delivery;
	this.rating = rating;
	this.image = image;
}

@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
public Integer getFeedback_id() {
	return feedback_id;
}
public void setFeedback_id(Integer feedback_id) {
	this.feedback_id = feedback_id;
}

@ManyToOne
public Product getProd_id() {
	return prod_id;
}
public void setProd_id(Product prod_id) {
	this.prod_id = prod_id;
}


@Column(length = 50)

public String getFeedback_prod() {
	return feedback_prod;
}
public void setFeedback_prod(String feedback_prod) {
	this.feedback_prod = feedback_prod;
}


public int getRating() {
	return rating;
}
public void setRating(int rating) {
	this.rating = rating;
}
@Lob
public byte[] getImage() {
	return image;
}
public void setImage(byte[] image) {
	this.image = image;
}
@ManyToOne
public User getUser_id() {
	return user_id;
}

public void setUser_id(User user_id) {
	this.user_id = user_id;
}
  
  
  
}
