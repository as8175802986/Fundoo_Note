import { Injectable } from '@angular/core';
import { HttpService } from '../httpservice/http.service';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService: HttpService) { }

  register(reqdata: any) {
    console.log(reqdata);

    let header  = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization':'token'
      })
    }
    return this.httpService.postService('User/Register', reqdata, false, header)
  }

  login(data:any)
  {
    let header = {
      headers: new HttpHeaders({
       'Content-Type': 'application/json+patch+json'
      })
   }
    console.log("login called in user service",data);
    return this.httpService.postService('user/login',data,false,header)
   
  }
  forgetPassword(email:any){
    let header = {
          headers: new HttpHeaders({
            'Content-type': 'application/json',
            // 'Authorization':'token'
          })
    
        }
        return this.httpService.putService("User/ForgetPassword/"+email,{},false,header)
  }
  resetPassword(data:any,token:any) {
    let headersObject={
      headers:new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization':token
      })
    }
    console.log("forgot called")
    return this.httpService.putService('user/resetpassword',data,true,headersObject)
  }
}