<template>
    <div class="user__form">
        <kek-input class="search_block" placeholder="search"/>
        <button class="user_btn" @click="$router.push('/login')"><strong>UR</strong></button>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.user__form {
    /* border: 2px solid blue; */
    display: flex;
    align-items: center;
    box-sizing: border-box;
    height: 100%;
    padding-left: 4px;
    padding-right: 4px;
    min-width: 160px;
}
.search_block {
    /* border: 1px solid blue; */
    height: 60%;
    margin-top: 8px;
    margin-bottom: 8px;
}
.user_btn {
    border-radius: 50%; 
    width: 40px; 
    height: 40px;
    border: 1px solid gray;
    margin-left: 8px;
    margin-right: 8px;
    box-sizing: border-box;
}
</style>