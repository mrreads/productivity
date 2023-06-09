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
    getCurrentNote(id: INote['id']) {
      return this.notesList.filter((note: INote) => note.id === id)[0];
    },
    addEmptyNote() {
      let note: INote = {
        id: nanoid(),
        title: 'Без названия',
        content: null,
        created_at: new Date().getTime(),
        date: new Date().getTime(),
        delete: false,
      }
      this.notesList.push(note)
      return note.id;
    },
    saveExistNote(id: INote['id'], title: INote['title'], content: INote['content']) {
      this.notesList.map(note => {
        if (note.id === id) {
          note.title = title,
          note.content = content,
          note.date = new Date().getTime()
        }
      });
    },
    archiveNote(id: INote['id']) {
      this.notesList.map(note => {
        if (note.id === id) {
          note.delete = true
        }
      });
    },
    deleteNote(id: INote['id']) {
      this.notesList = this.notesList.filter((note: INote) => note.id != id);
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
          return state.notesList.sort((a: INote, b: INote) => b.date - a.date).reverse().filter(note => note.delete == false);
        case 'date_desc':
          return state.notesList.sort((a: INote, b: INote) => b.date - a.date).filter(note => note.delete == false);
        case 'title_asc':
          return state.notesList.sort((a: INote, b: INote) => a.title.toLowerCase().localeCompare(b.title.toLowerCase())).filter(note => note.delete == false);
        case 'title_desc':
          return state.notesList.sort((a: INote, b: INote) => a.title.toLowerCase().localeCompare(b.title.toLowerCase())).reverse().filter(note => note.delete == false);
        default:
         return state.notesList;
       }
      },
      getNotesDeleteList: state => state.notesList.sort((a: INote, b: INote) => b.date - a.date).reverse().filter(note => note.delete == true)
  },
})