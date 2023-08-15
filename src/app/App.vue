<template>
    <div class="app">
        AAAAAAA!
        <div>
            <button @click="addLike">like</button>
            <button @click="addDislike">dis</button>
        </div>

        <div>Count likes: <strong>{{ likes }}</strong></div>
        <div>Count dislikes:<strong>{{ dislikes }}</strong></div>
         
        <post-form @create="createPost"/>
        <post-list :posts="posts"/>
        <!-- короткая запись: -->
        <!-- <post-list :posts="posts"></post-list> -->
    </div>
</template>


<script>
import PostForm from "@/entities/post/components/PostForm";
import PostList from "@/entities/post/components/PostList";

export default {
    components: {
        PostForm, PostList
    },

    data() {
        return {
            likes: 0, 
            dislikes: 0,
            posts: [
                {id: 1, title: 'Jopa1', body: 'Blabla'},
                {id: 2, title: 'Jopa2', body: 'Blabla'},
                {id: 3, title: 'Jopa3', body: 'Blabla'},
                {id: 4, title: 'Jopa4', body: 'Blabla'},
            ],
            title: '',
            body: '',
        }
    },
    

    methods: {
        createPost(post) {
            this.posts.push(post);

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

</style>