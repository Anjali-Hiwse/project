package com.app.pojo;


import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;



@Entity
@Table(name = "Orders")
public class Orders 
{
	private Integer order_id;
	private double total;
    private Date delivery_time;
	private Paymentmode pay_mode;
	private OrderStatus status;
	private User owner;
	
	public Orders() {
		super();
	}
	public Orders(Address addr_id, double total, Date delivery_time) {
		super();
		
		this.total = total;
		
		this.delivery_time = delivery_time;
	}
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Integer getOrder_id() {
		return order_id;
	}
	public void setOrder_id(Integer order_id) {
		this.order_id = order_id;
	}
	
	@Column(name="total")
	public double getTotal() {
		return total;
	}
	public void setTotal(double total) {
		this.total = total;
	}
	
	@Temporal(TemporalType.TIME)
	@Column(name="time")
	public Date getDelivery_time() {
		return delivery_time;
	}
	public void setDelivery_time(Date delivery_time) {
		this.delivery_time = delivery_time;
	}
	@Enumerated(EnumType.STRING)
	public OrderStatus getStatus() {
		return status;
	}
	public void setStatus(OrderStatus status) {
		this.status = status;
	}
	
	@ManyToOne
	@JoinColumn(name = "user_id")
	public User getOwner() {
		return owner;
	}
	public void setOwner(User owner) {
		this.owner = owner;
	}
	
	@Enumerated(EnumType.STRING)
	@Column(length = 20)
	public Paymentmode getPay_mode() {
		return pay_mode;
	}
	public void setPay_mode(Paymentmode pay_mode) {
		this.pay_mode = pay_mode;
	}
	@Override
	public String toString() {
		return "Order [+  total=" + total + ", estimated_delivery_time="
				+ ", delivery_time=" + delivery_time + ", pay_mode=" + pay_mode + ", status=" + status + "]";
	}

	

}
