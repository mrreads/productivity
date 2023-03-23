<template>
    <div ref="target" v-show="props.enable" class="fixed" :style="stylePosition">
        <slot />
    </div>
</template>

<script setup>
import { onClickOutside } from '@vueuse/core';

const props = defineProps(['enable', 'position', 'close']);
const stylePosition = computed(() => ({
  top: (props.position && props.position.clientY) ? props.position.clientY + 'px' : '0px',
  left: (props.position && props.position.clientX) ? props.position.clientX + 'px' : '0px',
}));

const target = ref(null)
onClickOutside(target, () => props.close());

</script>