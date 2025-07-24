<template>
  <!-- Global site header -->
  <website-header
    title="simple blog"
    description="my beautiful blog"
  />

  <!-- Route outlet (displays Home, Blog, About, etc.) -->
  <router-view />
</template>

<script>
import { reactive, provide } from 'vue';
import WebsiteHeader from './components/websiteHeader.vue';

export default {
  name: 'RootApp', // avoids ESLint warning: "component name should be multi-word"
  components: {
    WebsiteHeader,
  },
  setup() {
    // Sample blog posts provided to all components
    const posts = reactive([
      {
        id: '100',
        title: 'Blog Post 1',
        description:
          'This is random description for post number 1. What do we have to say here?',
        content:
          'post 1: Lorem dignissimos sit maiores voluptate officia Corporis quidem modi accusantium porro perspiciatis? Quasi at soluta laudantium unde natus? Amet placeat iusto exercitationem ex optio. Ipsum neque atque exercitationem doloribus dolorem. Placeat error fugit obcaecati quisquam sunt, deserunt totam aperiam? Alias est sit iusto eius nemo, ab inventore aperiam. Nostrum consequatur!',
      },
      {
        id: '120',
        title: 'Blog Post 2',
        description:
          'This is random description for post number 2. What do we have to say here?',
        content:
          'post 2: Lorem dignissimos sit maiores voluptate officia Corporis quidem modi accusantium porro perspiciatis? Quasi at soluta laudantium unde natus? Amet placeat iusto exercitationem ex optio. Ipsum neque atque exercitationem doloribus dolorem. Placeat error fugit obcaecati quisquam sunt, deserunt totam aperiam? Alias est sit iusto eius nemo, ab inventore aperiam. Nostrum consequatur!',
      },
      {
        id: '500',
        title: 'Blog Post 3',
        description:
          'This is random description for post number 3. What do we have to say here?',
        content:
          'post 3: Lorem dignissimos sit maiores voluptate officia Corporis quidem modi accusantium porro perspiciatis? Quasi at soluta laudantium unde natus? Amet placeat iusto exercitationem ex optio. Ipsum neque atque exercitationem doloribus dolorem. Placeat error fugit obcaecati quisquam sunt, deserunt totam aperiam? Alias est sit iusto eius nemo, ab inventore aperiam. Nostrum consequatur!',
      },
      {
        id: '140',
        title: 'Blog Post 4',
        description:
          'This is random description for post number 4. What do we have to say here?',
        content:
          'post 4: Lorem dignissimos sit maiores voluptate officia Corporis quidem modi accusantium porro perspiciatis? Quasi at soluta laudantium unde natus? Amet placeat iusto exercitationem ex optio. Ipsum neque atque exercitationem doloribus dolorem. Placeat error fugit obcaecati quisquam sunt, deserunt totam aperiam? Alias est sit iusto eius nemo, ab inventore aperiam. Nostrum consequatur!',
      },
    ]);

    // Make posts available to all children via inject()
    provide('posts', posts);
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
