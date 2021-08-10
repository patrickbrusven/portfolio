<template lang="html">
  <div class="aboutMe">
    <h1>About Me</h1>
    <p>When I'm not coding, you can find me exploring the pacific northwest. I love to surf and ski.</p>
    <p>See my latest <router-link to="/#projects">works</router-link>.</p>
  </div>

</template>

<script>

export default {
  name: 'AboutPage'
}
</script>

<style lang="css" scoped>

.aboutMe {
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50vh;
  width: 80%;
  max-width: 400px;
}
</style>
