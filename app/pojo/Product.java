package com.app.pojo;

import java.util.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.validator.constraints.NotEmpty;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "Product")
public class Product
{
	private Integer prod_id;
	
	private String name;
	private String description_title;
	private String description;
	private double price;
	private int available_quantity;
	//private String shelf_life;
	private int quantity;
	private byte[] image;
	private Cart owner;
	private List<Feedback> feedback_id= new ArrayList<>();
	private Categoryenum category;
	
	public Product() {
		super();
	}
	public Product(String name, String description_title, String description, double price, int available_quantity,
			 int quantity, byte[] image) {
		super();
		this.name = name;
		this.description_title = description_title;
		this.description = description;
		this.price = price;
		this.available_quantity = available_quantity;
		//this.shelf_life = shelf_life;
		this.quantity = quantity;
		this.image = image;
		
	}
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Integer getProd_id() {
		return prod_id;
	}
	public void setProd_id(Integer prod_id) {
		this.prod_id = prod_id;
	}
	@NotEmpty(message="Name must be Supplied")
	@Column(length = 20)
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	@NotEmpty(message="Description must be Supplied")
	@Column(length = 20)
	public String getDescription_title() {
		return description_title;
	}
	public void setDescription_title(String description_title) {
		this.description_title = description_title;
	}
	@NotEmpty(message="Description must be Supplied")
	@Column(length = 50)
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	public int getAvailable_quantity() {
		return available_quantity;
	}
	public void setAvailable_quantity(int available_quantity) {
		this.available_quantity = available_quantity;
	}
	
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	@Lob
	public byte[] getImage() {
		return image;
	}
	public void setImage(byte[] image) {
		this.image = image;
	}
	
	@OneToMany(mappedBy = "prod_id")
	@JsonIgnore
	public List<Feedback> getFeedback_id() {
		return feedback_id;
	}
	public void setFeedback_id(List<Feedback> feedback_id) {
		this.feedback_id = feedback_id;
	}
	@Enumerated(EnumType.STRING)
	public Categoryenum getCategory() {
		return category;
	}
	public void setCategory(Categoryenum category) {
		this.category = category;
	}
	
	
	@ManyToOne
	@JoinColumn(name = "cart_id")
	@JsonIgnore
	public Cart getOwner() {
		return owner;
	}
	public void setOwner(Cart owner) {
		this.owner = owner;
	}
	@Override
	public String toString() {
		return "Product [prod_id=" + prod_id + ", name=" + name + ", description_title=" + description_title
				+ ", description=" + description + ", price=" + price + ", available_quantity=" + available_quantity
				 + ", quantity=" + quantity + ", image=" + Arrays.toString(image)
				+ ", feedback_id=" + feedback_id + ", category=" + category + "]";
	}

}
