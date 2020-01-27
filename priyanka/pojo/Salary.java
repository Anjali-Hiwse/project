package com.app.pojo;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonFormat;
@Entity
@Table(name = "Salary")
public class Salary 
{
  private Integer salary_id;
  
  private double salary;
  private double bonus;
  @JsonFormat(pattern = "yyyy-MM-dd")
  private Date date;
  private User owner;

  
  
public Salary() {
	super();
}




public Salary(double salary, double bonus, Date date) {
	super();
	this.salary = salary;
	this.bonus = bonus;
	this.date = date;
}




@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
public Integer getSalary_id() {
	return salary_id;
}

public void setSalary_id(Integer salary_id) {
	this.salary_id = salary_id;
}

public double getSalary() {
	return salary;
}

public void setSalary(double salary) {
	this.salary = salary;
}

public double getBonus() {
	return bonus;
}

public void setBonus(double bonus) {
	this.bonus = bonus;
}
@ManyToOne
@JoinColumn(name = "user_id")
public User getOwner() {
	return owner;
}

public void setOwner(User owner) {
	this.owner = owner;
}




@Temporal(TemporalType.DATE)
@Column
public Date getDate() {
	return date;
}




public void setDate(Date date) {
	this.date = date;
}




@Override
public String toString() {
	return "Salary [salary_id=" + salary_id + ", salary=" + salary + ", bonus=" + bonus + ", date=" + date + "]";
}



  
}
