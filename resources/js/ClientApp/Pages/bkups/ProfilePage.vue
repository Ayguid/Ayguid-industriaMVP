<template>
    <b-container>
        <div class="profile">
            <div><h1>Profile</h1></div>
            <div class="row">
                <div class="col-lg-4">
                    <div class="card mb-4">
                        <div class="card-body text-center">
                            <div class="container">
                                <div class="picture-container">
                                    <div class="picture">
                                        <img
                                            :src="
                                                user.profile_photo_path_full_url
                                            "
                                            class="picture-src"
                                            ref="profile_pic"
                                            title=""
                                        />
                                        <input
                                            @change="previewFile"
                                            type="file"
                                            ref="profile_pic_input"
                                            class=""
                                        />
                                    </div>
                                </div>
                            </div>

                            <h5 class="my-3">{{ user.name }}</h5>
                            <p class="text-muted mb-1">
                                {{ user.description }}
                            </p>
                        </div>
                    </div>
                    <div class="card mb-4 mb-lg-0">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-sm-3">
                                    <p class="mb-0">Full Name</p>
                                </div>
                                <div class="col-sm-9">
                                    <p class="text-muted mb-0">
                                        {{ user.name }}
                                    </p>
                                </div>
                            </div>
                            <hr />
                            <div class="row">
                                <div class="col-sm-3">
                                    <p class="mb-0">Username</p>
                                </div>
                                <div class="col-sm-9">
                                    <p class="text-muted mb-0">
                                        {{ user.username }}
                                    </p>
                                </div>
                            </div>
                            <hr />
                            <div class="row">
                                <div class="col-sm-3">
                                    <p class="mb-0">Email</p>
                                </div>
                                <div class="col-sm-9">
                                    <p class="text-muted mb-0">
                                        {{ user.email }}
                                    </p>
                                </div>
                            </div>
                            <hr />
                            <div class="row">
                                <div class="col-sm-3">
                                    <p class="mb-0">Phone</p>
                                </div>
                                <div class="col-sm-9">
                                    <p class="text-muted mb-0">
                                        {{ user.phone }}
                                    </p>
                                </div>
                            </div>
                            <hr />
                            <div class="row">
                                <div class="col-sm-3">
                                    <p class="mb-0">Mobile</p>
                                </div>
                                <div class="col-sm-9">
                                    <p class="text-muted mb-0">
                                        {{ user.cellphone }}
                                    </p>
                                </div>
                            </div>
                            <hr />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </b-container>
</template>

<script>
//import EntityDetailsForm from "../Components/forms/EntityDetailsForm.vue";
export default {
    name: "ProfilePage",

    data() {
        return {};
    },
    computed: {
        user() {
            return this.$store.state.user;
        },
        userOwnsEntities() {
            return this.$store.state.mainData.user_entities;
        },
    },
    watch: {},
    methods: {
        previewFile() {
            const preview = this.$refs.profile_pic;
            const file = this.$refs.profile_pic_input.files[0];
            const reader = new FileReader();
            reader.addEventListener(
                "load",
                function () {
                    // convert image file to base64 string
                    preview.src = reader.result;
                },
                false
            );

            if (file) {
                reader.readAsDataURL(file);
                this.storeProfilePic(file);
            }
        },
        async storeProfilePic(file) {
            try {
                let formData = new FormData();
                formData.append("file", file);
                const response = await this.$store.dispatch(
                    "storeProfilePic",
                    formData
                );
                this.$bvToast.toast("Pic changed successfully!", {
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
            }
        },
    },
    async mounted() {},
};
</script>
<style>
/*Profile Pic Start*/
.picture-container {
    position: relative;
    cursor: pointer;
    text-align: center;
}
.picture {
    width: 106px;
    height: 106px;
    background-color: #999999;
    border: 4px solid #cccccc;
    color: #ffffff;
    border-radius: 50%;
    margin: 0px auto;
    overflow: hidden;
    transition: all 0.2s;
    -webkit-transition: all 0.2s;
}
.picture:hover {
    border-color: #2ca8ff;
}
.content.ct-wizard-green .picture:hover {
    border-color: #05ae0e;
}
.content.ct-wizard-blue .picture:hover {
    border-color: #3472f7;
}
.content.ct-wizard-orange .picture:hover {
    border-color: #ff9500;
}
.content.ct-wizard-red .picture:hover {
    border-color: #ff3b30;
}
.picture input[type="file"] {
    cursor: pointer;
    display: block;
    height: 100%;
    left: 0;
    opacity: 0 !important;
    position: absolute;
    top: 0;
    width: 100%;
}

.picture-src {
    width: 100%;
}
/*Profile Pic End*/
</style>
