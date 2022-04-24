import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from 'src/app/services/data/data.service';
import { NotesService } from 'src/app/services/notes.service/notes.service';
import { UpdatenotesComponent } from '../../Updatenotes/updatenotes/updatenotes.component';

@Component({
  selector: 'app-trashnotes',
  templateUrl: './trashnotes.component.html',
  styleUrls: ['./trashnotes.component.scss']
})
export class TrashnotesComponent implements OnInit {
  deletedNotes:any
  notesId:any
  constructor(public dialog: MatDialog,private dataservice:DataService,public noteservice: NotesService) { }

  ngOnInit(): void {
    this.getdeleted();
  }
  Open(notedata:any) {
    let dialogRef = this.dialog.open(UpdatenotesComponent, {data: notedata });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      console.log(result);
      
      
    })
  }
  getdeleted() {
    this.noteservice.getnotes().subscribe((response: any) => {
      console.log(response);
      console.log(response.notesId);
      var datalist = response.filter((obj:any)=>{
        return obj.isTrash==true
      })
      this.deletedNotes = datalist;
    })
  }
  
  
}
