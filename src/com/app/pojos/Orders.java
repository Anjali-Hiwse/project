package com.app.pojos;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name = "orders")
public class Orders 
{
  private Integer  orderId;
  private UserRegistration userId;
  @JsonFormat(pattern = "dd-MM-yyyy",timezone = "IST")
  private  Date orderDate;
  private  List<OrderDetails> list=new ArrayList<OrderDetails>();
  
  
  public Orders() {
	System.out.println("this is orders table");
  }
	public Orders(Date orderDate) {
		super();
		this.orderDate = orderDate;
	}
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Integer getOrderId() {
		return orderId;
	}
	public void setOrderId(Integer orderId) {
		this.orderId = orderId;
	}
	
	@ManyToOne
	@JoinColumn(name = "user_id")
	public UserRegistration getUserId() {
		return userId;
	}
	public void setUserId(UserRegistration userId) {
		this.userId = userId;
	}
	
	@Temporal(TemporalType.DATE)
	@Column(name = "order_date",nullable=false)
	public Date getOrderDate() {
		return orderDate;
	}
	public void setOrderDate(Date orderDate) {
		this.orderDate = orderDate;
	}
	
	@OneToMany(mappedBy = "orderId",cascade = CascadeType.ALL)
	public List<OrderDetails> getList() {
		return list;
	}
	public void setList(List<OrderDetails> list) {
		this.list = list;
	}
	
	
	@Override
	public String toString() {
		return "Orders [orderId=" + orderId + ", userId=" + userId + ", orderDate=" + orderDate + "]";
	}
    
}
