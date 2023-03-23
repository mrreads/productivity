<template>
  <h1 class="mb-6 mt-[-1rem]">Заметки</h1>

  <table v-if="notesStore.getNotesList.length > 0" class="table w-full">
    <thead>
      <tr class="select-none">
        <th class="cursor-pointer" @click="notesStore.toggleSortTitle()">
          <p class="mr-1 float-left">Название</p> 
          <span v-show="notesStore.notesSort == 'title_desc'">↓</span>
          <span v-show="notesStore.notesSort == 'title_asc'">↑</span>
        </th>
        <th class="text-right cursor-pointer" @click="notesStore.toggleSortDate()">
          <span class="" v-show="notesStore.notesSort == 'date_desc'">↓</span>
          <span class="" v-show="notesStore.notesSort == 'date_asc'">↑</span>
          <p class="ml-1 inline-block">Дата</p> 
        </th>
      </tr>
    </thead>
    <tbody>
      <tr class="hover cursor-pointer" v-for="note in notesStore.getNotesList" :key="note.id">
        <td>{{ note.title }}</td>
        <td class="text-right">{{ new Date(note.date).toLocaleString("ru-RU") }}</td>
      </tr>  
    </tbody>
  </table>
  <p v-else> Записок еще нет.</p>

  <button class="btn px-12 mt-6 sticky bottom-0 right-full" @click="notesStore.addEmptyNote()">Создать заметку</button>
</template>
  
<script setup>
import { useNotesStore } from '~~/stores/notes';
const notesStore = useNotesStore();

useHead({
  title: 'Заметки',
  meta: [
    { name: 'description', content: 'Заметки Productivity APP.' }
  ],
});

</script>