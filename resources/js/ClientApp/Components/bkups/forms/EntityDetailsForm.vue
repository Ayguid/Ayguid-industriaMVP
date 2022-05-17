<template>
    <div class="">
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <!-- full name -->
            <b-input-group size="lg" class="mb-2">
                <b-input-group-prepend is-text>
                    <b-icon icon="person"></b-icon>
                </b-input-group-prepend>
                <b-form-input
                    :disabled="!edit"
                    type="text"
                    v-model="form.username"
                    placeholder="Username"
                ></b-form-input>
            </b-input-group>
            <p class="text-danger" v-text="errors.username"></p>
            <b-input-group size="lg" class="mb-2">
                <b-input-group-prepend is-text>
                    <b-icon icon="person"></b-icon>
                </b-input-group-prepend>
                <b-form-input
                    :disabled="!edit"
                    type="text"
                    v-model="form.name"
                    placeholder="Full name"
                ></b-form-input>
            </b-input-group>
            <p class="text-danger" v-text="errors.name"></p>
            <!-- username -->
            <!-- 
            <b-input-group size="lg" class="mb-2">
                <b-input-group-prepend is-text>
                    <b-icon icon="play"></b-icon>
                </b-input-group-prepend>
                <b-form-input
                    :disabled="!edit"
                    type="text"
                    v-model="form.username"
                    placeholder="Username"
                ></b-form-input>
            </b-input-group>
            <p class="text-danger" v-text="errors.username"></p>
             -->
            <b-input-group size="lg" class="mb-2">
                <b-input-group-prepend is-text>
                    <b-icon icon="envelope"></b-icon>
                </b-input-group-prepend>
                <b-form-input
                    :disabled="!edit"
                    type="email"
                    v-model="form.email"
                    placeholder="email"
                ></b-form-input>
            </b-input-group>
            <p class="text-danger" v-text="errors.email"></p>

            <b-input-group class="mb-2" size="lg">
                <b-input-group-prepend is-text>
                    <b-icon icon="telephone"></b-icon>
                </b-input-group-prepend>
                <b-form-input
                    :disabled="!edit"
                    type="text"
                    v-model="form.phone"
                    placeholder="Phone"
                ></b-form-input>
            </b-input-group>
            <p class="text-danger" v-text="errors.phone"></p>

            <b-input-group class="mb-2" size="lg">
                <b-input-group-prepend is-text>
                    <b-icon icon="phone"></b-icon>
                </b-input-group-prepend>
                <b-form-input
                    :disabled="!edit"
                    type="text"
                    v-model="form.cellphone"
                    placeholder="Cellphone"
                ></b-form-input>
            </b-input-group>
            <p class="text-danger" v-text="errors.cellphone"></p>

            <b-input-group class="mb-2" size="lg">
                <b-input-group-prepend is-text>
                    <b-icon icon="info-square"></b-icon>
                </b-input-group-prepend>
                <b-form-input
                    :disabled="!edit"
                    type="text"
                    v-model="form.description"
                    placeholder="Description"
                ></b-form-input>
            </b-input-group>
            <p class="text-danger" v-text="errors.description"></p>

            <!-- cats -->
            <b-input-group class="mb-2" size="lg">
                <b-input-group-prepend is-text>
                    <b-icon icon="search"></b-icon>
                </b-input-group-prepend>
                <b-form-input
                    @input="debounceInput"
                    :disabled="!edit"
                    type="text"
                    placeholder="Search available categories"
                ></b-form-input
            ></b-input-group>
            <div>
                <b-button
                    class="m-2"
                    @click="selectCat(category)"
                    v-for="(category, i) in catSuggestions"
                    :key="category.id"
                    >{{ category.name }}</b-button
                >
            </div>
            <div v-if="form.catIds.length > 0">
                <h6>Selected Categories</h6>
                <b-button
                    :disabled="!edit"
                    class="m-2"
                    variant="outline-primary"
                    v-for="(categ, i) in selectedCats"
                    :key="categ.id"
                    @click="removeCat(categ)"
                    >{{ categ.name }}</b-button
                >
            </div>
            <!-- -->
            <PlaceSearch />
            <!-- -->

            <b-input-group class="mb-2" size="lg">
                <b-input-group-prepend is-text>
                    Do you own this entity?
                </b-input-group-prepend>
                <b-form-select
                    :disabled="!edit"
                    v-model="form.userOwnsEntity"
                    :options="options"
                ></b-form-select>
            </b-input-group>
            <div v-if="edit">
                <b-overlay
                    :show="busy"
                    rounded
                    opacity="0.6"
                    spinner-small
                    spinner-variant="primary"
                    class="d-inline-block"
                >
                    <b-button type="submit" variant="primary">Submit</b-button>
                </b-overlay>
                <!--
      <b-button type="submit" variant="primary">Submit</b-button>
      -->
                <b-button type="reset" variant="danger">Reset</b-button>
            </div>
        </b-form>
        <b-input-group v-if="!edit" class="mb-2" size="lg">
            <b-button @click="edit = !edit" type="submit" variant="primary"
                ><b-icon icon="pencil" aria-label="Help"></b-icon
            ></b-button>
        </b-input-group>
    </div>
