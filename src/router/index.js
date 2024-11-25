import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import PostsView from '@/views/PostsView.vue';
import AboutView from '@/views/AboutView.vue'; 
import ContactView from '@/views/ContactView.vue'; 

const routes = [
    { path: '/', name: 'Home', component: HomeView },
    { path: '/posts', name: 'Posts', component: PostsView },
    { path: '/about', name: 'About', component: AboutView },
    { path: '/contact', name: 'Contact', component: ContactView },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
