<template>
    <div class="navbar">
        <div class="navbar__buttons">
            <button class="navbar__button" @click="$router.push('/afisha')"><strong>AFISHA</strong></button>
            <button class="navbar__button" @click="$router.push('/movies')">KEK HISTORY</button>
            <button class="navbar__button" @click="$router.push('/posts')">COMMENTS</button>
            <button class="navbar__button" @click="$router.push('/bargrill')">BAR&GRILL</button>
        </div>
    </div>
</template>

<script>
// import MyButtons from "@/shared/ui/MyButtons";
export default {
    // components: {
    //     MyButtons
    // }
}

</script>
    

<style scoped>
.navbar {
    height: 50px;
    background-color: darkgray;
    /* box-shadow: 2px 2px 4px gray; */
    display: flex;
    align-items: center;
    padding: 0 15px;
}

.navbar__buttons {
    margin-right: auto;
    padding: 24px;
}

.navbar__button {
    /* color: darkgreen;
    padding: 8px 24px;
    margin-right: 24px;
    border-radius: 3%;
    background-color: transparent; */
    padding: 8px 16px;
    background-color: transparent; /* Прозрачный фон */
    color: teal;
    border: 1px solid transparent; /* Прозрачная граница */
    cursor: pointer;
    outline: none; /* Убрать контур фокуса */
}
</style>