import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  notes: { text: string; color: string }[] = [];

  addNotes(note: string) {
    const randomColor = this.getRandomColor();
    this.notes.push({ text: note, color: randomColor });
  }

  getNotes(): { text: string; color: string }[] {
    return this.notes;
  }

  private getRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}






