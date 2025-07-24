import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '../views/home.vue';
import BlogPage from '../views/blog.vue';
import AboutPage from '../views/about.vue';
import SinglePost from '../views/singlePost.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/blog', component: BlogPage },
  { path: '/about', component: AboutPage },
  { path: '/blog/:id', component: SinglePost },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
