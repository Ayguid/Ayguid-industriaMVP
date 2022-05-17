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
                <MainFilter
                    @filterChanged="handleFilterChange"
                    :filterParams="filterParams"
                />
            </div>

            <!--
            {{ filterParams }}
            -->

            <b-pagination
                v-if="entities.data.length > 0"
                pills
                align="center"
                v-model="filterParams.page"
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
                    <div v-if="entities.data.length == 0">
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
    metaInfo: {
        title: "Landing",
        // override the parent template and just use the above title only
        titleTemplate: null,
    },
    components: {
        MainFilter,
        EntityCard,
        InfiniteScroll,
    },
    data() {
        return {
            entities: {
                data: [],
            },
            loading: false,
            filterParams: {
                selectedCategories: [],
                locations: [],
                page: 1,
            },
        };
    },
    beforeRouteEnter(to, from, next) {
        console.log("Before enter,,,,", to.query, from.query);
        next((vm) => {
            // access to component public instance via `vm`
            if (to.query.filter) {
                vm.filterParams = JSON.parse(to.query.filter);
            }
            vm.getEntities();
        });
    },
    beforeRouteUpdate(to, from, next) {
        // just use `this`
        console.log("update,,,", to.query, from.query);
        this.filterParams = JSON.parse(to.query.filter);
        this.getEntities();
        next();
    },
    computed: {},
    /*
    watch: {
        $route: "syncRoute", //aca vemos si cambio la url y actualizamos el store, obviamente todo esto es solo para el landing
    },
    */
    methods: {
        changePage(event) {
            console.log("Change page,,,", event);
            this.filterParams.page = event;
            this.pushToRoute();
        },
        handleFilterChange() {
            console.log("Filter Changed");
            this.filterParams.page = 1;
            this.pushToRoute();
        },
        async pushToRoute() {
            console.log("Pushing,,,");
            await this.$router
                .push({
                    to: "/",
                    query: {
                        filter: JSON.stringify(this.filterParams),
                    },
                })
                .then(() => console.log("Pushed to route,,,", filterParams))
                .catch(() => {});
        },
        async getEntities() {
            if (this.loading) return;
            console.log("Getting entitites,,,");
            try {
                this.loading = true;
                //seteamos los params del req
                const obj = {
                    params: {
                        page: this.filterParams.page,
                        locations: this.filterParams.locations.map((s) => s.id), //SACAMOS LOS IDS DE LOS LUGARES ELEGIDOS
                    },
                };
                //aplanamos el array de arrays de categorias
                obj.params.selectedCategories = [].concat
                    .apply([], this.filterParams.selectedCategories)
                    .filter((el) => {
                        return el != null;
                    });
                console.log("Req sent,,,", obj);
                let res = await axios.get("/api/entities", obj);
                this.entities = await res.data;
                console.log("Finished req,,,", res.data);
            } catch (ex) {
                this.$bvToast.toast(ex.response, {
                    title: `Errors:`,
                    variant: "danger",
                    solid: true,
                });
            } finally {
                this.loading = false;
                console.log(
                    "State of filter page is,,,",
                    this.filterParams.page
                );
            }
        },
    },
    created() {},
    mounted() {},
};
</script>
<style scoped></style>
