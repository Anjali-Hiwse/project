package com.app.Controller;

import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dao.ProductI;
import com.app.pojo.Categoryenum;
import com.app.pojo.Product;
import com.app.pojo.User;

@RestController // @Controller + @RespBody
@CrossOrigin//(origins="http://localhost:4200")
@RequestMapping("/products")
public class ProductController
{
	
	@Autowired
	private ProductI productdao;

	@PostConstruct
	public void init() {
		System.out.println("in init " + productdao);
	}
	
	@GetMapping
	public ResponseEntity<?> listProducts() {
		System.out.println("in list users");
		List<Product> allProducts = productdao.getAllProducts();
		if (allProducts.size() == 0)
			return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
		return new ResponseEntity<List<Product>>(allProducts, HttpStatus.OK);
	}
	
	@GetMapping("/id/{prod_id}")
	public ResponseEntity<?> getEmpDetails(@PathVariable int prod_id) {
		System.out.println("in user details " + prod_id);
		Product id =  productdao.listProductById(prod_id);
		if (id == null)
			return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
		return new ResponseEntity<Product>(id, HttpStatus.OK);
	}
	
	@PostMapping("/addproduct/{cart_id}")
	public ResponseEntity<?> addProductDetails(@RequestBody Product product,Integer cart_id) {
		System.out.println("in add product dtls " + product);
		try {
			return new ResponseEntity<Product>(productdao.addProductDetails(product,cart_id), HttpStatus.CREATED);
		} catch (RuntimeException e1) {
			e1.printStackTrace();
			return new ResponseEntity<Void>(HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}
	
	
	@GetMapping("/{category}")
	public ResponseEntity<?> getProductDetails(@PathVariable Categoryenum category) {
		System.out.println("in product details " + category);
		List<Product> categories=  productdao.listUserByCategory(category);
		if (categories == null)
			return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
		return new ResponseEntity<List<Product>>(categories, HttpStatus.OK);
	}
	
	
	@DeleteMapping("/{prod_id}")
	public void deleteEmpDetails(@PathVariable int prod_id)
	{
		System.out.println("in delete product "+prod_id);
		productdao.deleteProduct(prod_id);
	}
	
}
