<template>
  <div>
    <div class="loader" v-if="loading">
      <img src="/images/gif/loader.gif" alt="loader" />
    </div>
    <div v-else>
      <div class="blogs with-first">
        <div class="blog" v-for="(blog, i) of posts" :key="i">
          <Blog :blog="blog"></Blog>
        </div>
      </div>
      <div class="footer">
        <p class="footer_title">Join our Team of Writers</p>
        <p class="footer_text">
          On dasdas, writers earn a living doing what they love. Getting started
          is easy. Just pay a one time $25 fee and everything is ready to go.
        </p>
        <button class="footer_btn">Join Us</button>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import BlogService from "../core/services/blog";
import Blog from "../components/blog";

export default {
  name: "Home",
  mixins: [BlogService],
  data() {
    return {
      loading: false,
      posts: [],
    };
  },
  components: {
    Blog,
  },
  mounted() {
    this.getPosts();
  },
  methods: {
    getPosts() {
      this.loading = true;
      this.BlogService.getBlogPosts()
        .then((res) => {
          this.posts = res.data;
          this.$store.commit("UPDATE_BLOGPOSTS", this.posts);

          this.loading = false;
        })
        .catch(() => {
          this.loading = false;
          this.$swal({
            position: "top-end",
            type: "warining",
            text: "An error occured, please refresh.",
            showConfirmButton: false,
            timer: 5000,
          });
        });
    },
  },
};
</script>
