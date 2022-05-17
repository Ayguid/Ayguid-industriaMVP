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
                    v-model="$store.state.mainFilter.selectedCategories[i]"
                    :multiple="true"
                    :closeOnSelect="true"
                    :options="[category]"
                    :normalizer="normalizer"
                    @input="parseFilterParams"
                />
                <!-- @input="getEntities"  :options="category.children" no deja que elijan la categoria padre, tipo materiales, o proceso, a menos que dibujemos todas las cats en un casillero -->
            </div>

            <div class="col-lg-4 mb-2 filterCol">
                <PlaceSearch @selected="parseFilterParams" />
            </div>
        </div>
        <!--
    
        {{ filterValues }}
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
    components: {
        Treeselect,
        PlaceSearch,
    },
    data() {
        return {
            //values: [],
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
        parseFilterParams() {
            // const obj = JSON.stringify(this.filterValues);
            this.$emit("filterChanged");
        },
    },

    mounted() {
        //console.log("Mounted filter");
        //this.selectedCategories = this.$store.state.mainData.catsFilterIds;
    },
};
</script>
<style>
.filterCol:nth-last-child(-n + 3) {
}
</style>
