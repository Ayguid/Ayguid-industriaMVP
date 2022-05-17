<template>
    <div>
        <b-button
            @click="$emit('bookmark')"
            v-if="!bookmarked"
            size="sm"
            variant="outline-secondary"
            class="mb-2"
        >
            <b-icon icon="bookmark" aria-label="Help"></b-icon>
        </b-button>
        <b-button
            @click="$emit('bookmark')"
            v-else
            size="sm"
            variant="secondary"
            class="mb-2"
        >
            <b-icon icon="bookmark" aria-label="Help"></b-icon>
        </b-button>
    </div>
</template>
<script>
export default {
    name: "BookmarkIcon",
    props: ["bookmarked"],
    data() {
        return {};
    },
    components: {},
    computed: {},
    watch: {},
    methods: {},
};
</script>
