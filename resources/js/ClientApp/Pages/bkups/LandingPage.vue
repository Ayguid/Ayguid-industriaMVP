<template>
    <b-container>
        <div class="landing">
            <div class>
                <h1 class="text-center text-muted">BUSCÁ TU PROVEEDOR</h1>
                <p class="text-center text-muted">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </p>
            </div>
            {{ this.$route.query.filter }}

            <div class="">
                <MainFilter @filterOn="applyFilterParams" />
            </div>

            <b-overlay
                :show="loading"
                spinner-variant="primary"
                spinner-type="grow"
                spinner-small
                rounded="sm"
            >
                <InfiniteScroll :loadMore="loadMoreEntities">
                    <div class="row">
                        <div class="col-lg-4" v-for="(entity, i) in entities">
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
    props: ["filter"],
    components: {
        MainFilter,
        EntityCard,
        InfiniteScroll,
    },
    data() {
        return {
            filterParams: null,
            page: 1,
            loading: false,
            //filterChanged: false,
        };
    },
    computed: {
        entities() {
            return this.$store.state.mainData?.entities?.data;
        },
    },
    methods: {
        async applyFilterParams(event) {
            //console.log(12);
            this.filterParams = event;
            this.page = 1;
            await this.$store.dispatch("setCatsFilterChanged", true);
            await this.loadMoreEntities();
            await this.$store.dispatch("setCatsFilterChanged", false);
        },
        async loadMoreEntities() {
            //console.log(this.$store.state.mainData?.entities?.next_page_url)

            if (
                this.page - 1 ==
                this.$store.state.mainData.entities.last_page
            ) {
                console.log("stop");
                return;
            }
            this.loading = true;
            let obj = {
                params: this.filterParams,
                page: this.page,
            };

            try {
                await this.$store.dispatch("getEntities", obj);
                //this.$router.push("/?q=queryParams");
            } catch (ex) {
                this.$bvToast.toast(ex.response, {
                    title: `Errors:`,
                    variant: "danger",
                    solid: true,
                });
            } finally {
                this.loading = false;
                this.page++;
            }
        },
    },
    async mounted() {
        /*
        if (this.$store.state.mainData?.entities?.data.length == 0) {
            this.loadMoreEntities();
        } else {
            this.loading = false;
        }
        
        */
        //ver donde insertar esta parte mejor, es por si entrar a la dir de una con el filtro en la url
        //this.$store.state.mainFilter.location = this.$route.query.location;
        await this.$store.dispatch("resetEntities");
        await this.loadMoreEntities();
    },
    created() {
        /*
        this.$store.state.mainFilter.selectedCategories = JSON.parse(
            this.$route.query.catIds
        );

        this.$watch(
            () => this.$route.params,
            (toParams, previousParams) => {
                this.$store.state.mainFilter.selectedCategories = JSON.parse(
                    this.$route.query.catIds
                );
            }
        );
        */
        this.fp = JSON.parse(this.$route.query.filter);
        this.$watch(
            () => this.$route.query,
            (toParams, previousParams) => {
                this.fp = JSON.parse(this.$route.query.filter);
            }
        );
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
