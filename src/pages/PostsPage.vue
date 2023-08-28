<template>
    <div>
        AAAAAAA!
        <div>
            <button @click="addLike">like</button>
            <button @click="addDislike">dis</button>
        </div>

        <div>Count likes: <strong>{{ likes }}</strong></div>
        <div>Count dislikes:<strong>{{ dislikes }}</strong></div>
        <button @click="fetchPosts">Get Posts</button>
        <my-buttons 
        style="margin: 15px 0;"
        @click="showDialog">Create post</my-buttons>
        <dialog-window v-model:show="dialogVisible">
            <post-form 
                @create="createPost"
            />
        </dialog-window>
       
        <post-list 
        :posts="posts"
        @remove="removePost"
        />

        
    </div>
</template>


<script>
import PostForm from "@/entities/post/components/PostForm";
import PostList from "@/entities/post/components/PostList";
import axios from 'axios';


export default {
    components: {
        PostForm, PostList,
    },

    data() {
        return {
            likes: 0, 
            dislikes: 0,
            posts: [],
            title: '',
            body: '',
            dialogVisible: false
        }
    },
    

    methods: {
        createPost(post) {
            this.posts.push(post);
            this.dialogVisible=false;

        },
        removePost(post) {
            this.posts = this.posts.filter(p => p.id !== post.id)
        },

        async fetchPosts() {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
                console.log(response)
                this.posts = response.data;
            } catch (e) {
                alert('Errrrrrorrrr')
            }

        }, 

        inputTitle (event) {
            this.title = event.target.value;
        },
        showDialog() {
            this.dialogVisible=true;
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

</style>