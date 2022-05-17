<template>
    <b-container>
        <div class="landing">
            <div class>
                <h1 class="text-center text-muted">BUSCÁ TU PROVEEDOR</h1>
                <p class="text-center text-muted">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </p>
            </div>
            <!--
                {{ this.$route.query.filter }}
            -->
            <div class="">
                <MainFilter @filterChanged="handleFilterChange" />
            </div>

            <b-pagination
                v-if="entities.data.length > 0"
                v-model="$store.state.mainFilter.page"
                :total-rows="entities.total"
                :per-page="entities.per_page"
                aria-controls="my-table"
                @change="changePage"
            ></b-pagination>
            <b-overlay
                :show="loading"
                spinner-variant="primary"
                spinner-type="grow"
                spinner-small
                rounded="sm"
            >
                <div class="row">
                    <div class="col-lg-4" v-for="(entity, i) in entities.data">
                        <EntityCard :entity="entity" :key="i" />
                    </div>
                    <div v-if="entities.length == 0">
                        <b-card
                            bg-variant="light"
                            header="Light"
                            class="text-center"
                        >
                            <b-card-text> NO hay resultados</b-card-text>
                        </b-card>
                    </div>
                </div>
            </b-overlay>
        </div>
    </b-container>
</template>
<script>
import MainFilter from "../Components/MainFilter.vue";
import EntityCard from "../Components/EntityCard.vue";
import InfiniteScroll from "../Components/InfiniteScroll.vue";
//import { nextTick } from "process";
export default {
    name: "LandingPage",
    components: {
        MainFilter,
        EntityCard,
        InfiniteScroll,
    },
    data() {
        return {
            //filterParams: null,
            entities: {
                data: [],
            },
            loading: false,
        };
    },

    computed: {},
    watch: {
        $route: "syncRoute", //aca vemos si cambio la url y actualizamos el store, obviamente todo esto es solo para el landing
    },
    methods: {
        syncRoute() {
            //aca vemos si cambio la url y actualizamos el store, obviamente todo esto es solo para el landing
            console.log("Route changed,,,");
            this.setStoreFilter();
            this.getEntities();
        },
        changePage(event) {
            console.log("Change page,,,", event);
            this.$store.state.mainFilter.page = event;
            this.pushToRoute();
        },
        handleFilterChange() {
            console.log("Filter Changed");
            this.$store.state.mainFilter.page = 1;
            this.pushToRoute();
        },
        pushToRoute() {
            console.log("Pushing,,,");
            const filterParams = JSON.stringify(this.$store.state.mainFilter);
            this.$router
                .push({
                    to: "/",
                    query: {
                        filter: filterParams,
                    },
                })
                .then(() => console.log("Pushed to route,,,", filterParams))
                .catch(() => {});
        },
        async getEntities() {
            console.log("Getting entitites,,,");
            if (this.loading) return;
            try {
                this.loading = true;
                const obj = {
                    params: {
                        page: this.$store.state.mainFilter.page,
                    },
                };
                obj.params.locations = this.$store.state.mainFilter.locations;
                //aplanamos el array de arrays de categorias
                obj.params.selectedCategories = [].concat
                    .apply([], this.$store.state.mainFilter.selectedCategories)
                    .filter((el) => {
                        return el != null;
                    });
                console.log("Req sent,,,", obj);
                let res = await axios.get("/api/entitiesListing", obj);
                this.entities = await res.data;
                console.log("Finished req,,,", res.data);
                //return res;
            } catch (ex) {
                this.$bvToast.toast(ex.response, {
                    title: `Errors:`,
                    variant: "danger",
                    solid: true,
                });
            } finally {
                //this.$store.state.mainFilter.page = 2;
                this.loading = false;
                console.log(
                    "State of filter page is,,,",
                    this.$store.state.mainFilter.page
                );
            }
        },
        setStoreFilter() {
            if (this.$route.query.filter) {
                console.log("Setting store mainFilter.. new params");
                this.$store.state.mainFilter = JSON.parse(
                    this.$route.query.filter
                );
                console.log("Store Page,,,", this.$store.state.mainFilter.page);
            } else {
                this.$store.state.mainFilter = {
                    selectedCategories: [],
                    locations: null,
                    page: 1,
                };
            }
        },
    },
    created() {
        console.log("created");
        this.setStoreFilter();
        this.getEntities();
    },
    mounted() {},
};
</script>
<style>
/*
#first-section {
    background-image: url("/img/galpon.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    min-height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}*/
</style>
