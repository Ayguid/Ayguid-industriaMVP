<template>
    <div class="about">
        <h2>Processes</h2>
        <v-card v-if="mainData.processes" class="mx-auto">
            <v-sheet class="pa-4 primary lighten-2">
                <v-text-field
                    v-model="search"
                    label="Search Process"
                    dark
                    flat
                    solo-inverted
                    hide-details
                    clearable
                    clear-icon="mdi-close-circle-outline"
                ></v-text-field>
                <v-checkbox
                    v-model="caseSensitive"
                    dark
                    hide-details
                    label="Case sensitive search"
                ></v-checkbox>
            </v-sheet>
            <v-card-text>
                <v-treeview
                    :selection-type="'independent'"
                    selectable
                    return-object
                    @input="removeLastSelect"
                    v-model="selections"
                    :items="mainData.processes"
                    :search="search"
                    :filter="filter"
                    :open.sync="open"
                >
                    <template v-slot:append="{ item }"
                        ><!--prepend-->
                        <div v-if="imSelected(item.id)">
                            <v-icon
                                @click="setMode('edit')"
                                color="blue darken-2"
                            >
                                mdi-pencil
                            </v-icon>
                            <v-icon
                                @click="setMode('addChild')"
                                color="green darken-2"
                            >
                                mdi-plus
                            </v-icon>
                            <v-icon color="red darken-2"> mdi-minus </v-icon>
                        </div>
                    </template>
                </v-treeview>
            </v-card-text>
        </v-card>
        <div class="mt-4">
            <v-btn
                color="primary"
                v-if="!selections[0]"
                @click="setMode('addParent')"
            >
                NEW PARENT
            </v-btn>
            <!--
            {{ selected }}
            {{ newMaterial }}
            -->
            {{ form }}
            {{ formChild }}
            <h4>Mode: {{ mode ? mode.toUpperCase() : "" }}</h4>
            <v-alert
                :value="alert"
                dark
                border="top"
                icon="mdi-home"
                transition="scale-transition"
            >
                <div>
                    <v-form
                        ref="form"
                        v-model="valid"
                        lazy-validation
                        v-on:submit.prevent="onSubmit"
                    >
                        <v-text-field
                            :disabled="!mode || mode == 'addChild'"
                            v-model="form.name"
                            :counter="10"
                            :rules="nameRules"
                            label="Name"
                            required
                        ></v-text-field>
                        <v-text-field
                            v-if="mode == 'addChild'"
                            v-model="formChild.name"
                            :rules="nameRules"
                            :counter="10"
                            label="Child name"
                            required
                        ></v-text-field>
                        <v-btn color="warning" @click="resetValidation">
                            Reset Validation
                        </v-btn>
                        <v-btn color="primary" type="submit"> Submit </v-btn>
                    </v-form>
                </div>
            </v-alert>
        </div>
    </div>
</template>
<script>
//import { dfs } from "../helpers/iterator";
export default {
    name: "processes",
    data() {
        return {
            alert: false,
            selections: [],
            mode: false,
            open: [], //1,2
            search: null,
            caseSensitive: false,
            valid: true,
            nameRules: [
                (v) => !!v || "Name is required",
                (v) =>
                    (v && v.length <= 10) ||
                    "Name must be less than 10 characters",
            ],
            form: { id: false, name: "", parent_id: false },
            formChild: { name: "", parent_id: false }, //no lleva id
        };
    },
    computed: {
        mainData() {
            return this.$store.state.mainData;
        },
        filter() {
            return this.caseSensitive
                ? (item, search, textKey) => item[textKey].indexOf(search) > -1
                : undefined;
        },
    },
    methods: {
        /*
        getUpdatedTree() {
            console.log(this.$refs.treeview.getTreeData());
        },*/
        removeLastSelect(event) {
            this.mode = false;
            if (this.selections.length > 1) {
                this.selections.shift();
            }
            if (this.selections.length == 0) {
                this.alert = false;
                this.mode = false;
            }
            this.formChild.name = "";
            this.formChild.parent_id = event[0]?.id || false;
            this.form.id = event[0]?.id || "";
            this.form.name = event[0]?.name || "";
            this.form.parent_id = event[0]?.parent_id || false;
            //console.log(event);
            //this.formChild.parent_id = event[0]?.id || false;
        },
        imSelected(id) {
            if (id == this.selections[0]?.id) {
                return true;
            }
            return false;
        },
        setMode(mode) {
            //this.alert = true;
            if (this.mode == mode) {
                this.mode = false;
                this.alert = false;
            } else {
                this.alert = true;
                this.mode = mode;
            }
        },
        toAddChild() {
            console.log("addChild : ");
        },
        validate() {
            this.$refs.form.validate();
        },
        reset() {
            this.$refs.form.reset();
            this.mode = false;
            this.selections = [];
            this.alert = false;
        },
        resetValidation() {
            this.$refs.form.resetValidation();
        },
        async onSubmit(event) {
            if (this.mode) {
                console.log(this.mode);
                let formToSend = {};
                switch (this.mode) {
                    //aca seteamos el form antes de mandarlo
                    case "addParent":
                        //redundante pero bueh, dsps limpiamos todo
                        formToSend = JSON.parse(JSON.stringify(this.form));
                        formToSend.id = null;
                        formToSend.parent_id = null;
                        break;
                    case "edit":
                        formToSend = JSON.parse(JSON.stringify(this.form));
                        break;
                    case "addChild":
                        //
                        formToSend = JSON.parse(JSON.stringify(this.formChild));
                        formToSend.id = null;
                        break;

                    default:
                        console.log(`Sorry, unrecognized mode ${expr}.`);
                        return;
                }
                //console.log(formToSend);
                // aca hacer request/callAction
                try {
                    //console.log(this.$root);
                    let res;
                    if (!formToSend.id) {
                        res = await this.$store.dispatch(
                            "storeProcess",
                            formToSend
                        );
                    } else {
                        res = await this.$store.dispatch(
                            "updateProcess",
                            formToSend
                        );
                    }
                    console.log(res);
                    this.reset();
                    this.$root.vtoast.show({ message: res.data.message });
                } catch (ex) {
                    console.log(ex);
                } finally {
                }
            }
        },
    },
    mounted() {
        /*
        let result = null;

        for (let obj of this.mainData.processes) {
            result = dfs(obj, 9);
            if (result) {
                break;
            }
        }
        console.log(result);
        */
    },
};
</script>
