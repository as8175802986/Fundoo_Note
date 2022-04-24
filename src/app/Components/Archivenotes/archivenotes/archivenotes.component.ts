import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from 'src/app/services/data/data.service';
import { NotesService } from 'src/app/services/notes.service/notes.service';
import { UpdatenotesComponent } from '../../Updatenotes/updatenotes/updatenotes.component';

@Component({
  selector: 'app-archivenotes',
  templateUrl: './archivenotes.component.html',
  styleUrls: ['./archivenotes.component.scss']
})
export class ArchivenotesComponent implements OnInit {
  notesarchive: any
  notesId:any
  @Output() changeColorOfNote = new EventEmitter<any>();
  @Output() updateNoteToRefresh = new EventEmitter<any>();
  @Output() trashNoteToRefresh = new EventEmitter<any>();
  @Output() archiveNoteToRefresh = new EventEmitter<any>();
  
  constructor(public dialog: MatDialog,private dataservice:DataService,private notesService: NotesService) { }

  ngOnInit(): void {
    this.getarchived();
    
  }
  Open(notedata:any) {
    let dialogRef = this.dialog.open(UpdatenotesComponent, {data: notedata });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
  
    })
  }

  getarchived() {
    this.notesService.getnotes().subscribe((response: any) => {
      console.log(response);
      console.log(response.notesId);
      var datalist = response.filter((obj:any)=>{
        return obj.isArchive==true
      })
      this.notesarchive = datalist;
    })
  }
  archive(data: any) {
    
    this.archiveNoteToRefresh.emit("archive")
  }
  colourchanged(e:any){
    console.log(e);
    this.getarchived();
  }
  update(e:any){
    console.log(e);
    this.getarchived();
  }
  message(e: any) {
    console.log(e);
    this.changeColorOfNote.emit("colour")
  }
  trash(data: any) {
    console.log(data);
    this.trashNoteToRefresh.emit("trash")
  }
}
