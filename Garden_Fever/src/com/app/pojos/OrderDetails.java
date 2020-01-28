package com.app.pojos;



import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "order_details")
public class OrderDetails 
{
  private Integer opId;
  private Orders orderId;
  private Product prod;
  private Integer quantity;
  private Double price;
  
  public OrderDetails() {
	System.out.println("in order details table");
   }
	
	public OrderDetails(Integer quantity, Double price) {
	super();
	this.quantity = quantity;
	this.price = price;
}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Integer getOpId() {
		return opId;
	}
	public void setOpId(Integer opId) {
		this.opId = opId;
	}
	
	@ManyToOne
	@JoinColumn(name = "order_id")
	public Orders getOrderId() {
		return orderId;
	}
	public void setOrderId(Orders orderId) {
		this.orderId = orderId;
	}
	
	@ManyToOne
	@JoinColumn(name = "product_id")
	public Product getProd() {
		return prod;
	}
	public void setProd(Product productList) {
		this.prod = productList;
	}
	
	@Column(name = "quantity")
	public Integer getQuantity() {
		return quantity;
	}
	public void setQuantity(Integer quantity) {
		this.quantity = quantity;
	}
	
	@Column(name = "price")
	public Double getPrice() {
		return price;
	}
	public void setPrice(Double price) {
		this.price = price;
	}
	
	@Override
	public String toString() {
		return "OrderDetails [opId=" + opId + ", orderId=" + orderId + ", prod=" + prod + ", quantity=" + quantity
				+ ", price=" + price + "]";
	}
		
}
