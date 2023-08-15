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

<style>
.btn {
    background: None;
    color: teal;
    border:4px solid teal; 
    padding: 8px 16px;
}
</style>