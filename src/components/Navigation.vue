<template lang="html">
<div class="header">
  <h1 class="navLogo">Patrick Brusven</h1>
  <MobileBurger @click='toggleNavigation' class="mobileBurger" />
  <div id="nav" class="navContainer">
    <!-- <router-link to="/">Home</router-link> | -->
    <router-link to="/about">About</router-link>
    <router-link to="/about">Projects</router-link>
    <router-link to="/about">Contact</router-link>
  </div>
</div>
</template>


<script>
import MobileBurger from '@/components/MobileBurger.vue'
export default {
  name: 'Navigation',

  components: {
    MobileBurger,
  },
  methods: {
    toggleNavigation() {
      // const header = document.querySelector(
      //   '.header'
      // )
      const navContainer = document.querySelector(
        '.navContainer'
      )
      // const navLogo = document.querySelector(
      //   '.navLogo'
      // )


      // header.classList.toggle('headerOpen');

      // navLogo.classList.toggle('navLogoOpen');

      // navContainer.classList.toggle('firstOpen');
      navContainer.classList.toggle('openDrawer');

    }
  }
}
</script>

<style lang="css" scoped>
.header {
  background-color: var(--fillDarker);
  position: fixed;
  height: 50px;
  width: 100vw;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  z-index: 2;

  transition: background-color .1s linear .4s;
}

/* .headerOpen {
  background-color: var(--fillDarker);
} */

.navContainer {
  position: absolute;
  width: 73vw;
  z-index: -10;
  display: flex;
  flex-direction: column;
  top: 50px;
  right: -73vw;

  background-color: var(--fillDarker);

  transition: right .1s linear .5s;
}

.navContainer a {
  text-decoration: none;
  color: var(--fillLighter);
  font-size: x-large;
  cursor: pointer;
  margin: 10px;
}


.openDrawer {
  right: 0px;
}

.navLogo {
  margin-left: 5px;
    transition: color .1s linear .4s;
}

.navLogoOpen {
  /* color: var(--fillMedium); */

}

@media screen and (min-width: 768px) {
  .mobileBurger {
    display: none;
  }
}

</style>
