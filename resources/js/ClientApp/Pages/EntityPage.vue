<template>
    <b-container>
        <div class="entity">
            <div>
                <h1>Entity</h1>
            </div>
            <div class="picture-container">
                <div class="picture">
                    <img
                        v-if="entity"
                        :src="entity.background_photo_path ? entity.background_photo_path_full_url : 'http://127.0.0.1:8000/storage/media/defaultCover.webp'"
                        class="picture-src"
                        ref="profile_pic"
                        title=""
                    />

                    <input v-if="entity.user_id == $store.state.user.id"
                        @change="previewFile"
                        type="file"
                        ref="profile_pic_input"
                        class=""
                    />
                </div>
            </div>
            <!-- -->
            <div class="row">
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
                            <b-tab title="Posts" active>
                                <div class="first_tab">
                                    <h6>Desc:</h6>
                                    <p class="text-muted h3">
                                        <cite>{{ entity.description }}</cite>
                                    </p>
                                    <PostCreateForm
                                        v-if="
                                            entity.user_id ==
                                            $store.state.user.id
                                        "
                                        @postSubmitted="addPost"
                                        :entity="entity"
                                    />
                                    <hr />
                                    <infinite-scroll :loadMore="loadMorePosts">
                                        <div v-if="entity">
                                        <b-card
                                            class="mb-2"
                                            
                                            v-for="(post, i) in entity.posts
                                                .data"
                                            :key="i"
                                            title="Date"
                                            :sub-title="post.created_at"
                                        >
                                            <enlargeable-image
                                                v-for="(img, i) in post.media"
                                                :key="i"
                                                :src="img.full_url"
                                                alt=""
                                                width="100%"
                                                :src_large="img.full_url"
                                            />
                                            <!--
                                            <img
                                                v-for="(img, i) in post.media"
                                                :src="img.full_url"
                                                alt=""
                                                width="100%"
                                            />
                                            -->
                                            <b-card-text
                                                style="white-space: pre-line"
                                            >
                                                {{ post.content }}
                                            </b-card-text>

                                            <b-card-text
                                                >A second paragraph of text in
                                                the card.</b-card-text
                                            >

                                            <div
                                                v-if="
                                                    $store.state.user.id ==
                                                    entity.user_id
                                                "
                                            >
                                                <b-link
                                                    @click="
                                                        destroyPost(post.id)
                                                    "
                                                    href="#"
                                                    class="card-link"
                                                    >Delete</b-link
                                                >
                                            </div>
                                        </b-card>
                                        </div>
                                    </infinite-scroll>
                                </div>
                            </b-tab>
                            <b-tab title="Location"
                                ><div class="second_tab">Location</div></b-tab
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
import PostCreateForm from "../Components/forms/PostCreateForm.vue";
import InfiniteScroll from "../Components/InfiniteScroll.vue";

export default {
    name: "EntityPage",
    //props: ["username"],
    props: {
        username: String,
    },
    metaInfo: {
        // title will be injected into parent titleTemplate
        title: "Entity Page",
        titleTemplate: null,
    },
    components: { PostCreateForm, InfiniteScroll },
    data() {
        return {
            entity: {
                posts: {
                    data: [],
                },
            },
        };
    },
    beforeRouteEnter(to, from, next) {
        next((vm) => {
            // access to component's instance using `vm` .
            // this is done because this navigation guard is called before the component is created.
            // clear your previously populated search results.
            // re-populate search results
            vm.getEntity(vm.username);
        });
    },
    watch: {},
    computed: {},
    methods: {
        async getEntity(username) {
            //showEntity
            //console.log(12);
            try {
                const ent = await this.$store.dispatch("getEntity", username);
                this.entity = ent.data;
                console.log(ent);
            } catch (ex) {
                this.$bvToast.toast(ex.response, {
                    title: `Errors:`,
                    variant: "danger",
                    solid: true,
                });
            } finally {
                console.log("Finally")
            }
        },
        loadMorePosts() {
            console.log("try", this.entity.posts.next_page_url);
            if (!this.entity.posts.next_page_url) {
                return Promise.resolve();
            }
            //console.log("Getting");
            return axios
                .get(this.entity.posts.next_page_url)
                .then((response) => {
                    //console.log(response);
                    //
                    this.entity.posts = {
                        ...response.data.posts,
                        data: [
                            ...this.entity.posts.data,
                            ...response.data.posts.data,
                        ],
                    };
                    //
                });
        },
        addPost(post) {
            //console.log(post);
            this.entity.posts.data.unshift(post);
        },
        async destroyPost(id) {
            this.$bvModal
                .msgBoxConfirm("Are you sure?", {
                    title: "Please Confirm",
                    size: "sm",
                    buttonSize: "sm",
                    okVariant: "danger",
                    okTitle: "YES",
                    cancelTitle: "NO",
                    footerClass: "p-2",
                    hideHeaderClose: false,
                    centered: true,
                })
                .then(async (value) => {
                    if (value) {
                        try {
                            const req = await this.$store.dispatch(
                                "deletePost",
                                id
                            );
                            //console.log(req);
                            if (req.status == 200) {
                                this.entity.posts.data =
                                    this.entity.posts.data.filter(
                                        (entity) => entity.id != id
                                    );
                            }
                        } catch (error) {
                            console.log(error);
                        }
                    }
                })
                .catch((err) => {
                    // An error occurred
                });
        },
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
                formData.append("entity_id", this.entity.id);
                //console.log(this.entity.id)
                
                const response = await this.$store.dispatch(
                    "storeEntityProfilePic",
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
};
</script>
<style>
/* your passed-in element */
.enlargeable-image > .slot {
    display: inline-block;
    /*max-width: 100%;*/
    width: 100%;
    max-height: 100%;
    cursor: zoom-in;
}
/* default img if no element passed in */
.enlargeable-image > .slot > img.default {
    /*max-width: 100%;*/
    width: 100%;
    vertical-align: middle;
}
/* passed-in element when growth is happening */
.enlargeable-image.active > .slot {
    opacity: 0.3;
    filter: grayscale(100%);
}
/* full version that grows (background image allows seamless transition from thumbnail to full) */
.enlargeable-image .full {
    cursor: zoom-out;
    background-color: transparent;
    align-items: center;
    justify-content: center;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
    display: none;
}
.enlargeable-image .full > img {
    object-fit: contain;
    width: 100%;
    height: 100%;
}
/* full version while getting bigger */
.enlargeable-image .full.enlarging {
    display: flex;
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    background-color: transparent;
    cursor: zoom-out;
    z-index: 3;
}
/* full version while at its peak size */
.enlargeable-image .full.enlarged {
    display: flex;
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    background-color: transparent;
    cursor: zoom-out;
    z-index: 2;
}
/* full version while getting smaller */
.enlargeable-image .full.delarging {
    display: flex;
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    background-color: transparent;
    cursor: zoom-in;
    z-index: 1;
}

/*Profile Pic Start*/
.picture-container {
    position: relative;
    cursor: pointer;
    text-align: center;
}
.picture {
    /*width: 106px;*/
    /*height: 106px;*/
    background-color: #999999;
    border: 4px solid #cccccc;
    color: #ffffff;
    /*border-radius: 50%;*/
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