
import MainAuth from "@/pages/MainAuth";
import AfishaMain from "@/pages/AfishaMain";
import AfishaHist from "@/pages/AfishaHist";
import PostsPage from "@/pages/PostsPage";
import MoviePage from "@/pages/MoviePage";
import PostPage from "@/pages/PostPage";

import {createRouter, createWebHistory} from 'vue-router';

const routes = [
    {
        path: "/",
        component: MainAuth
    },
    {
        path: "/afisha",
        component: AfishaMain
    },
    {
        path: "/movies",
        component: AfishaHist
    },
    {
        path: "/movies/:id",
        component: MoviePage
    },
    {
        path: "/posts",
        component: PostsPage
    },
    {
        path: "/posts/:id",
        component: PostPage
    }
]


const router = createRouter({
    routes, 
    history: createWebHistory(process.env.BASE_URL)
})  

export default router;