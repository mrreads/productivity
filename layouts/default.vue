<template>
    <div class="flex flex-row pt-5 w-full h-full transition-all gap-5 pl-5 lg:pl-4 lg:gap-4 md:pl-3 md:gap-2 sm:pl-1 sm:gap-5">
        <Navigation :RESPONSE_WIDTH="RESPONSE_WIDTH" :MOBILE_WIDTH="MOBILE_WIDTH" :clientWidth="clientWidth" :expand="expand" :mobileClass="mobileClass" :expandClass="expandClass" :changeExpand="changeExpand"/>
        <div v-bind:class="mobileClass" class="border-base-300 bg-base-300 bg-cover bg-top rounded-tl-box w-full transition-all overflow-y-auto p-10 xl:px-8 lg:px-7 md:px-6 sm:px-5">
            <client-only>
                <slot />
            </client-only>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                MOBILE_WIDTH: 640, //sm
                RESPONSE_WIDTH: 1024, //lg
                clientWidth: 0,
                expand: false
            }
        },
        mounted: function () {
            window.addEventListener('resize', this.handleResize);
            this.clientWidth = window.innerWidth;
        },
        beforeDestroy: function () {
            window.removeEventListener('resize', this.handleResize);
        },
        methods: {
            handleResize () {
                this.clientWidth = window.innerWidth;
                if (this.clientWidth >= this.RESPONSE_WIDTH)
                    this.expand = false;
            },
            changeExpand (bool) {
                this.expand = bool;
            }
        },
        computed: {
            expandClass: function() {
                return (this.clientWidth >= this.RESPONSE_WIDTH || this.expand) ? 'w-48' : 'w-0';
            },
            mobileClass: function() {
                return (this.clientWidth >= this.MOBILE_WIDTH) ? '' : (this.expand) ? 'mt-16' : 'ml-[-4rem] mt-16' ;
            }
        }
    }
</script>