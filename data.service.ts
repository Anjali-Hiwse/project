import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private helper: HttpClient ) { }

  validateuser(userobj)
  {
    return this.helper.post("http://localhost:8080/project/user/validate", userobj);
  }
  SelectBat()
  {

    return this.helper.get("http://localhost:8080/project/product/bat");
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
