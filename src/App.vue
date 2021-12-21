<template>
  <div class="container">
    <div class="nav">
      <div>
        <img src="/images/svg/logo.svg" alt="logo" />
      </div>
      <div class="nav_icons">
        <a href="#"><img src="/images/svg/twitter.svg" alt="twitter" /></a>
        <a href="#"><img src="/images/svg/dribbble.svg" alt="dribble" /></a>
        <a href="#"><img src="/images/svg/figma.svg" alt="figma" /></a>
        <a href="#"><img src="/images/svg/github.svg" alt="github" /></a>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
