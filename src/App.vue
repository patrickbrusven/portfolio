<template>
  <div class="appConatiner">
    <Navigation />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Navigation,
    Footer,
  },
}
</script>

<style>
:root {
  /* --offWhite: #006d77; */
  --fillDarker: #006d77;
  /* --textDark: #edf6f9; */
  --fillLighter: #edf6f9;
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
  background-color: var(--fillDarker);
  color: var(--fillLighter);
}

.appConatiner {
  position: relative;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
