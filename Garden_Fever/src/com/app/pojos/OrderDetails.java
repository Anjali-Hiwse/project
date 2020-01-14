package com.app.pojos;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;

@Entity
@Table(name = "order_details")
public class OrderDetails 
{
  private Integer opId;
  private Orders orderId;
  private List<Product> productList= new ArrayList<Product>();
  private Integer quantity;
  
  public OrderDetails() {
	System.out.println("in order details table");
   }
	public OrderDetails(Integer quantity) {
		super();
		this.quantity = quantity;
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
	
	
	@OneToMany(mappedBy = "pId",cascade = CascadeType.ALL,fetch = FetchType.EAGER)
	public List<Product> getProductList() {
		return productList;
	}
	public void setProductList(List<Product> productList) {
		this.productList = productList;
	}
	
	@Column(name = "quantity")
	public Integer getQuantity() {
		return quantity;
	}
	public void setQuantity(Integer quantity) {
		this.quantity = quantity;
	}
	
	@Override
	public String toString() {
		return "OrderDetails [opId=" + opId + ", orderId=" + orderId + ", productList=" + productList + ", quantity="
				+ quantity + "]";
	}
		
}
