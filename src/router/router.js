 import { createRouter , createWebHistory } from "vue-router";
 import bloglist from "../components/bloglist.vue";
 import category from "../components/category.vue";
 import post from "../components/post.vue";
 

 const routes = [
    { path: "/", component: bloglist , name:"home" },
    {path:"/category/:id/:category" , component: category, name:"category"},
    {path:"/blog/:id" , component: post, name:"blog"},
 ];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;