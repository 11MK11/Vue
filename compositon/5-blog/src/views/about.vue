<template>
  <website-page title="About Page" description="About page short description">
    <template #content>
      <card-item
        background="linear-gradient(30deg, lightblue, #e5e5e5)"
        showActions
      >
        <template #content>
          <p>
            Sit quasi error possimus quidem ab nesciunt. Nemo ducimus animi
            provident voluptatibus similique. Error officia odio dolor culpa
            eaque! Consectetur totam ad consequuntur rem incidunt. Nostrum non
            ipsum eveniet doloremque explicabo. Aliquam non molestias fuga
            quisquam natus iste placeat pariatur. Veritatis tenetur, rerum ut
            aut ipsam aperiam necessitatibus necessitatibus amet.
          </p>
        </template>

        <template #actions>
          <blog-button
            background="cornsilk"
            title="Call us: 55555"
          />
          <blog-button
            background="chartreuse"
            title="Email us at mail@mail.com"
          />
          <blog-button
            background="cornflowerblue"
            title="My Twitter @twitter"
          />
        </template>
      </card-item>
    </template>
  </website-page>
</template>

<script>
import WebsitePage from '../components/websitePage.vue';
import BlogButton from '../components/blogButton.vue';
import CardItem from '../components/cardItem.vue';

export default {
  name: 'AboutPage',
  components: {
    WebsitePage,
    BlogButton,
    CardItem,
  },
};
</script>
