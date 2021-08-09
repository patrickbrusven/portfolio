<template lang="html">
<transition name="header" appear>
<div class="header">
  <router-link to="/#top">
    <transition name="logo" appear>
      <h1 @click='clickName()' class="navLogo">PB</h1>
    </transition>
  </router-link>
  <transition name="logo" appear>
    <MobileBurger @toggleNavigation='toggleNavigation'  class="mobileBurger" />
  </transition>
  <div id="nav" class="navContainer">
    <router-link @click='toggleNavigation' to="/about">About</router-link>
    <router-link @click='toggleNavigation' to="/#projects">Projects</router-link>
    <router-link @click='toggleNavigation' to="/#contact">Contact</router-link>
  </div>
</div>
</transition>
</template>


<script>
import MobileBurger from '@/components/MobileBurger.vue'
export default {
  name: 'Navigation',

  components: {
    MobileBurger,
  },

  data() {
    return {
      navOpen: false,
    }
  },

  methods: {
    toggleNavigation() {
      this.navOpen = !this.navOpen;
      const navContainer = document.querySelector(
        '.navContainer'
      )
      navContainer.classList.toggle('openDrawer');

      //navController()
      const burger = document.querySelector('.navBurger');
      const navX = document.querySelector('.navX');

      burger.classList.toggle('transitionControllerClose');
      navX.classList.toggle('transitionCTRClose');

      burger.classList.toggle('transitionControllerOpen');
      navX.classList.toggle('transitionCTROpen');


      burger.classList.toggle('toggleSlide');
      burger.classList.toggle('toggleOpacity');

      navX.classList.toggle('toggOpacity');
      navX.classList.toggle('toggleRotate');
    },

    clickName() {
      if (this.navOpen) {
        this.toggleNavigation();
      }
    },
  },
}
</script>

<style lang="css" scoped>

a {
  text-decoration: none;
  color: var(--fillDarker);
}

.header {
  /* background-color: var(--fillDarker); */
  position: sticky;
  margin-top: -58px;
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


.logo-enter-from {
  opacity: 0;
}

.logo-enter-to {
  opacity: 1;
}

.logo-enter-active {
  transition: opacity 0.4s ease .4s;
}

.header-enter-from {
  opacity: 0;
}

.header-enter-to {
  opacity: 1;
}

.header-enter-active {
  transition: opacity 0.4s ease;
}
</style>
