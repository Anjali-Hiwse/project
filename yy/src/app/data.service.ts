import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  

  constructor(private helper: HttpClient ) { }

  addprod(prod,image)
{  console.log(prod);
     const formData = new FormData();
     formData.append("p_name",prod.p_name);
     formData.append("stock",prod.stock);
     
     formData.append("ratings",prod.ratings);
     formData.append("p_price",prod.p_price);
     formData.append("p_desc",prod.p_desc);
     formData.append("p_weight",prod.p_weight);
     formData.append("category",prod.category);
     formData.append("p_image",image);
    return this.helper.post("http://localhost:8080/project/product/add", formData);
  }
  getuser(userobj)
  {
    return this.helper.post("http://localhost:8080/project/user/getuser", userobj);
  }
  search(name)
  {
    return this.helper.get("https://cricapi.com/api/playerFinder?apikey=qnYbrBLrbAQy4lPr0ocPqzxNEKt2&name="+name);
  }
  validateuser(userobj)
  {
    return this.helper.post("http://localhost:8080/project/user/validate", userobj);
  }
  Selectordr()
  {
    return this.helper.get("http://localhost:8080/project/product/orderdtls");

  }
  getScore(id)
  {
    return this.helper.get("https://cricapi.com/api/cricketScore?apikey=qnYbrBLrbAQy4lPr0ocPqzxNEKt2&unique_id="+id);
  }
  Selectprod()
  {
    console.log("in sel");
    
    return this.helper.get("http://localhost:8080/project/product/prod");
  }
  update(prod,image)
  {
    console.log(prod);
     const formData = new FormData();
     formData.append("p_name",prod.p_name);
     formData.append("stock",prod.stock);
     formData.append("p_date",prod.p_date);
     formData.append("ratings",prod.ratings);
     formData.append("p_price",prod.p_price);
     formData.append("p_desc",prod.p_desc);
     formData.append("p_weight",prod.p_weight);
     formData.append("category",prod.category);
     formData.append("p_image",image);
    return this.helper.put("http://localhost:8080/project/product/update/"+prod.p_id, formData);
  }
  SelectBat()
  {

    return this.helper.get("http://localhost:8080/project/product/bat");
  }
  SelectBall()
  {

    return this.helper.get("http://localhost:8080/project/product/ball");
  }

  SelectClothing()
  {

    return this.helper.get("http://localhost:8080/project/product/clothing");
  }
  SelectGloves()
  {

    return this.helper.get("http://localhost:8080/project/product/gloves");
  }
  update123(user)
  {
    return this.helper.post("http://localhost:8080/project/user/update", user);
  }
  currentmatches()
  {
    return this.helper.get("https://cricapi.com/api/matches?apikey=qnYbrBLrbAQy4lPr0ocPqzxNEKt2");
  }
  SelectByorderbtemail(email)
  {
    return this.helper.get("http://localhost:8080/project/user/cart/" + email);
  }
  SelectShoes()
  {

    return this.helper.get("http://localhost:8080/project/product/shoes");
  }
  SelectByemail(email:string)
  {
    return this.helper.get("http://localhost:8080/project/user/val/" + email);
  }
  SelectByid(id)
  {
    return this.helper.get("http://localhost:8080/project/product/getsp/" +id);
  }

  Delete(No)
  {
    return this.helper.delete("http://localhost:8080/project/product/delete/" +No);
  }
   
  addtocart(quantity,uid,pid)
  {
    console.log(uid);
    
    return this.helper.post("http://localhost:8080/project/user/addtocart/"+uid+"/"+pid,quantity );
  }

  Insert(usrobj)
  {
    return this.helper.post("http://localhost:8080/project/user/register", usrobj);
  }
  getid(em:string)
  {
    return this.helper.get("http://localhost:8080/project/user/getid/"+em );
  }
}
