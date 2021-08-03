<template lang="html">
  <div class="landingPageConatiner">
    <div class="imageContainer">
    </div>
    <h2 class="callOut">Hello, I'm Patrick.</h2>
    <h3 class="oneLiner">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>
    <div class="bottom">
      <p>check out my blog ||
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
  background-color: var(--fillLighter);
  color: var(--fillDarker);
  height: 100vh;
  width: 100vw;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 50px 1fr 1fr 1fr 1fr 1fr 1fr;

}

.callOut {
  grid-column: 1/4;
  grid-row: 4/6;
  align-self: center;
  z-index: 40;
  text-align: left;
  /* justify-self: center; */
  font-size: 32px;
}


.oneLiner {
  grid-column: 1/5;
  grid-row: 6/8;
}

.imageContainer {
  grid-column: 2/5;
  margin: 10px;
  grid-row: 2/4;
  justify-self: flex-end;
  width: 45vw;
  height: 45vw;
  border-radius: 45vw;
  background-color: var(--fillLight);
}

.bottom {
  grid-row: 7/8;
  grid-column: 1/5;
}
</style>
