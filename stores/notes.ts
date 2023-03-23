import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';
import { nanoid } from 'nanoid';

import INote from '~~/interfaces/INote';

type INotesSort = 'date_asc' | 'date_desc' | 'title_asc' | 'title_desc';

export const useNotesStore = defineStore('notes', {
  state: () => ({
    notesList: useStorage('notes_list', [] as INote[]),
    notesSort: useStorage('notes_sort', 'date_desc' as INotesSort)
  }),
  actions: {
    addEmptyNote() {
      let note: INote = {
        id: nanoid(),
        title: 'Без названия',
        content: null,
        date: new Date().getTime()

      }
      this.notesList.push(note)
      return note.id;
    },
    saveExistNote(id: INote['id'], title: INote['title'], content: INote['content']) {
      let note: INote = {
        id: id,
        title: title,
        content: content,
        date: new Date().getTime()
      }
      this.notesList.filter((note: INote) => note.id != id);
      this.notesList.push(note);
    },
    deleteNote(id: INote['id']) {
      this.notesList.filter((note: INote) => note.id != id);
    },
    toggleSortDate() {
      this.notesSort = (this.notesSort == 'date_desc') ? 'date_asc' : 'date_desc';
    },
    toggleSortTitle() {
      this.notesSort = (this.notesSort == 'title_asc') ? 'title_desc' : 'title_asc';
    }
  },

  getters: {
    getNotesList: state => {
      switch(state.notesSort) {
        case 'date_asc':
          return state.notesList.sort((a: INote, b: INote) => b.date - a.date).reverse();
        case 'date_desc':
          return state.notesList.sort((a: INote, b: INote) => b.date - a.date);
        case 'title_asc':
          return state.notesList.sort((a: INote, b: INote) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()));
        case 'title_desc':
          return state.notesList.sort((a: INote, b: INote) => a.title.toLowerCase().localeCompare(b.title.toLowerCase())).reverse();
        default:
         return state.notesList;
       }
    }
  },
})