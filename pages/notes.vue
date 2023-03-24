<template>
  <h1 class="mb-6 mt-[-1rem]">Заметки</h1>

  <table v-if="notesStore.getNotesList.length > 0" class="table table-fixed w-full">
    <thead>
      <tr class="select-none">
        <th class="flex flex-row w-full">
          <p class="mr-1 float-left cursor-pointer" @click="notesStore.toggleSortTitle()">Название</p> 
          <span v-show="notesStore.notesSort == 'title_desc'">↓</span>
          <span v-show="notesStore.notesSort == 'title_asc'">↑</span>

          <div class="text-right hidden flex-grow ml-2 sm:inline-block">
            <span v-show="notesStore.notesSort == 'date_desc'">↓</span>
            <span v-show="notesStore.notesSort == 'date_asc'">↑</span>
            <p class="ml-1 inline-block cursor-pointer opacity-90" @click="notesStore.toggleSortDate()">Дата</p> 
          </div>
        </th>
        <th class="text-right w-48 sm:hidden">
          <span class="" v-show="notesStore.notesSort == 'date_desc'">↓</span>
          <span class="" v-show="notesStore.notesSort == 'date_asc'">↑</span>
          <p class="ml-1 inline-block cursor-pointer" @click="notesStore.toggleSortDate()">Дата</p> 
        </th>
      </tr>
    </thead>
    <tbody>
      <tr class="hover cursor-pointer" v-for="note in notesStore.getNotesList" :key="note.id" oncontextmenu="return false;" @contextmenu="showContextMenu($event, note)">
        <td class="w-full p-0">
          <NuxtLink :to="{ path: '/note/' + note.id }">
            <p class="p-4 truncate"> {{ note.title }}</p>
          </NuxtLink>
        </td>
        <td class="text-right  w-48 p-0 lg:text-sm sm:hidden">
          <NuxtLink :to="{ path: '/note/' + note.id }">
            <p class="p-4 opacity-60" :title="'Создано: ' + new Date(note.created_at).toLocaleString('ru-RU')" >{{ new Date(note.date).toLocaleString("ru-RU") }}</p>
          </NuxtLink>
        </td>
      </tr>
    </tbody>
  </table>
  <p v-else> Записок еще нет.</p>

  <button class="btn px-12 mt-6 sticky bottom-0 right-full" @click="notesStore.addEmptyNote()">Создать заметку</button>

  <ContextMenu :enable="contextEnabled" :position="contextPosition" :close="() => contextEnabled = false">
    <ul tabindex="0" class="dropdown-content menu p-2 rounded-box shadow bg-base-200 w-52">
      <li><a @click="archiveNotes">Удалить</a></li>
    </ul>
  </ContextMenu>

</template>
  
<script setup>
import { ref } from 'vue'
import { useNotesStore } from '~~/stores/notes';
const notesStore = useNotesStore();

const contextEnabled = ref(false);
const contextPosition = ref(null);
const contextContent = ref(null);

function showContextMenu (e, note) {
  e.stopPropagation();

  this.contextEnabled = true;
  this.contextPosition = e;
  this.contextContent = note;
}

const archiveNotes = () => {
  let id = contextContent.value.id;
  notesStore.archiveNote(id);

  contextEnabled.value = false;
  contextPosition.value = null;
  contextContent.value = null;
}

useHead({
  title: 'Заметки',
  meta: [
    { name: 'description', content: 'Заметки Productivity APP.' }
  ],
});

</script>