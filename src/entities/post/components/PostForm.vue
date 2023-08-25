<template>
    <form @submit.prevent>
        <h3>New post</h3>
        <!-- два разных способа сделать двусторонее связывание с моделью -->    
        <kek-input v-model="post.title" type="text" placeholder="Name:" />
        <kek-input v-model="post.body" type="text" placeholder="Desc:" />
        <my-buttons class="post_btn" @click="createPost">Add</my-buttons>
    </form>
</template>


<script>
    // import MyButtons from '@/shared/ui/MyButtons';

export default {
    // components: {MyButtons},
    data () {
        return {
            post: {
                title: '',
                body: '',
            }
        }
    },
    methods: {
        createPost() {
            this.post.id = Date.now();
            this.$emit('create', this.post)
            this.post = {
                title: '',
                body: '',
            }
        }
    }
}

</script>


<style scoped>
form {
    margin-top: 8px;
    display: flex;
    flex-direction: column;
}

.newpost {
    width: 100%;
    padding: 16px 12px;
    border: 3px solid teal;
    margin-top: 12px;
}

.post_btn {
    margin-top: 8px;
    align-self: flex-end;
    background: None;
    color: teal;
    border:4px solid teal; 
    padding: 8px 16px;
}
</style>