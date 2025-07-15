<template>
    <div class="controls">
        <div class="control">
            <input :checked="rules.reverse" @change="changeOrder" type="checkbox" id="reverse"/>
            <label class="control-label" for="reverse">Reverse</label>
        </div>
        <div class="control">
            <input :checked="rules.byId" @change="changeOrder" type="checkbox" id="byId"/>
            <label class="control-label" for="byId">By Id</label>
        </div>
        <div class="control">
            <input :checked="rules.byName" @change="changeOrder" type="checkbox" id="byName"/>
            <label class="control-label" for="byName">By Name</label>
        </div>
    </div>
</template>

<script>
export default {
    name: 'videosControl',
    props: {
        rules: {
            type: Object,
            required: true,
            default(){
                return{}
            },
        },
    },
    methods: {
        changeOrder($event) {
            this.$emit('changeOrder', {
                id: $event.target.id,
                checked: $event.target.checked
            });
        }
    },
    data() {
        return {
            reverse: this.rules.reverse,
            byId: this.rules.byId,
            byName: this.rules.byName
        };
    }
};
</script>

<style scoped>
.controls {
    display: flex;
    justify-content: space-around;
}
.control-label {
    display: block-inline;
    margin: 0 0.5rem;
}
</style>