</template>

<script>
//import Treeselect from "@riophae/vue-treeselect";
import PlaceSearch from "../PlaceSearch.vue";
export default {
    name: "EntityDetailsForm",
    props: ["entity"],
    components: {
        PlaceSearch,
    },
    data() {
        return {
            busy: false,
            show: true,
            edit: _.isEmpty(this.entity) ? true : false,
            errors: {},
            form: {
                id: this.entity?.id || null,
                email: this.entity?.email || "",
                username: this.entity?.username || "",
                name: this.entity?.name || "",
                description: this.entity?.description || "",
                phone: this.entity?.phone || "",
                cellphone: this.entity?.cellphone || "",
                userOwnsEntity:
                    this.entity?.created_by_user_id == this.entity?.user_id
                        ? true
                        : null,
                catIds: this.entity?.categories?.map((s) => s.id) || [],
            },
            catSuggestions: [],
            selectedCats: this.entity?.categories || [],
            //filterKey: "",
            options: [
                {
                    value: null,
                    text: "Do you own this entity?",
                    disabled: true,
                },
                { value: true, text: "Yes" },
                { value: false, text: "No" },
            ],
        };
    },
    computed: {},
    watch: {
        // whenever selectedCats changes, this function will run
        selectedCats(newCat, oldCat) {
            console.log("changed");
            this.form.catIds = this.selectedCats.map((s) => s.id);
            console.log(this.form.catIds);
        },
    },
    methods: {
        selectCat(category) {
            const found = this.selectedCats.find(
                (cat) => cat.id == category.id
            );
            if (!found) {
                this.selectedCats.push(category);
            } else {
                this.selectedCats = this.selectedCats.filter(
                    (cat) => cat.id != category.id
                );
            }
        },
        removeCat(category) {
            this.selectedCats = this.selectedCats.filter(
                (cat) => cat.id != category.id
            );
        },
        async onSubmit(event) {
            event.preventDefault();
            this.busy = true;
            try {
                let newObj = JSON.parse(JSON.stringify(this.form));
                if (!_.isEmpty(this.entity)) {
                    //update
                    const response = await this.$store.dispatch(
                        "updateEntity",
                        newObj
                    );
                } else {
                    //new
                    const response = await this.$store.dispatch(
                        "storeEntity",
                        newObj
                    );
                }

                this.edit = false;
                this.errors = {};
                this.$bvToast.toast("Details changed successfully!", {
                    title: `Great:`,
                    variant: "success",
                    solid: true,
                });
            } catch (ex) {
                this.$bvToast.toast(ex.response.data.message, {
                    title: `Errors:`,
                    variant: "danger",
                    solid: true,
                });
                this.errors = ex.response.data.errors;
            } finally {
                this.busy = false;
            }
        },
        onReset(event) {
            /*
            event.preventDefault();
            this.edit = false;
            this.errors = {};
            this.form.email = this.user.email;
            this.form.name = this.user.name;
            this.form.username = this.user.username;
            this.form.phone = this.user.phone;
            this.form.cellphone = this.user.cellphone;
            this.form.description = this.user.description;
            // Reset our form values
            // Trick to reset/clear native browser form validation state
            this.show = false;
            this.$nextTick(() => {
                this.show = true;
            });
            */
        },
        flattenArray(array) {
            // aplanamos el array de feelings en el form
            var result = [];
            const obj = this;
            array.forEach(function (a) {
                result.push(a);
                if (Array.isArray(a.children)) {
                    result = result.concat(obj.flattenArray(a.children));
                }
            });
            return result;
        },
        debounceInput: _.debounce(function (e) {
            console.log(e);
            if (e == "" || e == null) {
                this.catSuggestions = [];
            }
            if (e.length < 2) return;
            this.catSuggestions = this.flattenArray(
                this.$store.state.mainData.parent_categories
            ).filter((el) => el.name.toLowerCase().includes(e.toLowerCase()));
            //console.log();
            //this.filterKey = e.target.value;
        }, 500),
    },
    mounted() {
        /*
        this.form.email = this.user.email;
        this.form.name = this.user.name;
        this.form.username = this.user.username;
        this.form.phone = this.user.phone;
        this.form.cellphone = this.user.cellphone;
        this.form.description = this.user.description;
        */
    },
};
</script>
