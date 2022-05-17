<template>
    <b-container>
        <div class="about">
            <div>
                <h1>UserEntities</h1>
            </div>
            <b-card title="" header-tag="header" footer-tag="footer">
                <template #header>
                    <h6 class="mb-0 mt-0">User Entities</h6>
                </template>
                <b-card-text>
                    <div class="mb-4 mb-md-0">
                        <div class="">
                            <p class="mb-4">
                                <b-button
                                    @click="showModal = !showModal"
                                    type="submit"
                                    variant="primary"
                                    ><b-icon
                                        icon="plus"
                                        aria-label="Help"
                                    ></b-icon
                                ></b-button>
                            </p>
                            <div v-for="(entity, i) in userEntities" :key="i">
                                <!---->
                                <span
                                    v-if="
                                        entity.user_id !==
                                        entity.created_by_user_id
                                    "
                                >
                                    <b-icon
                                        :id="'disabled-wrapper' + i"
                                        icon="exclamation-circle-fill"
                                        variant="warning"
                                    ></b-icon>
                                    <b-tooltip
                                        variant="warning"
                                        :target="'disabled-wrapper' + i"
                                        >You dont own this entity</b-tooltip
                                    >
                                </span>
                                <!---->
                                <h6 class="mb-2">
                                    Entity Name:
                                    <span class="text-muted mr-2">
                                        <b-link
                                            :to="'/entity/' + entity.username"
                                            >{{ entity.name }}</b-link
                                        >
                                    </span>
                                    <b-button
                                        @click="editEntity(entity)"
                                        size="sm"
                                        variant="outline-secondary"
                                        class="mb-2"
                                    >
                                        <b-icon
                                            icon="gear-fill"
                                            aria-label="Help"
                                        ></b-icon>
                                    </b-button>
                                </h6>
                                <p class="mb-2" style="font-size: 0.77rem"></p>
                                Categories:
                                <h6
                                    v-for="(cat, i) in entity.categories"
                                    :key="i"
                                >
                                    {{ cat.name }}
                                </h6>
                                <div
                                    class="progress rounded mb-2"
                                    style="height: 5px"
                                >
                                    <div
                                        class="progress-bar"
                                        role="progressbar"
                                        style="width: 66%"
                                        aria-valuenow="66"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                    ></div>
                                </div>
                                <hr />
                            </div>

                            <!---->
                        </div>
                    </div>
                </b-card-text>

                <template #footer>
                    <em>Remember to save your changes</em>
                </template>
            </b-card>
            <b-modal
                size="xl"
                centered
                :hide-footer="true"
                id="modal-1"
                title="Add/Edit Entity"
                v-model="showModal"
                @hidden="toEntityForm = {}"
            >
                <EntityDetailsForm :entity="toEntityForm" />
            </b-modal>
        </div>
    </b-container>
</template>
<script>
import EntityDetailsForm from "../Components/forms/EntityDetailsForm.vue";
//import store from "../Store";
export default {
    name: "UserEntitiesPage",
    metaInfo: {
        // title will be injected into parent titleTemplate
        title: "User entities",
        titleTemplate: null,
    },
    components: {
        EntityDetailsForm,
    },
    data() {
        return {
            showModal: false,
            toEntityForm: {},
        };
    },
    /*
    async beforeRouteEnter(to, from, next) {
        await store.dispatch("getUserEntities");
        next();
    },
    */
    computed: {
        userEntities() {
            return this.$store.state.mainData.user_entities;
        },
    },
    methods: {
        editEntity(entity) {
            this.showModal = true;
            //this.toEntityForm = entity;
            this.toEntityForm = JSON.parse(JSON.stringify(entity));
        },
    },
    async mounted() {
        await this.$store.dispatch("getUserEntities");
    },
};
</script>
