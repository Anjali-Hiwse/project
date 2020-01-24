package org.sunbeam.dac.dao;

import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import org.sunbeam.dac.pojos.Category;
import org.sunbeam.dac.pojos.Product;
@Repository
@Transactional
public class ProductDaoImpl implements IProductDao {
	@Autowired
	private SessionFactory sf;
	@Override
	public List<Product> getAllProducts() {
		String jpql ="select p from Product p";
		return sf.getCurrentSession().createQuery(jpql, Product.class).getResultList();
		
	}
	@Override
	public List<Product> getProductBybat() {
		
		String jpql="select p from Product p where p.category=:cat";
		return sf.getCurrentSession().createQuery(jpql, Product.class).setParameter("cat",Category.BAT).getResultList();
	}
	@Override
	public List<Product> getProductByball() {

		String jpql="select p from Product p where p.category=:cat";
		return sf.getCurrentSession().createQuery(jpql, Product.class).setParameter("cat",Category.BALL).getResultList();
	}
	@Override
	public List<Product> getProductBygloves() {

		String jpql="select p from Product p where p.category=:cat";
		return sf.getCurrentSession().createQuery(jpql, Product.class).setParameter("cat",Category.GLOVES).getResultList();
	}
	@Override
	public List<Product> getProductByclothing() {

		String jpql="select p from Product p where p.category=:cat";
		return sf.getCurrentSession().createQuery(jpql, Product.class).setParameter("cat",Category.CLOTHING).getResultList();
	}
	@Override
	public List<Product> getProductByshoes() {

		String jpql="select p from Product p where p.category=:cat";
		return sf.getCurrentSession().createQuery(jpql, Product.class).setParameter("cat",Category.SHOES).getResultList();
	}
	@Override
	public List<Product> addProduct(Product p) {
		sf.getCurrentSession().save(p);
		
		return getAllProducts();
	}

}
