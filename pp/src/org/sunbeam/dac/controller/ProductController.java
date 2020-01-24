package org.sunbeam.dac.controller;


import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.sunbeam.dac.dao.IProductDao;
import org.sunbeam.dac.pojos.Product;

@RestController
@CrossOrigin
@RequestMapping("/product")
public class ProductController {

	@Autowired
	private IProductDao dao;
	@GetMapping("/prod")
	public ResponseEntity<?> listProducts(){
		List<Product> products = dao.getAllProducts();
		if(products.size()==0)
		{
			return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<List<Product>>(products,HttpStatus.OK);
		
	}
	@PostMapping("/add")
	public ResponseEntity<?> addProducts(@RequestBody Product p){
		List<Product> products = dao.addProduct(p);
		if(products.size()==0)
		{
			return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<List<Product>>(products,HttpStatus.OK);
		
	}
	
	
	@GetMapping("/bat")
	public ResponseEntity<?> listOfBat(){
		
		List<Product> products = dao.getProductBybat();
		if(products.size()==0)
		{
			return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<List<Product>>(products,HttpStatus.OK);
		
	}
	@GetMapping("/ball")
	public ResponseEntity<?> listOfBall(){
		List<Product> products = dao.getProductByball();
		if(products.size()==0)
		{
			return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<List<Product>>(products,HttpStatus.OK);
		
	}
	@GetMapping("/gloves")
	public ResponseEntity<?> listOfgloves(){
		List<Product> products = dao.getProductBygloves();
		if(products.size()==0)
		{
			return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<List<Product>>(products,HttpStatus.OK);
		
	}
	@GetMapping("/shoes")
	public ResponseEntity<?> listOfshoes(){
		List<Product> products = dao.getProductByshoes();
		if(products.size()==0)
		{
			return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<List<Product>>(products,HttpStatus.OK);
		
	}
	@GetMapping("/clothing")
	public ResponseEntity<?> listOfclothing(){
		List<Product> products = dao.getProductByclothing();
		if(products.size()==0)
		{
			return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<List<Product>>(products,HttpStatus.OK);
		
	}
	
}
