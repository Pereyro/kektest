
import MainAuth from "@/pages/MainAuth";
import AfishaMain from "@/pages/AfishaMain";
import AfishaHist from "@/pages/AfishaHist";
import PostsPage from "@/pages/PostsPage";

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
        path: "/history",
        component: AfishaHist
    },
    {
        path: "/posts",
        component: PostsPage
    }
]


const router = createRouter({
    routes, 
    history: createWebHistory(process.env.BASE_URL)
})  

export default router;