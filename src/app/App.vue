<template>
    <div class="app">
        AAAAAAA!
        <div>
            <button @click="addLike">like</button>
            <button @click="addDislike">dis</button>
        </div>

        <div>Count likes: <strong>{{ likes }}</strong></div>
        <div>Count dislikes:<strong>{{ dislikes }}</strong></div>
         
        <dialog-window :show="true">
            <post-form 
                @create="createPost"
            />
        </dialog-window>
       
        <post-list 
        :posts="posts"
        @remove="removePost"
        />

        <movie-item/>
    </div>
</template>


<script>
import PostForm from "@/entities/post/components/PostForm";
import PostList from "@/entities/post/components/PostList";

import MovieItem from "@/entities/film/MovieItem";

export default {
    components: {
        PostForm, PostList, MovieItem,
    },

    data() {
        return {
            likes: 0, 
            dislikes: 0,
            posts: [
                {id: 1, title: 'Jopa1', body: 'Blabla'},
            ],
            title: '',
            body: '',
        }
    },
    

    methods: {
        createPost(post) {
            this.posts.push(post);

        },
        removePost(post) {
            this.posts = this.posts.filter(p => p.id !== post.id)
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