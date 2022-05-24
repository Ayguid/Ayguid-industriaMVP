<template>
    <div>                       
        <b-card
            :title="entity.username"
            :img-src="entity.background_photo_path ? entity.background_photo_path_full_url : 'http://127.0.0.1:8000/storage/media/defaultCover.webp'"
            img-alt="Image"
            img-top
            tag="article"
            class="mb-2"
        >
            <b-card-text>
                <h6>Name:</h6>
                <p>{{ entity.name }}</p>
                <h6>Description:</h6>
                <p>{{ entity.description }}</p>
                <h6 v-if="entity.location">Location:</h6>
                <p v-if="entity.location">
                    {{ entity.location.city }} {{ entity.location.state }}
                </p>
                <h6>Categories:</h6>
                <span
                    class="text-muted mr-2 mb-2"
                    v-for="(cat, i) in entity.categories"
                    :key="i"
                >
                    {{ cat.name }}
                </span>
            </b-card-text>
            <div class="d-flex justify-content-between align-items-baseline">
                <b-button
                    href="#"
                    variant="primary"
                    :to="'/entity/' + entity.username"
                    >Go to entity</b-button
                >
                <BookmarkIcon
                    @bookmark="bookmarkEntity"
                    :bookmarked="entity.bookmarked"
                />
                <!--
                <b-button
                    @click="bookmarkEntity"
                    size="sm"
                    variant="outline-secondary"
                    class="mb-2"
                >
                    <b-icon icon="bookmark" aria-label="Help"></b-icon>
                </b-button>
                -->

                {{ entity.bookmarks_count }}
            </div>
        </b-card>
    </div>
</template>
<script>
import BookmarkIcon from "./BookmarkIcon.vue";

export default {
    name: "EntityCard",
    props: ["entity"],
    components: {
        //MainFilter,
        BookmarkIcon,
    },
    data() {
        return {
            //randomPicNum: "",
        };
    },
    methods: {
        async bookmarkEntity() {
            //console.log(this.entity);
            //Primero vemos si esta logeado
            if (!this.$store.getters.isLogged) {
                return this.$bvToast.toast("Please Login", {
                    title: `Errors:`,
                    variant: "danger",
                    solid: true,
                });
            }
            if (this.$route.name == "UserBookmarks") {
                const confirmation = await this.$bvModal.msgBoxConfirm(
                    "Are you sure?",
                    {
                        title: `Errors:`,
                        variant: "danger",
                        centered: true,
                        solid: true,
                        okTitle: "YES",
                        cancelTitle: "NO",
                        okVariant: "danger",
                    }
                );
                if (!confirmation) return;
            }
            //
            this.entity.bookmarked = !this.entity.bookmarked;
            try {
                const response = await this.$store.dispatch(
                    "bookmarkEntity",
                    this.entity
                );
                this.entity.bookmarks_count = response.data.bookmarks_count;
                console.log(response);
            } catch (ex) {
                this.$bvToast.toast(ex.response.data.message, {
                    title: `Errors:`,
                    variant: "danger",
                    solid: true,
                });
                this.errors = ex.response.data.errors;
            } finally {
                //console.log(12);
            }
        },
    },
    computed: {},
    beforeMount() {},
    mounted() {
        //this.randomPicNum = Math.floor(Math.random() * (30 - 1 + 1) + 1);
        //console.log(this.$route.name == "UserBookmarks");
    },
};
</script>
