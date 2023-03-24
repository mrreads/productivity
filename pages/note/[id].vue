<template>
    <div>
      <p class="opacity-80"> {{ new Date(date).toLocaleString("ru-RU") }} </p>
      
      <input type="text" placeholder="Заголовок" class="-ml-5 input input-ghost w-full text-5xl font-extrabold focus:bg-transparent focus:outline-none focus:border- focus:border-base-300" v-model="title" @input="() => changed = true" />

      <div class="mt-5 prose w-full max-w-full" id="editorjs" />
    </div>

    <button class="btn px-12 mt-6 sticky bottom-0 right-full z-10" :class="{'btn-disabled' : !changed }"
      @click="save">Сохранить </button>
</template>

<script setup>
import { ref } from 'vue';
import { useNotesStore } from '~~/stores/notes';

import EditorJS from '@editorjs/editorjs'; 
import editorjsI18n from '~~/config/editorjs-i18n';

const route = useRoute();
const notesStore = useNotesStore();
const note = notesStore.getCurrentNote(route.params.id);

const title = ref(note.title);
const date = ref(note.date);

const changed = ref(false);

const editor = new EditorJS({
  data: note.content,
  holder: 'editorjs',
  onChange: (api, event) => {
    changed.value = true;
  },
  i18n: editorjsI18n
});

function save() {
  editor.save().then(data => {
    console.log(route.params.id, title.value, date.value)
    notesStore.saveExistNote(route.params.id, title.value, data);
    
    const temp = notesStore.getCurrentNote(route.params.id);
    title.value = temp.title;
    date.value = temp.date;

    changed.value = false;
  });
}

useHead({
  title: title,
  meta: [
    { name: 'description' }
  ],
});
</script>