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
            <b-overlay
                :show="loading"
                spinner-variant="primary"
                spinner-type="grow"
                spinner-small
                rounded="sm"
            >
                <InfiniteScroll :loadMore="getEntities">
                    <div class="row">
                        <div
                            class="col-lg-4"
                            v-for="(entity, i) in entities.data"
                        >
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
                </InfiniteScroll>
            </b-overlay>
        </div>
    </b-container>
</template>
<script>
import MainFilter from "../Components/MainFilter.vue";
import EntityCard from "../Components/EntityCard.vue";
import InfiniteScroll from "../Components/InfiniteScroll.vue";
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
        async syncRoute() {
            //aca vemos si cambio la url y actualizamos el store, obviamente todo esto es solo para el landing
            this.setStoreFilter();
            this.getEntities();
        },
        handleFilterChange() {
            //reseteamos los resultados si el filtro fue activado
            this.entities = {
                data: [],
            };
            this.$router
                .push({
                    to: "/",
                    query: {
                        filter: JSON.stringify(this.$store.state.mainFilter),
                    },
                })

                .catch(() => {});
        },
        async getEntities() {
            try {
                this.loading = true;
                const obj = {
                    params: {},
                };
                //aplanamos el array de cats antes de mandarlo
                obj.params.selectedCategories = [].concat
                    .apply([], this.$store.state.mainFilter.selectedCategories)
                    .filter((el) => {
                        return el != null;
                    });
                obj.params.locations = this.$store.state.mainFilter.locations;
                //
                let res;
                res = await axios.get("/api/entitiesListing", obj);

                if (this.entities.data.length == 0) {
                    console.log(1);
                    res = await axios.get("/api/entitiesListing", obj);
                }
                if (this.entities?.next_page_url) {
                    console.log(2);
                    res = await axios.get(this.entities.next_page_url);
                }
                if (
                    !this.entities?.next_page_url &&
                    this.entities.data.length > 0
                ) {
                    console.log(3);
                    return Promise.resolve();
                }

                //console.log(res);
                this.entities = {
                    ...res.data,
                    data: [...this.entities.data, ...res.data.data],
                };
                //
                console.log(res);
            } catch (ex) {
                this.$bvToast.toast(ex.response, {
                    title: `Errors:`,
                    variant: "danger",
                    solid: true,
                });
            } finally {
                this.loading = false;
            }
        },
        setStoreFilter() {
            if (this.$route.query.filter) {
                this.$store.state.mainFilter = JSON.parse(
                    this.$route.query.filter
                );
            } else {
                this.$store.state.mainFilter = {
                    selectedCategories: [],
                    locations: null,
                    //page: 1,
                };
            }
        },
    },
    created() {
        this.setStoreFilter();
        this.getEntities();
    },
    mounted() {
        //this.filterParams = this.$route.query;
        //this.getEntities();
    },
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
