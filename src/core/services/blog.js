const BlogService = {
  data() {
    return {
      BlogService: {
        getBlogPosts: () => this.$axios.get(`posts`).then((res) => res),
      },
    };
  },
};
export default BlogService;
