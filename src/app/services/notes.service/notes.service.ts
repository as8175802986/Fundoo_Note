import { Injectable } from '@angular/core';
import { HttpService } from '../httpservice/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  notesId:any
  token:any
  colors:any
  
  constructor(private httpService:HttpService) {
    this.token= localStorage.getItem("token")
   }
   takenotes(data:any){
    let header = {
      headers: new HttpHeaders({
       'Content-Type': 'application/json',
       'Authorization': "Bearer "+this.token
      })
   }
    console.log("take Notes called");
    return this.httpService.postService('Note/addnotes',data,true,header)
  }
  updatenotes(data:any,notesId:any){
    let header = {
      headers: new HttpHeaders({
       'Content-Type': 'application/json',
       'Authorization': "Bearer "+this.token
      })
   }
   console.log("update Notes called");
  return this.httpService.putService(`Note/updatenotes/${notesId}`,data,true,header)
  }
  getnotes() {
    let header={
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization':"Bearer "+this.token
      })
    }
    console.log("Get all Notes called")
    return this.httpService.getService('Note/getallnotes',header)
  }
  archive(data: any,notesId:any){
    let header={
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization':"Bearer "+this.token
      })
    }
    console.log("trash note called")
    return this.httpService.putService(`Note/archiveNote/${notesId}`,data,true,header)
  }

  trash(data: any,notesId:any){
    let header={
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization':"Bearer "+this.token
      })
    }
    console.log("trash note called")
    return this.httpService.putService(`Note/trash/${notesId}`,data,true,header)
  }
  pin(data: any,notesId:any){
    let header={
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization':"Bearer "+this.token
      })
    }
    console.log("trash note called")
    return this.httpService.putService(`Note/pinnotes/${notesId}`,data,true,header)
  }

  permaDelete(data: any,notesId:any){
    let header={
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization':"Bearer "+this.token
      })
    }
    console.log("trash note called")
    return this.httpService.deleteService(`Note/deletenotes/${notesId}`,data,true,header)
  }
  
  color(data: any,notesId:any,colors:any){
    let header={
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization':"Bearer "+this.token
      })
    }
    console.log("Color change called")
    // console.log(Colors)
    return this.httpService.putService(`Note/changeColor/${notesId}/${colors}`,data,true,header)
  }
  
}
