<template>
    <input :value="modelValue" @input="updateInput" class="myinput" type="text">
</template>


<script>
export default {
    name: 'kek-input',
    props: {
        modelValue: [String, Number]
    },
    methods: {
        updateInput(event) {
            this.$emit('update:modelValue', event.target.value)
        }
    }
}
</script>


<style scoped>
.myinput {
    width: 100%;
    padding: 16px 12px;
    border: 3px solid teal;
    margin-top: 12px;
}
</style>