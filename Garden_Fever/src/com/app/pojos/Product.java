package com.app.pojos;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "products")
public class Product 
{
   private Integer pId;
   private String pName,pDesc;
   private Category productCategory;
   private Double price;
   private Integer stock;
   private byte[] image;
   @JsonFormat(pattern = "dd-MM-yyyy",timezone = "IST")
   private Date pUpdated;
   private Status pStatus;
   private List<OrderDetails> orderDetailsList= new ArrayList<OrderDetails>();
   
    public Product() {
		System.out.println("in product ctor");
	}
    public Product(String pName, String pDesc, Category productCategory, Double price, Integer stock, byte[] image,
		Date pUpdated) 
    {
	super();
	this.pName = pName;
	this.pDesc = pDesc;
	this.productCategory = productCategory;
	this.price = price;
	this.stock = stock;
	this.image = image;
	this.pUpdated = pUpdated;
   }
    
    public Product(String pName2, String pDesc2, double price2, Category valueOf, int stock2,Date date) {
         
	}
    
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	public Integer getpId() {
		return pId;
	}
	public void setpId(Integer pId) {
		this.pId = pId;
	}
	
	@Column(name = "product_name")
	public String getpName() {
		return pName;
	}
	public void setpName(String pName) {
		this.pName = pName;
	}
	
	@Column(name = "product_desc")
	public String getpDesc() {
		return pDesc;
	}
	public void setpDesc(String pDesc) {
		this.pDesc = pDesc;
	}
	
	@Enumerated(EnumType.STRING)
	@Column(name = "product_category")
	public Category getProductCategory() {
		return productCategory;
	}
	public void setProductCategory(Category productCategory) {
		this.productCategory = productCategory;
	}
	
	@Column(name = "product_price")
	public Double getPrice() {
		return price;
	}
	public void setPrice(Double price) {
		this.price = price;
	}
	
	@Column(name = "product_stock")
	public Integer getStock() {
		return stock;
	}
	public void setStock(Integer stock) {
		this.stock = stock;
	}
	
	@Lob
	@Column(name="product_image")
	public byte[] getImage() {
		return image;
	}
	public void setImage(byte[] image) {
		this.image = image;
	}
	
	@Temporal(TemporalType.DATE)
	@Column(name = "product_updated")
	public Date getpUpdated() {
		return pUpdated;
	}
	public void setpUpdated(Date pUpdated) {
		this.pUpdated = pUpdated;
	}
	
	@Enumerated(EnumType.STRING)
	@Column(name = "product_status",length = 20)
	public Status getpStatus() {
		return pStatus;
	}
	public void setpStatus(Status pStatus) {
		this.pStatus = pStatus;
	}
	
	@OneToMany(mappedBy = "prod",cascade = CascadeType.ALL,orphanRemoval = true)
	@JsonIgnore
	public List<OrderDetails> getOrderDetailsList() {
		return orderDetailsList;
	}
	public void setOrderDetailsList(List<OrderDetails> orderDetailsList) {
		this.orderDetailsList = orderDetailsList;
	}
	

	@Override
	public String toString() {
		return "Product [pId=" + pId + ", pName=" + pName + ", pDesc=" + pDesc + ", productCategory=" + productCategory
				+ ", price=" + price + ", stock=" + stock + ", image=" + Arrays.toString(image) + ", pUpdated="
				+ pUpdated + ", pStatus=" + pStatus + "]";
	}
		      
}
