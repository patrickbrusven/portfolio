<template lang="html">
  <div class="experienceContainer">
    <div class="heading">
      <h1>Portfolio</h1>
      <p>Below you will find some of my latest work</P>
    </div>
    <Project title="Menu Builder App"
            bgfilename="drinkMED.jpg"
            logofilename="logo0.png"
            description="Full-stack Development, MEVN"
            websiteLink="https://menubuilder.onrender.com/"
            ghLink="https://github.com/patrickbrusven/menu-builder"
            />
    <Project title="408 EXCHANGE TAVERN"
            bgfilename="logoOnBrickSmall.jpg"
            logofilename="408LogoDarkBG.svg"
            description="Front-end Web Development, Designer"
            websiteLink="http://408exchange.com/"
            ghLink="https://github.com/patrickbrusven/"
            />

    <Project title="Portfolio Website"
            bgfilename="lpBackgroundSM.jpg"
            logofilename="PB.png"
            description="Front-end Development"
            websiteLink="https://www.patrickbrusven.com/"
            ghLink="https://github.com/patrickbrusven/portfolio"
            />
  </div>

</template>

<script>
import Project from "@/components/Project.vue";

export default {
  name: "ExperiencePage",

  components: {
    Project,
  },
};
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
  /* background-color: var(--fillLighter); */
}

.heading {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 106px;

  width: 80%;
  max-width: 430px;
}
</style>
