// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false,
    modules: [
        '@pinia/nuxt',
        '@nuxtjs/tailwindcss', 
        '@nuxtjs/color-mode'
    ],
    colorMode: {
        preference: 'system',
        dataValue: 'theme',
        classSuffix: '',
    },
});
