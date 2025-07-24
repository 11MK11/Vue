<template>
  <website-page title="Home Page" description="this is our home page">
    <template #content>

      <!-- Card 1: With image, header, content, and buttons -->
      <card-item showHeader showActions showMedia>
        <template #media>
          <img src="https://picsum.photos/id/56/300/200" alt="pic" />
        </template>
        <template #header>
          <p>New Offer</p>
        </template>
        <template #content>
          <p>Here is your offer, click to get it</p>
        </template>
        <template #actions>
          <blog-button
            title="check offer 1"
            background="crimson"
            color="#fff"
          />
          <blog-button
            title="check offer 2"
            background="lightgreen"
          />
        </template>
      </card-item>

      <!-- Card 2: With header and content only -->
      <card-item
        showHeader
        background="linear-gradient(30deg, #eee, slateblue)"
      >
        <template #header>
          <p>Who are we?</p>
        </template>
        <template #content>
          <p>
            Elit praesentium magnam corporis delectus numquam labore.
            Obcaecati fugit nemo voluptatum enim quidem sint quasi error?
            Itaque ducimus blanditiis asperiores. Voluptatum laboriosam
            saepe magnam distinctio amet. Repudiandae aspernatur iure
            corrupti est vero. Laboriosam eaque ut sint tempora?
          </p>
        </template>
      </card-item>

      <!-- Card 3: Header + full width button only -->
      <card-item
        background="linear-gradient(30deg, #eee, crimson)"
        showHeader
        showActions
        :showContent="false"
      >
        <template #header>
          <p>Wanna pick the offer?</p>
        </template>
        <template #actions>
          <blog-button
            title="yes take me now"
            background="cornsilk"
            fullWidth
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
  name: 'HomePage',
  components: {
    WebsitePage,
    CardItem,
    BlogButton,
  },
};
</script>
