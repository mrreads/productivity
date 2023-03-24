<template>
    <div>
      <p class="opacity-80"> {{ new Date(note.date).toLocaleString("ru-RU") }} </p>
      <h1> {{ note.title }} </h1>
    </div>
</template>

<script setup>
import { useNotesStore } from '~~/stores/notes';
const route = useRoute();
const notesStore = useNotesStore();
const note = notesStore.getCurrentNote(route.params.id);
</script>