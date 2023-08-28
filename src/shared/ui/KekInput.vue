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
    box-sizing: border-box;
    /* width: 100%;
    height: 100%; */
    /* padding: 16px 12px; */
    background-color: darkgrey;
    border: 2px solid grey;
    border-radius: 1ch;
    /* margin-top: 12px; */
    outline: none;
}

.myinput:focus {
    border-radius: 1ch;
    border-color: azure;
    background-color: aliceblue;
}
</style>