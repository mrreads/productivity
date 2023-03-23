<template>
  <h1 class="mb-6 mt-[-1rem]">Заметки</h1>

  <table v-if="notesStore.getNotesList.length > 0" class="table w-full">
    <thead>
      <tr>
        <th>Название</th>
        <th class="text-right">Дата</th>
      </tr>
    </thead>
    <tbody>
      <tr class="hover cursor-pointer" v-for="note in notesStore.getNotesList" :key="note.id">
        <td>{{ note.title }}</td>
        <td class="text-right">{{ note.date.toLocaleString("ru-RU") }}</td>
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