import { defineStore } from 'pinia';
import { nanoid } from 'nanoid'

import INote from '~~/interfaces/INote';

export const useNotesStore = defineStore('notes', {
  state: () => ({
    notesList: [] as INote[],
  }),

  actions: {
    addEmptyNote() {
      let note: INote = {
        id: nanoid(),
        title: 'Без названия',
        content: null,
        date: new Date()

      }
      this.notesList.push(note)
      return note.id;
    },
    saveExistNote(id: INote['id'], title: INote['title'], content: INote['content']) {
      let note: INote = {
        id: id,
        title: title,
        content: content,
        date: new Date()
      }
      this.notesList.filter((note: INote) => note.id != id);
      this.notesList.push(note);
    },
    deleteNote(id: INote['id']) {
      this.notesList.filter((note: INote) => note.id != id);
    },
  },

  getters: {
    getNotesList: state => state.notesList.sort((a: INote, b: INote) => Date.parse(a.date) - Date.parse(b.date)) as INote[],
  },
})