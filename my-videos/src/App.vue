<template>
<videos-form @addVideo="addVideo"></videos-form>
<page-section title="My Videos">
    <template v-slot:content>
        <videos-table :videos="displayedVideos" @deleteVideo="deleteVideo"></videos-table>
    </template>
    <template v-slot:controls>
        <videos-control @changeOrder="changeOrder" :rules="rules"></videos-control>
    </template>
</page-section>
</template>

<script>
import videosForm from './components/videosForm.vue';
import videosTable from './components/videosTable.vue';
import pageSection from './components/pageSection.vue';
import videosControl from './components/videosControl.vue';

export default {
  name: 'App',
  components: {
    videosForm,
    videosTable,
    pageSection,
    videosControl,
  },
  data() {
    return {
      videos: [
        { id: 3, name: 'My video', url: 'Youtube.com' },
        { id: 2, name: 'Another video', url: 'Vimeo.com' },
        { id: 5, name: 'Sample video', url: 'Dailymotion.com' },
        { id: 4, name: 'Test video', url: 'Twitch.tv' }
      ],
      rules: {
        reverse: false,
        byId: false,
        byName: false
      }
    };
  },
  computed:{
   displayedVideos() {
  let final = [...this.videos];

  if (this.rules.byId) {
    final.sort((a, b) => a.id - b.id);
  }

  if (this.rules.byName) {
    final.sort((a, b) => a.name.localeCompare(b.name));
  }

  if (this.rules.reverse) {
    final.reverse();
  }

  return final;
},

  },
  methods: {
    addVideo(video) {
      const newId = this.videos.length ? this.videos[this.videos.length - 1].id + 1 : 1;
      const newVideo = { id: newId, ...video };
      this.videos.push(newVideo);
      if (!video.name.trim() || !video.url.trim()) return;
    },

    deleteVideo(video) {
      // Logic to handle the deleted video
      console.log('Video deleted:', video);
      this.videos = this.videos.filter(v => v.id !== video.id);
    },
    changeOrder(payload) {
      const { id, checked } = payload;
      console.log(this.rules);
      this.rules[id] = checked;
    }
  }
};
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
</style>
