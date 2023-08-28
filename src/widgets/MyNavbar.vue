<template>
    <div class="navbar">
        <div class="navbar__buttons">
            <button class="navbar__button" @click="$router.push('/about')">ABOUT</button>
            <button class="navbar__button" @click="$router.push('/afisha')"><strong>AFISHA</strong></button>
            <button class="navbar__button" @click="$router.push('/movies')">KEK HISTORY</button>
            <button class="navbar__button" @click="$router.push('/posts')">COMMENTS</button>
            <button class="navbar__button" @click="$router.push('/bargrill')">BAR&GRILL</button>
        </div>

        <!-- <div class="right-buttons"> -->
            <sign-in-btn-block/>
        <!-- </div> -->
    </div>
</template>

<script>
import SignInBtnBlock from "@/features/SignInBtnBlock";
export default {
    components: {
        SignInBtnBlock
    }
}

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

</style>