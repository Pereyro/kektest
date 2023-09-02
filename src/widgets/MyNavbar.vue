<template>
    <div class="navbar"> 
        <div class="navbar__buttons" v-if="isAuthenticated">
            <button class="navbar__button" @click="$router.push('/')">ABOUT</button>
            <button class="navbar__button" @click="$router.push('/afisha')">AFISHA</button>
            <button class="navbar__button" @click="$router.push('/posts')">MEDIA</button>
            <button class="navbar__button" @click="$router.push('/bargrill')">BAR&GRILL</button>
        </div>
        <div class="navbar__buttons" v-else>
            <button class="navbar__button" @click="$router.push('/')">ABOUT</button>
        </div>

        <sign-in-btn-block :isAuthenticated="isAuthenticated"/>
    </div>
</template>

<script>
import SignInBtnBlock from "@/features/UserIconBlock/SignInBtnBlock";


export default {
    components: {
        SignInBtnBlock
    },
    computed: {
        isAuthenticated() {
            return this.$store.state.isAuthenticated;
        },
    },
};
</script>
    

<style scoped>

.navbar__buttons {
    margin-right: auto;
    padding: 24px;
    box-sizing: border-box;
    height: 100%;
    display: flex; /* Используем flex layout */
    align-items: center; /* Выравнивание по центру по вертикали */
}

.navbar__button {
    padding: 8px 16px;
    background-color: transparent; /* Прозрачный фон */
    color: goldenrod;
    border: 1px solid transparent; /* Прозрачная граница */
    cursor: pointer;
    outline: none; /* Убрать контур фокуса */
    font-size: medium;
    font-weight: bold;
}

.navbar__button:focus {
    color: gold;
}

.navbar__button:hover {
    color: rgb(251, 219, 43);
}

</style>