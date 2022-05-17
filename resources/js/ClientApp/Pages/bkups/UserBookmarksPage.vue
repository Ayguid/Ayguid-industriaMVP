<template>
    <b-container>
        <div class="about">
            <div>
                <h1>UserBookmarks</h1>
            </div>
            <div class="row">
                <div v-for="(entity, i) in userBoomarks.data" class="col-lg-4">
                    <EntityCard :entity="entity" />
                </div>
                <div v-if="userBoomarks.length == 0">
                    <b-card
                        bg-variant="light"
                        header="Light"
                        class="text-center"
                    >
                        <b-card-text> NO hay resultados</b-card-text>
                    </b-card>
                </div>
            </div>
        </div>
    </b-container>
</template>
<script>
import EntityCard from "../Components/EntityCard.vue";
//import store from "../Store/index.js";
export default {
    name: "UserBookmarksPage",
    components: {
        EntityCard,
    },
    beforeRouteEnter(to, from, next) {
        /*
        store.dispatch("getUserBookmarks").then((response) => {
            next((vm) => {});
        });
        */
        next((vm) => {
            // access to component's instance using `vm` .
            // this is done because this navigation guard is called before the component is created.
            vm.$store.dispatch("getUserBookmarks");
        });
    },
    computed: {
        userBoomarks() {
            return this.$store.state.mainData.user_bookmarks;
        },
    },
    mounted() {
        //this.$store.dispatch("getUserBookmarks");
    },
};
</script>
