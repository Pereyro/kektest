
// import MainAuth from "@/pages/MainAuth";
import AfishaMain from "@/pages/AfishaMain";
import AfishaHist from "@/pages/AfishaHist";
import PostsPage from "@/pages/PostsPage";
import MoviePage from "@/pages/MoviePage";
import PostPage from "@/pages/PostPage";
import LogInPage from "@/pages/LogInPage";
import SignInPage from "@/pages/SingInPage";
import AboutPage from "@/pages/AboutPage";
import BarGrillPage from "@/pages/BarGrillPage";

import {createRouter, createWebHistory} from 'vue-router';

const routes = [
    {
        path: "/",
        component: AboutPage
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
    },
    {
        path: "/login",
        component: LogInPage
    },
    {
        path: "/signin",
        component: SignInPage
    },
    {
        path: "/about",
        component: AboutPage
    },
    {
        path: "/bargrill",
        component: BarGrillPage
    }
]


const router = createRouter({
    routes, 
    history: createWebHistory(process.env.BASE_URL)
})  

export default router;