<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'my-buttons'
}
</script>

<style scoped>
.btn {
    /* background: None; */
    color: darkgoldenrod;
    border:1px solid white; 
    padding: 8px 32px;
    border-radius: 1ch;
    /* background-color: gray; */
    background-color: rgb(42, 42, 42);
    
}
</style>