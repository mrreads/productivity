<template>
    <div class="flex flex-col h-full">
        <NuxtLink v-show="clientWidth >= RESPONSE_WIDTH" to="/"><h2 class="mb-5 text-center">pro#APP</h2></NuxtLink>
        <label v-show="clientWidth < RESPONSE_WIDTH" class="mb-5 w-min border-base-300 bg-base-300 bg-cover bg-top rounded-box p-2 swap swap-rotate">
            <input type="checkbox" v-model="localExpand" />
            <svg class="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
            <svg class="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>
        </label>
        <ul class="menu pb-4 bg-base-100 text-base-content h-full">
            <li v-bind:class="expandClass" class="transition-all overflow-hidden rounded-box">
                <CustomNuxtLink to="/">
                    <p class="prose-lg text-center w-full">Главная</p>
                </CustomNuxtLink>
            </li>
            <li v-bind:class="expandClass" class="transition-all overflow-hidden rounded-box">
                <CustomNuxtLink to="/notes">
                    <p class="prose-lg text-center w-full">Заметки</p>
                </CustomNuxtLink>
            </li>
            <li v-bind:class="expandClass" class="transition-all overflow-hidden rounded-box mt-auto">
                <CustomNuxtLink to="/settings">
                    <p class="prose-lg text-center w-full">Настройки</p>
                </CustomNuxtLink>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                localExpand: false
            }
        },
        watch: {
            localExpand(value) {
                this.changeExpand(value);
            },
            expand(value) {
                this.localExpand = value;
            }
        },
        props: ['RESPONSE_WIDTH', 'MOBILE_WIDTH', 'clientWidth', 'expandClass', 'expand', 'changeExpand', 'mobileClass'],
    }
</script>
