<template>
    <div class="section">
        <h2 class="section-title"><span>{{ title }}</span></h2>
        <div class="section-controls">
            <slot name="controls"></slot>
        </div>
        <div class="section-content">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'pageSection',
    props: {
        title: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            content: 'This is the section content.'
        };
    }
};
</script>

<style scoped>
.section {
    width: 80%;
    margin: 1rem auto;
}
.section-title {
    font-size: 1.5rem;
    text-align: center;
    padding: 1rem;
}
.section-content {
    font-size: 1rem;
    color: #333;
}
.section-title span {
    margin-bottom: 0.2rem;
    padding-bottom: 0.4rem;
    border-bottom: 5px solid #42b983;
}
.section-controls {
    margin-bottom: 1rem 0;
    background: #42b983;
    padding: 0.5rem;
    border-radius: 10px;
}
</style>