<template>
    <div class="dialog" v-if="show == true" @click.stop="hideDialog">
        <div @click.stop class="dialog__content">
            <slot></slot>
        </div>

    </div>
</template>


<script>
export default {
    name: 'dialog-window',
    props: {
        show: {
            type: Boolean,
            default: false
        }
    },

    methods: {
        hideDialog() {
            this.$emit('update:show', false)
        }
    }
}


</script>


<style scoped>
.dialog {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0,0,0, 0.5);
    position: fixed;
    display: flex;

}

.dialog__content {
    margin: auto;
    background: white;
    border-radius: 12px;
    min-width: 100px;
    min-height: 150px;
    padding: 32px;
}
</style>