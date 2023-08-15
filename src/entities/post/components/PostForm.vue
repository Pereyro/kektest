<template>
    <form @submit.prevent>
        <h3>New post</h3>
        <!-- два разных способа сделать двусторонее связывание с моделью -->    
        <input v-model="post.title" class="newpost" type="text" placeholder="Name:">
        <input v-bind:value="post.body" @input="post.body = $event.target.value" class="newpost" type="text" placeholder="Desc:">
        <button class="btn" @click="createPost">Addd</button>
    </form>
</template>


<script>
export default {
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


<style>
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

.btn {
    margin-top: 8px;
    align-self: flex-end;
    background: None;
    color: teal;
    border:4px solid teal; 
    padding: 8px 16px;
}
</style>