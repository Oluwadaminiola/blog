<template>
  <div>
    <Payment />
    <div class="post">
      <div class="post_tag">
        {{ selectedPost.type || "-" }} .
        <span class="post_tag_date">{{
          $moment(selectedPost.date).fromNow() || "-"
        }}</span>
      </div>
      <div class="post_title">
        {{ selectedPost.title.rendered ? selectedPost.title.rendered : "-" }}
      </div>
      <div
        class="post_text"
        v-if="selectedPost.content.rendered"
        v-html="selectedPost.content.rendered"
      ></div>
      <div class="post_text" v-else>-</div>
    </div>
    <div class="more">More Articles</div>
    <div class="blogs smaller-padding">
      <span v-for="(blog, i) of posts.data" :key="i">efcsdfs</span>
      <div class="blog" v-for="(blog, i) of posts.slice(0, 3)" :key="i">
        <Blog :blog="blog" @selectedPostid="selectPost"></Blog>
      </div>
    </div>
  </div>
</template>
<script>
import Payment from "../components/payment.vue";
import Blog from "../components/blog.vue";
import BlogService from "../core/services/blog";

export default {
  mixins: [BlogService],
  data() {
    return {
      posts: [],
      selectedPost: {},
      id: "",
      loading: false,
    };
  },
  components: {
    Payment,
    Blog,
  },
  mounted() {
    this.setId();
    this.getBlogPosts();
  },
  methods: {
    setId() {
      this.id = this.$route.params.id;
    },
    selectPost(postId) {
      this.selectedPost = this.posts.find((item) => item.id == postId);
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    },
    getBlogPosts() {
      this.loading = true;
      this.BlogService.getBlogPosts()
        .then((res) => {
          this.posts = res.data;
          this.selectedPost = this.posts.find((item) => item.id == this.id);
          this.loading = false;
        })
        .catch(() => {
          this.$swal({
            position: "top-end",
            type: "warining",
            text: "An error occured, please refresh.",
            showConfirmButton: false,
            timer: 5000,
          });
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
</script>
