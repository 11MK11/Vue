<template>
  <website-page :title="post.title" :description="post.description">
    <template #content>
      <card-item background="linear-gradient(30deg, lightblue, #e5e5e5)">
        <template #content>
          <p>{{ post.content }}</p>
        </template>
      </card-item>

      <!-- Optional back button -->
      <blog-button
        :link="'/blog'"
        title="← Back to Blog"
        background="#ccc"
        fullWidth
      />
    </template>
  </website-page>
</template>

<script>
import { useRoute } from 'vue-router';
import { inject } from 'vue';
import websitePage from '../components/websitePage.vue';
import blogButton from '../components/blogButton.vue';
import cardItem from '../components/cardItem.vue';

export default {
  components: {
    websitePage,
    cardItem,
    blogButton,
  },
  setup() {
    const route = useRoute();
    const id = route.params.id;

    const posts = inject('posts');

    function getPost(id) {
      const post = posts.find((p) => p.id === String(id));
      return (
        post || {
          id: 0,
          title: 'No Post Found',
          content: 'Sorry, we could not find the post you are looking for.',
          description: 'Post not found',
        }
      );
    }

    const post = getPost(id);

    return {
      post,
    };
  },
};
</script>

<style scoped>
p {
  line-height: 1.6;
  font-size: 16px;
}
</style>
