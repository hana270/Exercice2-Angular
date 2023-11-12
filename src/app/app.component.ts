import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Note';
  note: string = '';
  notes: { text: string; color: string }[] = [];
  showDelete: boolean[] = [];
  showEdit: boolean[] = [];
  editingIndex: number | null = null;
  searchPhrase: string = '';
  filteredNotes: { text: string; color: string }[] = [];
  showNotes: boolean = true; 

  constructor(private notesService: DataService) {}

  addNote() {
    if (this.note.trim() !== '') {
      this.notesService.addNotes(this.note);
      this.note = '';
      this.filteredNotes = this.notesService.getNotes();
    }
  }

  toggleNotesVisibility() {
    this.showNotes = !this.showNotes;
  }

  editNote(index: number) {
    this.editingIndex = index;
  }

  saveEdit(index: number) {
    this.editingIndex = null;
  }

  deleteNote(index: number) {
    this.notesService.getNotes().splice(index, 1);
    this.filteredNotes = this.notesService.getNotes();
  }

  showDeleteButton(index: number) {
    this.showDelete[index] = true;
  }

  hideDeleteButton(index: number) {
    this.showDelete[index] = false;
  }

  showEditButton(index: number) {
    this.showEdit[index] = true;
  }

  hideEditButton(index: number) {
    this.showEdit[index] = false;
  }

  showButtons(index: number) {
    this.showEditButton(index);
    this.showDeleteButton(index);
  }
  
  hideButtons(index: number) {
    this.hideEditButton(index);
    this.hideDeleteButton(index);
  }
  

  searchNotes() {
    this.filteredNotes = this.notesService.getNotes().filter(note =>
      note.text.includes(this.searchPhrase)
    );
  }
}
