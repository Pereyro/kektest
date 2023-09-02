import AfishaMain from "@/pages/AfishaMain";
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
        component: AfishaMain,
        meta: { requiresAuth: true }
    },
    {
        path: "/movies/:id",
        component: MoviePage, 
        meta: { requiresAuth: true }
    },
    {
        path: "/posts",
        component: PostsPage,
        meta: { requiresAuth: true }
    },
    {
        path: "/posts/:id",
        component: PostPage,
        meta: { requiresAuth: true }
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
        path: "/bargrill",
        component: BarGrillPage,
        meta: { requiresAuth: true }
    }
]


  

const router = createRouter({
    routes, 
    history: createWebHistory(process.env.BASE_URL)
})  
  
export default router;