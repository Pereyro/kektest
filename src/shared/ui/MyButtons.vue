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
    background: None;
    color: whitesmoke;
    border:4px solid whitesmoke; 
    padding: 8px 32px;
    border-radius: 50%;
    
}
</style>