<template>
    <my-navbar :isAuthenticated="isAuthenticated"></my-navbar>
    <div class="app">  
        <router-view></router-view>   
    </div>
</template>


<script>
import MyNavbar from '@/widgets/MyNavbar';
// import AuthHelp from "@/shared/lib/AuthHelp.js";

export default {
    components: {
        MyNavbar 
    },
    computed: {
        isAuthenticated() {
            return this.$store.state.isAuthenticated;
        },
    },
}
</script>


<style>
    * {
        margin: 0;
        padding: 0;
        /* box-sizing: border-box; */
    }

    .app {
        padding: 0px;
    }
</style>