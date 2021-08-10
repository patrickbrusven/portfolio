<template lang="html">
  <div class="projectContainer">
    <picture>
      <img class="background" :src="require(`@/assets/${ bgfilename }`)">
    </picture>
    <div class="content invisible">
      <h3>{{ title }} </h3>
      <p>{{ description }}</p>
      <div class="buttons">
        <a :href="`${ websiteLink }`" target="_blank" rel="noopener noreferrer">
          Website
        </a>
        <a :href="`${ ghLink }`" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </div>
    </div>
    <img class="logo" :src="require(`@/assets/${ logofilename }`)">
  </div>
</template>

<script>
export default {
  name: 'Project',
  props: {
    title: String,
    bgfilename: String,
    logofilename: String,
    description: String,
    websiteLink: String,
    ghLink: String,
  }
}
</script>

<style lang="css" scoped>
.projectContainer {
  color: var(--fillLighter);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 80vw;
  max-width: 430px;
  height: 40vh;
  max-height: 233px;
  margin: 10px;

  border-radius: 30px;

  overflow: hidden;
}

.background {
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 30px;
  filter: brightness(70%);
  opacity: 1;

  transition: opacity .3s linear;
}

.logo {
  position: absolute;
  height: 60%;
  border-radius: 10px;
  opacity: .9;
  transition: height .2s linear, opacity .3s linear;
}

.content {
  background-color: var(--fillDarker);

  width: 100%;
  height: 100%;
  border-radius: 30px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.buttons {
  display: flex;
}

a {
  text-decoration: none;
  color: var(--fillLighter);
  cursor: pointer;
  margin: 10px;
  padding: 10px;
  border: solid 2px var(--fillLighter);
  z-index: 1;
}

.invisible {
  display: none;
  transition: display .3s linear .2s;
}

.projectContainer:hover > .logo {
  height: 100%;
  opacity: 0;
}
.projectContainer:hover > picture > .background {
  opacity: 0;
  /* filter: brightness(90%); */
}
.projectContainer:hover > .invisible {
  display: flex;
  /* filter: brightness(90%); */
}

</style>
