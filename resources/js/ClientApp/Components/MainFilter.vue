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
                    v-model="filterParams.selectedCategories[i]"
                    :multiple="true"
                    :closeOnSelect="true"
                    :options="[category]"
                    :normalizer="normalizer"
                    @input="parseFilterParams"
                />
                <!-- @input="getEntities"  :options="category.children" no deja que elijan la categoria padre, tipo materiales, o proceso, a menos que dibujemos todas las cats en un casillero -->
            </div>

            <div class="col-lg-4 mb-2 filterCol">
                <LocationSearch
                    v-model="filterParams.locations"
                    @input="parseFilterParams"
                    :multiple="true"
                />
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
import LocationSearch from "./LocationSearch.vue";
export default {
    name: "MainFilter",
    props: ["filterParams"],
    components: {
        Treeselect,
        LocationSearch,
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
            return this.$store.state.mainData.categories || [];
        },
    },
    methods: {
        parseFilterParams(event) {
            console.log(event);
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
