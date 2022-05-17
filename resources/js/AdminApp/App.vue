<template>
    <div class="app">
        <!--
        <Navbar></Navbar>
        -->
        <!--
        <v-app>
            <v-app-bar app> Title </v-app-bar>
            <div class="ma-2 pa-2">
                <v-card>
                    <v-navigation-drawer permanent expand-on-hover>
                        <v-list>
                            <v-list-item class="px-2">
                                <v-list-item-avatar>
                                    <v-img
                                        src="https://randomuser.me/api/portraits/women/85.jpg"
                                    ></v-img>
                                </v-list-item-avatar>
                            </v-list-item>

                            <v-list-item link>
                                <v-list-item-content>
                                    <v-list-item-title class="text-h6">
                                        {{ $store.state.user.name || "User" }}
                                    </v-list-item-title>
                                    <v-list-item-subtitle>{{
                                        $store.state.user.email || "Email"
                                    }}</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list>

                        <v-divider></v-divider>

                        <v-list nav dense>
                            <v-list-item
                                link
                                active-class="active"
                                to="/admin/materiales"
                            >
                                <v-list-item-icon>
                                    <v-icon>mdi-folder</v-icon>
                                </v-list-item-icon>
                                <v-list-item-title
                                    >Materiales</v-list-item-title
                                >
                            </v-list-item>
                            <v-list-item link active-class="active">
                                <v-list-item-icon>
                                    <v-icon>mdi-folder</v-icon>
                                </v-list-item-icon>
                                <v-list-item-title>Procesos</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-navigation-drawer>
                    <router-view></router-view>
                </v-card>
            </div>
        </v-app>
        -->
        <v-app id="inspire">
            <v-app-bar app :absolute="true"> Admin Panel </v-app-bar>

            <v-navigation-drawer color="#09151E" permanent expand-on-hover app>
                <v-divider></v-divider>
                <v-list nav dense>
                    <v-list-item link href="#">
                        <v-list-item-icon>
                            <v-icon color="white" small>mdi-lightbulb</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title class="title">IND</v-list-item-title>
                    </v-list-item>
                    <v-list-item link>
                        <v-list-item-content>
                            <v-list-item-title class="text-h6">
                                {{ $store.state.user.name || "User" }}
                            </v-list-item-title>
                            <v-list-item-subtitle>{{
                                $store.state.user.email || "Email"
                            }}</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item link to="/superadmin" exact>
                        <v-list-item-icon>
                            <v-icon>mdi-folder</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Home</v-list-item-title>
                    </v-list-item>
                    <!--
                    <v-list-item link to="/admin/materials">
                        <v-list-item-icon>
                            <v-icon>mdi-folder</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Materials</v-list-item-title>
                    </v-list-item>
                    <v-list-item link to="/admin/processes">
                        <v-list-item-icon>
                            <v-icon>mdi-folder</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Processes</v-list-item-title>
                    </v-list-item>
                    -->
                    <v-list-item link to="/superadmin/categories">
                        <v-list-item-icon>
                            <v-icon>mdi-folder</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Categories</v-list-item-title>
                    </v-list-item>
                </v-list>
                <v-divider></v-divider>
            </v-navigation-drawer>
            <!-- -->
            <main class="ma-12 pa-12">
                <router-view></router-view>
            </main>

            <vtoast ref="vtoast" />
        </v-app>
    </div>
</template>

<script>
//import './Styles/app.scss'
import vtoast from "./Components/Vtoast";

export default {
    name: "app",
    components: {
        //Navbar: () => import("./Components/Navbar.vue"),
        vtoast,
    },
    async beforeMount() {
        //console.log(this.$vuetify);
        if (!this.$store.state.mainData) {
            try {
                await this.$store.dispatch("getMainData");
                //this.fields.dataSource = this.$store.state.mainData.processes;
            } catch (ex) {
                this.$bvToast.toast(ex.response, {
                    title: `Errors:`,
                    variant: "danger",
                    solid: true,
                });
            } finally {
            }
        }
        //this.fields.dataSource = this.$store.state.mainData.processes;
    },
    mounted() {
        this.$root.vtoast = this.$refs.vtoast;
    },
};
</script>
<style>
li a:active {
    color: #35495e;
}

li a.active {
    color: #41b883;
}
</style>
