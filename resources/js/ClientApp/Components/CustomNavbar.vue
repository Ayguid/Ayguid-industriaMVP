<template>
    <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand to="/">IND</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item v-if="$store.getters.isLogged" to="/userentities"
                    >Entities
                </b-nav-item>
                <b-nav-item v-if="$store.getters.isLogged" to="/userbookmarks"
                    >Bookmarks
                </b-nav-item>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <b-nav-form>
                    <b-form-input
                        size="sm"
                        class="mr-sm-2"
                        placeholder="Search"
                    ></b-form-input>
                    <b-button size="sm" class="my-2 my-sm-0" type="submit"
                        >Search</b-button
                    >
                </b-nav-form>

                <b-nav-item-dropdown text="Lang" right>
                    <b-dropdown-item href="#">EN</b-dropdown-item>
                    <b-dropdown-item href="#">ES</b-dropdown-item>
                    <b-dropdown-item href="#">RU</b-dropdown-item>
                    <b-dropdown-item href="#">FA</b-dropdown-item>
                </b-nav-item-dropdown>

                <b-nav-item-dropdown right>
                    <!-- Using 'button-content' slot -->
                    <template #button-content>
                        <em>{{ $store.state.user.name || "User" }}</em>
                    </template>
                    <b-dropdown-item to="/profile">Profile</b-dropdown-item>
                    <b-dropdown-item to="/settings">Settings</b-dropdown-item>
                    <b-dropdown-item @click="logOut">Sign Out</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>
<script>
export default {
    name: "CustomNavbar",
    data() {
        return {
            show: true,
            errors: {},
            form: {
                email: "",
                password: "",
            },
        };
    },
    components: {},
    computed: {},
    watch: {},
    methods: {
        async logOut(event) {
            event.preventDefault();
            try {
                console.log("trying");
                await this.$store.dispatch("logout");
                this.$router.push("/login");
            } catch (ex) {
                console.log(ex);
                this.errors = ex; //
            } finally {
                console.log("Whoops");
            }
        },
    },
};
</script>
