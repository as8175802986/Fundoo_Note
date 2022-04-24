import { Component, EventEmitter, Input, OnInit, Output, } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from 'src/app/services/data/data.service';
import { NotesService } from 'src/app/services/notes.service/notes.service';
import { UpdatenotesComponent } from '../../Updatenotes/updatenotes/updatenotes.component';


@Component({
  selector: 'app-displaynotes',
  templateUrl: './displaynotes.component.html',
  styleUrls: ['./displaynotes.component.scss']
})
export class DisplaynotesComponent implements OnInit {
  @Input() allnotes: any; title: any; description: any;
  color: any
  public searchWord: any
  @Output() changeColorOfNote = new EventEmitter<any>();
  @Output() updateNoteToRefresh = new EventEmitter<any>();
  @Output() trashNoteToRefresh = new EventEmitter<any>();
  @Output() archiveNoteToRefresh = new EventEmitter<any>();


  constructor(public note: NotesService, private dataService: DataService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.dataService.receivedData.subscribe((Response: any) => {
      console.log("searched", Response);
      this.searchWord = Response

    }
    )
  }
  openDialog(note: any) {
    const dialogRef = this.dialog.open(UpdatenotesComponent, {
      data: note
    });

    dialogRef.afterClosed().subscribe(result => {

      console.log('The dialog was closed');
      this.updateNoteToRefresh.emit('update')
    })
  }
  // predefinedcolors: Array<any> = [
  //   { code: '#ffffff', name: 'white' },
  //   { code: '#f28b82', name: 'red' },
  //   { code: '#fbbc04', name: 'orange' },
  //   { code: '#FFFF00', name: 'yellow' },
  //   { code: '#ccff90', name: 'green' },
  //   { code: '#a7ffeb', name: 'teal' },
  //   { code: '#cbf0f8', name: 'Blue' },
  //   { code: '#aecbfa', name: 'darkblue' },
  //   { code: '#d7aefb', name: 'purple' },
  //   { code: '#fdcfe8', name: 'pink' },
  //   { code: '#e6c9a8', name: 'brown' },
  //   { code: '#e8eaed', name: 'grey' },
  // ]
  message(e: any) {
    console.log(e);
    this.changeColorOfNote.emit("colour")
  }
  trash(data: any) {
    console.log(data);
    this.trashNoteToRefresh.emit("trash")
  }
  archive(data: any) {
    
    this.archiveNoteToRefresh.emit("archive")
  }
}