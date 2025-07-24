<template>
  <videos-form @addVideo="addVideo"></videos-form>
  <page-section title="My Videos">
    <template v-slot:content>
      <videos-table
        @deleteVideo="deleteVideo"
        :videos="displayedVideos"
      ></videos-table>
    </template>
    <template v-slot:controls>
      <videos-control
        @changeOrder="changeOrder"
        :rules="rules"
      ></videos-control>
    </template>
  </page-section>
</template>

<script>
import { ref, reactive, computed } from 'vue';
import VideosForm from './components/videosForm.vue';
import VideosTable from './components/videosTable.vue';
import VideosControl from './components/videosControl.vue';
import PageSection from './components/pageSection.vue';

export default {
  name: 'App',
  components: {
    VideosForm,
    VideosTable,
    PageSection,
    VideosControl,
  },
  setup() {
    const videos = ref([
      { id: 150, name: 'Learn Vue', url: 'http://vuejs.com' },
      { id: 200, name: 'Learn Python', url: 'http://Python.com' },
      { id: 5, name: 'funny video', url: 'http://funny.com' },
      { id: 500, name: 'nice song', url: 'http://songs.com' },
    ]);
    const rules = reactive({
      reverse: false,
      byId: false,
      byName: false,
    });

    function addVideo(payload) {
      const { name, url } = payload;
      videos.value.push({
        name: name,
        url: url,
      });
    }
    function deleteVideo(video) {
      videos.value = videos.value.filter(
        (v) => v.name !== video.name && v.url !== video.url
      );
    }
    function changeOrder(payload) {
      const { name, checked } = payload;
      rules[name] = checked;
    }
    //computed method
    const videosWithIds = computed(() => {
      const result = [...videos.value].map((video, index) => ({
        ...video,
        id: video.id ? video.id : index + 1,
      }));
      return result;
    });
    const sortById = computed(() => {
      const result = [...videosWithIds.value].sort((a, b) => a.id - b.id);
      return result;
    });
    console.log(sortById.value);
    const sortByName = computed(() => {
      const result = [...videosWithIds.value].sort((a, b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();
        if (nameA > nameB) return 1;
        if (nameA < nameB) return -1;
        return 0;
      });
      return result;
    });

    const displayedVideos = computed(() => {
      let final = [...videosWithIds.value];
      if (rules.byName) {
        final = sortByName.value;
      }
      if (rules.byId) {
        final = sortById.value;
      }
      return rules.reverse ? [...final].reverse() : final;
    });
    return {
      rules,
      addVideo,
      deleteVideo,
      changeOrder,
      displayedVideos,
    };
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>