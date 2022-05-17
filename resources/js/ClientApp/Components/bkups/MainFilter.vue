<template>
    <div class="">
        <div class="row">
            <div
                class="col-lg-4 mb-2 filterCol"
                v-for="(category, i) in categories"
                :key="i"
            >
                <treeselect
                    :placeholder="category.name"
                    v-model="selectedCategories[i]"
                    :multiple="true"
                    :closeOnSelect="true"
                    :options="[category]"
                    :normalizer="normalizer"
                    @input="getEntities"
                />
                <!--  :options="category.children" no deja que elijan la categoria padre, tipo materiales, o proceso, a menos que dibujemos todas las cats en un casillero -->
            </div>

            <div class="col-lg-4 mb-2 filterCol">
                <PlaceSearch />
            </div>
        </div>
        <!--
        {{ selectedCategories }}
        -->
    </div>
</template>
<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";
// import the component
import Treeselect from "@riophae/vue-treeselect";
// import the styles
import "@riophae/vue-treeselect/dist/vue-treeselect.css";
import PlaceSearch from "./PlaceSearch.vue";
export default {
    name: "MainFilter",
    //props: ["fp"],
    components: {
        Treeselect,
        PlaceSearch,
    },
    data() {
        return {
            //values: [],
            selectedCategories: [],
            normalizer(node) {
                return {
                    label: node.name,
                };
            },
            // define options
        };
    },
    computed: {
        categories() {
            return this.$store.state.mainData.parent_categories || [];
        },
    },
    methods: {
        async getEntities() {
            //flateneamos el array antes de mandarlo porque es un array de arrays
            return this.$router.push(
                "/?filter=" + JSON.stringify(this.selectedCategories)
            );
            let cats = [].concat
                .apply([], this.selectedCategories)
                .filter((el) => {
                    return el != null;
                });

            //console.log(cats);
            const params = {
                catIds: cats,
            };
            this.$emit("filterOn", { params });
            /*
            try {
                await this.$store.dispatch("getEntities", { params });
                //this.fields.dataSource = this.$store.state.mainData.materials;
            } catch (ex) {
                this.$bvToast.toast(ex.response, {
                    title: `Errors:`,
                    variant: "danger",
                    solid: true,
                });
            } finally {
            }
            */
        },
    },
    mounted() {
        //this.selectedCategories = this.$store.state.mainData.catsFilterIds;
    },
};
</script>
<style>
.filterCol:nth-last-child(-n + 3) {
}
</style>
