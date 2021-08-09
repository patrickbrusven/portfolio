<template lang="html">
  <div  @click='onClick()' class="navToggle">
    <div class="navBurger transitionControllerClose">
      <div class="line1"></div>
      <div class="line2"></div>
      <div class="line3"></div>
    </div>
    <div class="navX transitionCTRClose">
      <div class="x1"></div>
      <div class="x2"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MobileBurger',


  methods: {
    onClick() {
      this.$emit('toggleNavigation');
    }
  },
}
</script>

<style lang="css" scoped>

.navToggle {
  height: 50px;
  width: 50px;
  cursor: pointer;

  position: sticky;
  top: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;
}

.navBurger div {
  width: 27px;
  height: 4px;
  background-color: var(--fillDarker);
  margin: 5px;
  border-radius: 3px;
}

.transitionControllerOpen div {
  transition: transform .1s linear, opacity linear .2s;
}

.transitionControllerClose div {
  transition: transform .1s linear .4s, opacity linear .3s;
}

.toggleOpacity .line1 {
  opacity: 0;
}
.toggleOpacity .line2 {
  opacity: 0;
}
.toggleOpacity .line3 {
  opacity: 0;
}

.toggleSlide .line1 {
  transform: translate(0px,8px);
}

.toggleSlide .line3 {
  transform: translate(0px,-9px);
}

.navX {
  position: absolute;
  width: 51%;
}

.navX div {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  opacity: 0;

  width: 27px;
  height: 4px;
  background-color: var(--fillDarker);
  border-radius: 3px;
}

.transitionCTROpen div {
  /* transition: transform .2s ease-in .5s, opacity ease-in .4s; */
  transition: transform .1s linear .4s, opacity linear .3s;
}

.transitionCTRClose div {
  /* transition: transform .2s ease-in, opacity ease-in .3s; */
  transition: transform .1s linear, opacity linear .2s;
}

.toggOpacity .x1 {
  opacity: 1;
}

.toggOpacity .x2 {
  opacity: 1;
}

.toggleRotate .x1 {
  transform: rotate(-45deg);
}
.toggleRotate .x2 {
  transform: rotate(45deg);
}
</style>
