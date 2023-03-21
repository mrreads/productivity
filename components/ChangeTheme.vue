<template>
    <div class="form-control w-fit flex flex-col justify-center items-center">
        <label class="flex flex-row mb-1">
            <p class="prose-lg font-bold:">Текущая тема: </p>
            <p class="prose-lg ml-2 capitalize">{{ colorMode.preference }}</p>
        </label>
        <div class="dropdown">
            <label tabindex="0" class="btn w-60 mb-1">Сменить тему</label>
            <ul tabindex="0" class="dropdown-content menu p-2 w-60 shadow bg-base-100 rounded-box w-52 max-h-80 fkex flex-col flex-nowrap overflow-x-auto">
                <li v-for="theme of themes" :key="theme" v-on:click="colorMode.preference = theme"><p class="capitalize">{{ theme }}</p></li>
            </ul>
        </div>
    </div>
</template>

<script setup>
    const colorMode = useColorMode();
    const themes = [
        "light", 
        "dark", 
        "cupcake", 
        "bumblebee", 
        "emerald", 
        "corporate", 
        "synthwave", 
        "retro", 
        "cyberpunk",
        "valentine", 
        "halloween", 
        "garden", 
        "forest", 
        "aqua", 
        "lofi", 
        "pastel", 
        "fantasy", 
        "wireframe", 
        "black", 
        "luxury", 
        "dracula", 
        "cmyk", 
        "autumn", 
        "business", 
        "acid", 
        "lemonade", 
        "night", 
        "coffee", 
        "winter"
    ];
</script>