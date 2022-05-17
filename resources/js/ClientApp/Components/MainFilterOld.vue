<template>
    <b-container class="">
        <b-row class="">
            <b-col sm>
                <!--
        <b-form-input list="materials-id" placeholder="Material"></b-form-input>
        <datalist id="materials-id">
          <option v-for="(material, i) in materials" :key="i">
            {{ material.name }}
          </option>
        </datalist>
        -->
                <treeselect
                    placeholder="Material..."
                    v-model="selectedMaterial"
                    :multiple="true"
                    :options="materials"
                    :value="valueM"
                    :normalizer="normalizer"
                />
            </b-col>
            <b-col sm>
                <treeselect
                    placeholder="Proceso..."
                    v-model="selectedProcess"
                    :multiple="true"
                    :options="processes"
                    :value="valueP"
                    :normalizer="normalizer"
                />
            </b-col>

            <b-col sm>
                <b-form-input
                    list="my-list-id"
                    placeholder="Ubicacion"
                ></b-form-input>
                <datalist id="my-list-id">
                    <option>Manual Option</option>
                </datalist>
            </b-col>

            <b-col>
                <b-button class="w-100">Buscar</b-button>
            </b-col>
        </b-row>
        {{ selectedMaterial }}
        {{ selectedProcess }}
    </b-container>
</template>
<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";
// import the component
import Treeselect from "@riophae/vue-treeselect";
// import the styles
import "@riophae/vue-treeselect/dist/vue-treeselect.css";
export default {
    name: "MainFilter",
    components: {
        Treeselect,
    },
    data() {
        return {
            valueM: null,
            valueP: null,
            selectedMaterial: null,
            selectedProcess: null,
            normalizer(node) {
                return {
                    label: node.name,
                };
            },
            // define options
        };
    },
    computed: {
        processes() {
            return this.$store.state.mainData.processes || [];
        },
        materials() {
            return this.$store.state.mainData.materials || [];
        },
    },
};
</script>
