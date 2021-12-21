<template>
  <div class="card">
    <img
      :src="
        blog.jetpack_featured_media_url
          ? blog.jetpack_featured_media_url
          : '/images/png/default-img.png'
      "
      alt="default"
      class="card_img"
    />
    <div class="card_body">
      <div class="card_body_tag">
        {{ blog.type }} . {{ $moment(blog.date).fromNow() }}
      </div>
      <div class="card_body_title">
        {{ blog.title.rendered.slice(0, 40) || "-" }}...
      </div>
      <div
        class="card_body_text"
        v-html="blog.content.rendered.slice(0, 200)"
      ></div>
      <div class="card_body_bottom">
        <div class="">8 min read</div>
        <a class="card_body_bottom_readFull" @click="selectPost(blog)">
          Read Full
          <img src="/images/svg/arrow.svg" alt="arrow right" />
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["blog"],
  methods: {
    selectPost(post) {
      const routeName = this.$route.name;
      console.log(routeName);
      if (routeName == "Blog") {
        this.$emit("selectedPostid", post.id);
      } else {
        this.$store.commit("SELECT_POST", post);
        this.$router.push({ name: "Blog", params: { id: post.id } });
      }
    },
  },
};
</script>
<style lang="scss" scoped></style>
