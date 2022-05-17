<template>
    <div>
        <slot></slot>
        <div v-if="loading" class="p-4 text-center text-gray-600">
            Loading More...
        </div>
    </div>
</template>
<script>
//import axios from "axios";
//import { debounce } from "lodash";
export default {
    name: "InfiniteScroll",
    //emits:['loadMore'],
    props: {
        loadMore: Function,
    },
    data() {
        return {
            loading: false,
        };
    },
    mounted() {
        window.addEventListener(
            "scroll",
            _.debounce((e) => {
                let pixelsFromBottom =
                    document.documentElement.offsetHeight -
                    document.documentElement.scrollTop -
                    window.innerHeight;
                if (pixelsFromBottom < 200 && !this.loading) {
                    //console.log(this.myPostsAndFollowingPosts.next_page_url);
                    //console.log(12);
                    //this.$emit('loadMore');
                    this.loading = true;
                    this.loadMore().finally(() => (this.loading = false));
                }
            }, 100)
        );
    },
};
</script>
