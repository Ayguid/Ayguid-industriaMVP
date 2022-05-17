<template>
    <b-container>
        <div class="entity">
            <div>
                <h1>Entity</h1>
            </div>
            <div class="row">
                <!-- -->
                <div class="col-5">
                    <div>
                        <b-list-group>
                            <b-list-group-item
                                class="d-flex align-items-center"
                            >
                                <b-avatar
                                    icon="bullseye"
                                    class="mr-3"
                                ></b-avatar>
                                <div class="row">
                                    <div class="col align-self-center">
                                        <p class="mb-0">Username</p>
                                    </div>
                                    <div class="col align-self-center">
                                        <p class="text-muted mb-0">
                                            {{ entity.username }}
                                        </p>
                                    </div>
                                </div>
                            </b-list-group-item>
                            <b-list-group-item
                                class="d-flex align-items-center"
                            >
                                <b-avatar class="mr-3"></b-avatar>
                                <div class="row">
                                    <div class="col-sm-3 align-self-center">
                                        <p class="mb-0">Name</p>
                                    </div>
                                    <div class="col-sm-9 align-self-center">
                                        <p class="text-muted mb-0">
                                            {{ entity.name }}
                                        </p>
                                    </div>
                                </div>
                            </b-list-group-item>
                            <b-list-group-item
                                class="d-flex align-items-center"
                            >
                                <b-avatar
                                    icon="envelope"
                                    class="mr-3"
                                ></b-avatar>
                                <div class="row">
                                    <div class="col-sm-3 align-self-center">
                                        <p class="mb-0">Email</p>
                                    </div>
                                    <div class="col-sm-9 align-self-center">
                                        <p class="text-muted mb-0">
                                            {{ entity.email }}
                                        </p>
                                    </div>
                                </div>
                            </b-list-group-item>
                            <b-list-group-item
                                class="d-flex align-items-center"
                            >
                                <b-avatar
                                    icon="telephone"
                                    class="mr-3"
                                ></b-avatar>
                                <div class="row">
                                    <div class="col-sm-3 align-self-center">
                                        <p class="mb-0">Phone</p>
                                    </div>
                                    <div class="col-sm-9 align-self-center">
                                        <p class="text-muted mb-0">
                                            {{ entity.phone }}
                                        </p>
                                    </div>
                                </div>
                            </b-list-group-item>

                            <b-list-group-item
                                class="d-flex align-items-center"
                            >
                                <b-avatar
                                    icon="bookmark"
                                    class="mr-3"
                                ></b-avatar>
                                <span class="mr-auto">Bookmark Count</span>
                                <b-badge>{{ entity.bookmarks_count }}</b-badge>
                            </b-list-group-item>
                        </b-list-group>
                        <hr />
                        <b-list-group>
                            <b-list-group-item disabled
                                >Categories</b-list-group-item
                            >
                            <b-list-group-item
                                v-for="(cat, i) in entity.categories"
                                :key="i"
                                ><b-badge class="m-2 p-2" variant="primary">{{
                                    cat.name
                                }}</b-badge></b-list-group-item
                            >
                        </b-list-group>
                    </div>
                </div>
                <!-- -->
                <div class="col-7">
                    <div>
                        <b-tabs content-class="mt-3">
                            <b-tab title="First" active>
                                <div class="first_tab">
                                    <h6>Description:</h6>
                                    <p class="text-muted h3">
                                        <cite>{{ entity.description }}</cite>
                                    </p>
                                </div></b-tab
                            >
                            <b-tab title="Second"
                                ><div class="second_tab">2</div></b-tab
                            >
                            <b-tab title="Disabled" disabled
                                ><p>I'm a disabled tab!</p></b-tab
                            >
                        </b-tabs>
                    </div>
                </div>
            </div>
            <!-- -->
        </div>
    </b-container>
</template>
<script>
export default {
    name: "EntityPage",
    props: ["id"],
    data() {
        return {
            entity: {},
        };
    },
    beforeRouteEnter(to, from, next) {
        next((vm) => {
            // access to component's instance using `vm` .
            // this is done because this navigation guard is called before the component is created.
            // clear your previously populated search results.
            // re-populate search results
            vm.getEntity(vm.id);
        });
    },
    methods: {
        async getEntity(id) {
            //showEntity
            //console.log(12);
            try {
                const ent = await this.$store.dispatch("getEntity", id);
                this.entity = ent.data;
            } catch (ex) {
                this.$bvToast.toast(ex.response, {
                    title: `Errors:`,
                    variant: "danger",
                    solid: true,
                });
            } finally {
            }
        },
    },
};
</script>
<style></style>
