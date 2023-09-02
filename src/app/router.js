import store from "@/shared/store"
import AfishaMain from "@/pages/AfishaMain";
import PostsPage from "@/pages/PostsPage";
import MoviePage from "@/pages/MoviePage";
import PostPage from "@/pages/PostPage";
import LogInPage from "@/pages/LogInPage";
import SignInPage from "@/pages/SingInPage";
import AboutPage from "@/pages/AboutPage";
import BarGrillPage from "@/pages/BarGrillPage";

// import checkAuthenticationStatus from "@/shared/lib"; 

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


router.beforeEach(async (to, from, next) => {
    console.log('beforeEach hook triggered');
    if (to.matched.some((record) => record.meta.requiresAuth)) {
      if (!store.state.isAuthenticated) {
        try {
          // Выполните асинхронную проверку аутентификации, например, запрос на сервер или проверку токена
          await store.dispatch('checkAuthentication'); // Предположим, что у вас есть действие checkAuthentication в хранилище
          console.log('beforeEach checkAuthentication');
          console.log(store.state.isAuthenticated)
          if (store.state.isAuthenticated) {
            next(); // Если аутентификация успешна, продолжите навигацию
          } else {
            next('/login'); // Если аутентификация не удалась, перенаправьте на страницу входа
          }
        } catch (error) {
          next('/login'); // Если аутентификация не удалась, перенаправьте на страницу входа
        }
      } else {
        next(); // Если пользователь уже залогинен, продолжите навигацию
      }
    } else {
      next(); // Продолжите навигацию для не защищенных маршрутов
    }
  });
  

  
export default router;