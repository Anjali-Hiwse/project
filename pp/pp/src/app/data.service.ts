import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  

  constructor(private helper: HttpClient ) { }

  addprod(prod)
  {
    return this.helper.post("http://localhost:8080/project/product/add", prod);
  }
  validateuser(userobj)
  {
    return this.helper.post("http://localhost:8080/project/user/validate", userobj);
  }
  Selectprod()
  {
    return this.helper.get("http://localhost:8080/project/product/prod");
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

  SelectShoes()
  {

    return this.helper.get("http://localhost:8080/project/product/shoes");
  }
  SelectByemail(email:string)
  {
    return this.helper.get("http://localhost:8080/project/user/val/" + email);
  }

  Delete(No)
  {
    return this.helper.delete("http://13.234.120.180:8888/emps/" + No);
  }

  Update(empObj)
  {
    return this.helper.put("http://13.234.120.180:8888/emps/" + empObj.No, empObj);
  }

  Insert(usrobj)
  {
    return this.helper.post("http://localhost:8080/project/user/register", usrobj);
  }
  
}
