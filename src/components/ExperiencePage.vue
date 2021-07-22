<template lang="html">
  <div class="experienceContainer">
    <h3>Experience</h3>
    <Project title="408 EXCHANGE TAVERN"
            bgfilename="logoOnBrickSmall.jpg"
            logofilename="408LogoDarkBG.svg"
            description="Front-end Web Development, Designer"
            websiteLink="https://www.408exchange.com/"
            ghLink="https://github.com/patrickbrusven/"
            />
    <Project title="Menu Builder App"
            bgfilename="drinkMED.jpg"
            logofilename="logo0.png"
            description="Full-stack Development, MEVN"
            websiteLink="https://thawing-fortress-58484.herokuapp.com/"
            ghLink="https://github.com/patrickbrusven/menu-builder"
            />
  </div>

</template>

<script>
import Project from '@/components/Project.vue'

export default {
  name: 'ExperiencePage',

  components: {
    Project,
  }
}
</script>

<style lang="css" scoped>
/* h3 {
  margin: 5px;
} */
.experienceContainer {
  display: flex;
  flex-direction: column;

  align-items: center;
  /* justify-content: center; */

  /* padding-top: 10px; */
  min-height: 90vh;
  background-color: var(--fillLighter);
}
</style>
