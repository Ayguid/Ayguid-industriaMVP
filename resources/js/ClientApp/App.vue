<template>
    <div class="app">
        <CustomNavbar></CustomNavbar>
        <div v-if="$store.state.loading" class="text-center spinner">
            <b-spinner variant="primary" label="Text Centered"></b-spinner>
        </div>
        <router-view></router-view>

        <b-button @click="topFunction()" id="toTopBtn" variant="outline-primary"
            >TOP</b-button
        >
    </div>
</template>

<script>
//import './Styles/app.scss'
export default {
    name: "app",
    metaInfo: {
        // if no subcomponents specify a metaInfo.title, this title will be used
        title: "Default Title",
        // all titles will be injected into this template
        titleTemplate: "%s | My Awesome Webapp",
    },
    components: {
        CustomNavbar: () => import("./Components/CustomNavbar.vue"),
    },
    methods: {
        // When the user clicks on the button, scroll to the top of the document
        topFunction() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        },
    },
    async beforeMount() {
        if (this.$store.state.mainData.categories.length == 0) {
            try {
                await this.$store.dispatch("getCategories");
                //this.fields.dataSource = this.$store.state.mainData.materials;
            } catch (ex) {
                this.$bvToast.toast(ex.response, {
                    title: `Errors:`,
                    variant: "danger",
                    solid: true,
                });
            } finally {
            }
        }
        //this.fields.dataSource = this.$store.state.mainData.materials;
    },
    mounted() {
        const mybutton = document.getElementById("toTopBtn");

        // When the user scrolls down 20px from the top of the document, show the button
        window.onscroll = function () {
            scrollFunction();
        };

        function scrollFunction() {
            if (
                document.body.scrollTop > 20 ||
                document.documentElement.scrollTop > 20
            ) {
                mybutton.style.display = "block";
            } else {
                mybutton.style.display = "none";
            }
        }
    },
};
</script>
<style>
body {
    background-color: #eee !important;
}
.active {
    color: grey !important;
}

.exact-active-link {
    color: grey !important;
    font-weight: bold;
}
#toTopBtn {
    display: none;
    position: fixed;
    bottom: 20px;
    right: 30px;
    z-index: 99;
}

#toTopBtn:hover {
    background-color: #555;
}
/* Smooth scrolling IF user doesn't have a preference due to motion sensitivities */
@media screen and (prefers-reduced-motion: no-preference) {
    html {
        scroll-behavior: smooth;
    }
}
.spinner {
    display: block;
    position: fixed;
    z-index: 1031; /* High z-index so it is on top of the page */
    top: 50%;
    right: 50%; /* or: left: 50%; */
    margin-top: -..px; /* half of the elements height */
    margin-right: -..px; /* half of the elements widht */
}
</style>
