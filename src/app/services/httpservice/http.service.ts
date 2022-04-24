import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  // deleteService(arg0: string, data: any, arg2: boolean, header: { headers: import("@angular/common/http").HttpHeaders; }) {
  //   throw new Error('Method not implemented.');
  // }
  baseUrl=environment.baseurl
  constructor(private  Httpclient:HttpClient) { }
  postService(url: string, reqdata: any={}, token: boolean= false, httpOptions: any={} )
  {
    console.log(reqdata)
   return this.Httpclient.post(this.baseUrl+url,reqdata,token &&httpOptions)

  }
  getService(url: string, httpOptions: any={})
  {
    
    return this.Httpclient.get(this.baseUrl+url,httpOptions)

  }
  putService(url: string, reqdata: any={}, token: boolean= false, httpOptions: any={} )
  {
    console.log(url)
   return this.Httpclient.put(this.baseUrl+url,reqdata,token &&httpOptions)

  }
  deleteService(url: string, reqdata: any={}, token: boolean= false, httpOptions: any={} )
  {
    console.log(reqdata)
   return this.Httpclient.delete(this.baseUrl+url, httpOptions)

  }
  
  
}
