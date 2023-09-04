<template>
    <div v-if="isAuthenticated==false" class="btns_container">
        <div style="height: 2px; border: 1px solid white; box-sizing: border-box; margin-top: 128px;"></div>
        <button class="user__button" @click="$router.push('/login')">LogIn</button>
    </div>
    <div v-else-if="isAuthenticated==true" class="btns_container">
        <button class="user__button">Kek Me</button>
        <button class="user__button">Help</button>
        <div style="height: 2px; border: 1px solid white; box-sizing: border-box; margin-top: 48px;"></div>
        <button class="user__button" @click="doLogOut()">LogOut</button>
    </div>   
</template>


<script>
export default {
    props: {
        isAuthenticated: Boolean, // Определите тип свойства как Boolean
    },

    methods: {
        doLogOut() {
            // this.isAuthenticated = false;
            this.$store.dispatch('updateAuthentication', false);
            localStorage.removeItem('userToken')
            localStorage.removeItem('isAuthenticated')
            this.$router.push('/login');
        }
    }
}

</script>


<style scoped>
.btns_container {
    flex-direction: column;
    display: flex;
}

.user__button {
    padding: 8px 16px;
    background-color: transparent; /* Прозрачный фон */
    color: goldenrod;
    border: 1px solid transparent; 
    /* Прозрачная граница */
    cursor: pointer;
    outline: none; /* Убрать контур фокуса */
    font-size: medium;
    font-weight: bold;
}

.user__button:hover {
    color: rgb(251, 219, 43);
}


</style>