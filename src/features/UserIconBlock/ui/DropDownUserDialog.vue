<template>
    <div class="dialog__screen" v-if="show == true" @click.stop="hideDialog">
        <div class="user_dialog_list">
            <slot>

            </slot>
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


<style>
.dialog__screen {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0,0,0, 0.1);
    position: fixed;
    display: flex;
    padding-top: 4px;
    padding-right: 24px;
    /* border: 5px solid white; */

}

.user_dialog_list {
    margin-left: auto;
    margin-bottom: auto;
    background: black;
    border-radius: 12px;
    min-width: 100px;
    min-height: 150px;
    padding: 32px;
    display: flex;   
    align-items: left;
    flex-direction: column;
    border: 1px solid white;
    /* flex-grow: 1;  */
    flex-basis: auto; /*Вертикальный размер зависит от контента*/
}


</style>