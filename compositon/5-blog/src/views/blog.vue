<template>
  <website-page title="Our Blog" description="Check our posts">
    <template #content>
      <div class="posts">
        <blog-post
          v-for="post in posts"
          :key="post.id"
          :title="post.title"
          :description="post.description"
          :id="post.id"
        />
      </div>
    </template>
  </website-page>
</template>

<script>
import { inject } from 'vue';
import WebsitePage from '../components/websitePage.vue';
import BlogPost from '../components/blogPost.vue';

export default {
  name: 'BlogPage',
  components: {
    WebsitePage,
    BlogPost,
  },
  setup() {
    const posts = inject('posts');
    return { posts };
  },
};
</script>

<style scoped>
.posts {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

@media screen and (max-width: 1000px) {
  .posts {
    display: block;
  }
}
</style>
