<template>
    <div>
      <p class="opacity-80"> {{ new Date(note.date).toLocaleString("ru-RU") }} </p>
      <h1> {{ note.title }} </h1>
      <div class="mt-5 prose w-full max-w-full" id="editorjs"></div>
    </div>
</template>

<script setup>
import { useNotesStore } from '~~/stores/notes';

import EditorJS from '@editorjs/editorjs'; 
const editor = new EditorJS({
  holder: 'editorjs'
});

const route = useRoute();
const notesStore = useNotesStore();
const note = notesStore.getCurrentNote(route.params.id);
</script>