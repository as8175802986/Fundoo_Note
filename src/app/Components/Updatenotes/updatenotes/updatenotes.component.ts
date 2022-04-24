import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotesService } from 'src/app/services/notes.service/notes.service';

@Component({
  selector: 'app-updatenotes',
  templateUrl: './updatenotes.component.html',
  styleUrls: ['./updatenotes.component.scss']
})
export class UpdatenotesComponent implements OnInit {
description:any;
title:any;
notesId:any;

  constructor(private notesService:NotesService ,public dialogRef:MatDialogRef<UpdatenotesComponent>, @Inject(MAT_DIALOG_DATA) public data: any ) { }

  ngOnInit(): void {
    this.title=this.data.title,
    this.description=this.data.description,
    this.notesId=this.data.notesId
  }

close(){
  let reqData = {
    title: this.title,
    description: this.description,
    "color": "string",
  
      
  }
  
  this.dialogRef.close();
  console.log(reqData)
    if (this.title && this.description) {
      this.notesService.updatenotes(reqData,this.notesId).subscribe((Response: any) => {
        console.log(Response);

      }, error => { console.log(error); })
    }
    else {
      console.log("Note is not valid. Please update the Note correctly");
    }
  }  
  pinnotes() {
    let reqdata = {
      noteIdList: [this.notesId],
      ispin: true,
    }
    this.notesService.pin(reqdata, this.notesId).subscribe((response: any) => {
      console.log(response);
      console.log(this.notesId);
    })
    
  }
}

