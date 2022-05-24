<template>
    <div class="">
        <div class="flex p-4 bg-light">
            <b-overlay
                :show="loading"
                spinner-variant="primary"
                spinner-type="grow"
                spinner-small
                rounded="sm"
            >
                <form
                    @submit.prevent="submit()"
                    class="flex-1 ml-4"
                    enctype="multipart/form-data"
                >
                    <textarea
                        ref="text-area"
                        @input="resizeTextarea"
                        v-model="form.content"
                        name="content"
                        id=""
                        rows="2"
                        class="border-0 p-2 rounded"
                        placeholder="Whats up?"
                        label="Post content"
                    ></textarea>
                    <p class="text-danger" v-text="errors.content"></p>
                    <div
                        v-if="form.media.length"
                        class="grid gap-2"
                        :class="{ 'grid-cols-2': media.length > 1 }"
                    >
                        <div
                            v-for="(m, index) in media"
                            :key="index"
                            class="
                                relative
                                flex flex-col
                                items-center
                                justify-center
                            "
                        >
                            <button
                                type="button"
                                @click="removeMedia(index)"
                                class="
                                    m-1
                                    absolute
                                    top-0
                                    p-2
                                    left-0
                                    text-white
                                    bg-black bg-opacity-75
                                    rounded-full
                                    cursor-pointer
                                    hover:bg-opacity-100
                                "
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    class="bi bi-trash3"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"
                                    />
                                </svg>
                            </button>
                            <img
                                :src="m"
                                alt=""
                                width="100%"
                                class="rounded-xl object-cover h-48 w-full"
                            />
                        </div>
                    </div>

                    <div class="">
                        <FileInput @filesdAdded="addFiles" class=""></FileInput>
                        <div class="">
                            <div
                                :class="
                                    remainingChars < 0
                                        ? 'text-danger'
                                        : 'text-muted'
                                "
                            >
                                {{ remainingChars }}
                            </div>

                            <button
                                :disabled="!canSubmit"
                                type="submit"
                                class=""
                            >
                                Post
                            </button>
                        </div>
                    </div>
                </form>
            </b-overlay>
        </div>
    </div>
</template>

<script>
//import Treeselect from "@riophae/vue-treeselect";
//import LocationPartialForm from "./LocationPartialForm.vue";
import FileInput from "./FileInput";
export default {
    name: "PostCreateForm",
    props: ["entity"],
    components: {
        FileInput,
        //LocationPartialForm,
    },
    data() {
        return {
            loading: false,
            errors: {},
            form: {
                entity_id: this.entity.id,
                content: "",
                media: [],
            },
            media: [],
        };
    },
    computed: {
        remainingChars() {
            return 270 - this.form.content.length;
        },
        canSubmit() {
            return this.form.content.length && this.remainingChars >= 0;
        },
    },
    watch: {},
    methods: {
        addFiles(files) {
            console.log(files);

            Array.from(files).forEach((media) => {
                this.form.media.push(media);
                let reader = new FileReader();
                reader.readAsDataURL(media);
                reader.onload = (e) => {
                    this.media.push(e.target.result);
                };
            });
        },
        async submit() {
            //console.log(this.form.content);
            let formData = new FormData();
            formData.append("entity_id", this.form.entity_id);
            formData.append("content", this.form.content);
            Array.from(this.form.media).forEach((media) => {
                formData.append("media[]", media);
            });
            this.loading = true;
            const post = await axios
                .post("api/posts", formData)
                .then((response) => {
                    console.log(response);
                    //
                    this.$emit("postSubmitted", response.data);
                    this.errors = {};
                    //
                })
                .then(() => {
                    this.form.content = "";
                    this.form.media = [];
                    this.media = [];
                    this.$refs["text-area"].style.height = "initial";
                })
                .catch((ex) => {
                    this.errors = ex.response.data.errors;
                })
                .finally(() => (this.loading = false));
        },
        removeMedia(index) {
            this.form.media.splice(index, 1);
            this.media.splice(index, 1);
        },
        resizeTextarea() {
            const textarea = this.$refs["text-area"];
            textarea.style.height = "initial";
            textarea.style.height = `${textarea.scrollHeight}px`;
        },
    },
    mounted() {},
};
</script>
<style scoped>
button:disabled {
    opacity: 75%;
    cursor: not-allowed;
}
textarea {
    border: none;
    background-color: transparent;
    resize: none;
    outline: none;
    width: 100% !important;
}
</style>
