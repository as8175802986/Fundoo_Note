import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notes.service/notes.service';

@Component({
  selector: 'app-getallnotes',
  templateUrl: './getallnotes.component.html',
  styleUrls: ['./getallnotes.component.scss']
})
export class GetallnotesComponent implements OnInit {
  notesarray:any
  notesId:any;
  
  constructor(private notesService:NotesService) { }

  ngOnInit(): void {
   this.GetAllNotes()
    
  }

  GetAllNotes(){
    
    this.notesService.getnotes().subscribe((Response:any)=>{
      console.log(Response);
      this.notesarray=Response;
      this.notesarray.reverse();
      
      console.log(this.notesarray);
      this.notesarray = this.notesarray.filter((data: any) => {
       
        return data.isArchive==false && data.isTrash==false;
      })
    },(error)=>{console.log(error)});
    
  }
  autoRefresh(data:any)
  {
     console.log("refreshed",data);
     this.GetAllNotes();
  }
  update(e:any){
    console.log(e);
    this.GetAllNotes();
  }
  trash(data:any)
  {
     console.log("refreshed",data);
     this.GetAllNotes();
  }
  colourchanged(e:any){
    console.log(e);
    this.GetAllNotes();
  }
  archive(data:any)
  {
     console.log("refreshed",data);
     this.GetAllNotes();
  }
}
