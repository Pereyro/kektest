<template>
    <div class="app">
        AAAAAAA!
        <div>
            <button @click="addLike">like</button>
            <button @click="addDislike">dis</button>
        </div>

        <div>Count likes: <strong>{{ likes }}</strong></div>
        <div>Count dislikes:<strong>{{ dislikes }}</strong></div>

        <div class="post">
            <div><strong>Название поста:</strong>Пост такой-то</div>
            <div><strong>Описание поста:</strong>Бла бла бла</div>
        </div>
        <form @submit.prevent>
            <h3>New post</h3>
            <!-- два разных способа сделать двусторонее связывание с моделью -->
            <input v-bind:value="title" @input="inputTitle" class="newpost" type="text" placeholder="Name:">
            <input v-bind:value="body" @input="body = $event.target.value" class="newpost" type="text" placeholder="Desc:">
            <button class="btn" @click="createPost">add</button>
        </form>

        <div class="post" v-for="post in posts" :key="post.id">
            <div><strong>Название:</strong>{{ post.title }}</div>
            <div><strong>description:</strong>{{ post.body }}</div>
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            likes: 0, 
            dislikes: 0,
            posts: [
                {id: 1, title: 'Jopa1', body: 'Blabla'},
                {id: 2, title: 'Jopa2', body: 'Blabla'},
                {id: 3, title: 'Jopa3', body: 'Blabla'},
                {id: 4, title: 'Jopa4', body: 'Blabla'}
            ],
            title: '',
            body: '',
        }
    },
    

    methods: {
        createPost() {
            const newPost = {
                id: Date.now(),
                title: this.title,
                body: this.body,
            }
            this.posts.push(newPost);
            this.title ='';
            this.body='';

        },
        inputTitle (event) {
            this.title = event.target.value;
        },
        addLike() {
            this.likes += 1;
        },
        addDislike() {
            this.dislikes +=1;
        }
    }
}
</script>


<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.app {
    padding: 24px;
}

form {
    margin-top: 8px;
    display: flex;
    flex-direction: column;
}

.post { 
    padding: 16px;
    border: 2px solid teal;
    margin-top: 16px;
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