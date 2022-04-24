import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotesService } from 'src/app/services/notes.service/notes.service';
import { ArchivenotesComponent } from '../../Archivenotes/archivenotes/archivenotes.component';
import { TrashnotesComponent } from '../../trashnote/trashnotes/trashnotes.component';

@Component({
  selector: 'app-noteicon',
  templateUrl: './noteicon.component.html',
  styleUrls: ['./noteicon.component.scss']
})
export class NoteiconComponent implements OnInit {
  @Input() iconnote: any;
  notesId: any;  
  @Output() trashNoteToRefresh= new EventEmitter<any>();
  @Output() archiveNoteToRefresh= new EventEmitter<any>();
  @Output() changeColorOfNote = new EventEmitter<any>();
  @Output() permadel = new EventEmitter<any>()
  isArchiveNotesComponent = false;
  isTrashnotesComponent= false;
  constructor(private notesService: NotesService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.iconnote)
    let Component = this.router.snapshot.component;
    if (Component == ArchivenotesComponent) {
      this.isArchiveNotesComponent = true;
      console.log(this.isArchiveNotesComponent);
    }
    if (Component == TrashnotesComponent) {
      this.isTrashnotesComponent = true;
      console.log(this.isTrashnotesComponent);
    }
    
  }
  archivenote() {
    let reqdata = {
      noteIdList: [this.iconnote.notesId],
      isArchived: true,
    }
    this.notesService.archive(reqdata, this.iconnote.notesId).subscribe((response: any) => {
      console.log(response);
      console.log(this.notesId);
      this.archiveNoteToRefresh.emit(Response)

    })

  }
  Delete() {
    let reqdata = {
      noteIdList: [this.iconnote.notesId],
      isDeleted: true,
    }
    this.notesService.trash(reqdata, this.iconnote.notesId).subscribe((response: any) => {
      console.log(response);
      console.log(this.notesId);
      this.trashNoteToRefresh.emit(Response)
    })
    
  }
  Permadelete() {
      let reqdata = {
        noteIdList: [this.iconnote.notesId],
        isDeleted: true,
      }
      this.notesService.permaDelete(reqdata, this.iconnote.notesId).subscribe((response: any) => {
        console.log(response);
        console.log(this.notesId);
      })
      this.permadel.emit(Response);
  }
  colors = [
    { code: '#ffffff', name: 'white' },
    { code: '#f28b82', name: 'red' },
    { code: '#fbbc04', name: 'orange' },
    { code: '#FFFF00', name: 'yellow' },
    { code: '#ccff90', name: 'green' },
    { code: '#a7ffeb', name: 'teal' },
    { code: '#cbf0f8', name: 'Blue' },
    { code: '#aecbfa', name: 'darkblue' },
    { code: '#d7aefb', name: 'purple' },
    { code: '#fdcfe8', name: 'pink' },
    { code: '#e6c9a8', name: 'brown' },
    { code: '#e8eaed', name: 'grey' },
  ];

  changeColor(noteColor:any){
    
    this.iconnote.colors= noteColor;
    let reqdata={
      
      noteIdList: [this.iconnote.notesId],  
      colors: noteColor
      
    }

    this.notesService.color(reqdata,this.iconnote.notesId,this.colors).subscribe((response:any) =>{
      console.log(response);
      

      this.changeColorOfNote.emit(noteColor)
      

    })
   
  }
  

}


