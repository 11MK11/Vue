<template>
    <form class="form" @submit.prevent="addVideo">
        <div class="form-group">
            <label class="form-label" for="url">
                Video URL: 
                <input v-model="videoUrl" class="form-input" type="text" id="url">
            </label>
        </div>
        <div class="form-group">
            <label class="form-label" for="name">
                Video Name: 
                <input v-model="videoName" class="form-input" type="text" id="name">
            </label>
        </div>
        <button type="submit" class="form-button">Add Video</button>
    </form>
</template>

<script>
export default {
    name: 'videosForm',
    data() {
        return {
            videoUrl: '',
            videoName: ''
        };
    },
    methods: {
         addVideo() {
      const video = {
        url: this.videoUrl,
        name: this.videoName
      };
      // Emit video object to parent
      this.$emit('addVideo', video);

      // Clear input fields
      this.videoUrl = '';
      this.videoName = '';
    }
    }
};
</script>

<style scoped>
.form {
    background: linear-gradient(to right, #42b983, #35495e);
    padding: 1rem;
    text-align: center;
}
.form-group {
    margin-bottom: 15px;
}
.form-label {
    font-size: 1.1rem;
    font-weight: bold;
}
.form-input {
    background: none;
    border: none;
    outline: none;
    border-bottom: 1px solid #000000;
    font-size: 1.2rem;
    font-weight: bold;
}
.form-button {
    padding: 0.4rem 0.6rem;
    background-color: #42b983;
    border: none;
    outline: none;
    border-radius: 10px;
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
}
.form-button:hover {
    background-color: #35495e;
    color: white;
}
</style>