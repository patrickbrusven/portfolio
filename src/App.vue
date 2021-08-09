<template>
  <!-- <Navigation /> -->
  <div class="parralaxContainer">
      <Navigation />
      <router-view/>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
// import Footer from '@/components/Footer.vue'

export default {
  components: {
    Navigation,
    // Footer,
  },
}
</script>

<style>
:root {

  /* --fillDarker: #006d77; */
  --fillDarker: #edf6f9;

  /* --fillLighter: #edf6f9; */
  --fillLighter: #006d77;
  --fillLight: #83c5be;
  --fillMedium: #7fb6bb;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  pointer: cursor;
}

body {
  margin: 0;
  /* height: 100vh; */
  /* background-color: var(--fillLighter); */
    background-image: linear-gradient(to bottom, #181818, #181818);
  /* background-image: linear-gradient(to bottom right, red, yellow); */
  /* background-color: #030f0a; */
  color: var(--fillLighter);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}


.parralaxContainer {
  position: relative;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-perspective: 300px;
  perspective: 300px;
}

</style>
