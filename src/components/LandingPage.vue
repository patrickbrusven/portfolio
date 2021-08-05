<template lang="html">
  <div class="landingPageConatiner">
    <transition name="fadeInBG" appear>
      <img class="backgroundImage" src="@/assets/pexels-ryan-knight-4568976.jpg" alt="ferns">
    </transition>
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
      <p>learn more about me ||
      continue to projects</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LandingPage',
}
</script>

<style lang="css" scoped>
.landingPageConatiner {
  /* background-color: var(--fillDarker); */
  color: var(--fillDarker);
  height: 100vh;
  width: 100vw;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 2fr 1fr;

  overflow: hidden;
}

.backgroundImage {
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100vh;
  width: 100vw;
  object-fit: cover;
  filter: brightness(0.75);
  z-index: -2;
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

.fadeInBG-enter-from {
  opacity: 0;
}

.fadeInBG-enter-to {
  opacity: 1;
}

.fadeInBG-enter-active {
  transition: opacity 0.5s ease;
}

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
