<template lang="html">
  <div id="top" class="landingPageConatiner">
    <div class="middle">
      <transition name="logo" appear>
        <h1 class="topLine">Hi,</h1>
      </transition>
      <transition name="logo" appear>
        <div class="middleLine">
          <h2>my name is</h2>
          <h1 class="leftSpace">Patrick Brusven.</h1>
        </div>
      </transition>
      <transition name="logo" appear>
        <h3 class="bottomLine">I’m a Software Developer currently located in Port Angeles Washington.</h3>
      </transition>
    </div>
    <div class="bottom">
      <p>continue to <router-link to="/#projects">portfolio</router-link> ||
      more <router-link to="/about">about</router-link> me</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LandingPage',
}
</script>

<style lang="css" scoped>
a {
  color: #b290ff;
}
.landingPageConatiner {
  /* background-color: var(--fillDarker); */
  color: var(--fillDarker);
  height: 100vh;
  width: 100vw;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 2fr 1fr;
}

.middle {
  grid-column: 1/4;
  grid-row: 2/3;
  justify-self: center;
  align-self: center;
  width: 80%;
  max-width: 430px;
}

.topLine {

}

.middleLine {
  display: flex;
  align-items: baseline;
}

.leftSpace {
  margin-left: 10px;
}

.bottomLine {
  margin-top: 15px;
}

.bottom {
  grid-column: 1/4;
  grid-row: 3/4;
  justify-self: center;
  align-self: center;
}
/* transition styleling */

.logo-enter-from {
  opacity: 0;
}

.logo-enter-to {
  opacity: 1;
}

.logo-enter-active {
  transition: opacity 0.4s ease .3s;
}

</style>
