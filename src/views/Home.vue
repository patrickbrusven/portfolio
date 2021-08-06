<template>
<div class="parralax_group">
  <div class="parralax_layer parralax_layer-background">
    <transition name="fadeInBG" appear>
      <img class="backgroundImage transitionController" src="@/assets/pexels-ryan-knight-4568976.jpg" alt="ferns">
    </transition>
  </div>
  <div class="parralax_layer parralax_layer-base">
    <LandingPage class="section landingPage transitionController" />
    <ExperiencePage class="section projects disappear transitionController" id="projects" />
    <ContactPage class="section" id="contact"/>
    <Footer />
  </div>
<div/>
</div>
</template>

<script>
import LandingPage from '@/components/LandingPage.vue'
import ExperiencePage from '@/components/ExperiencePage.vue'
import ContactPage from '@/components/ContactPage.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    LandingPage,
    ExperiencePage,
    ContactPage,
    Footer,
  },

  data() {
    return {
      sections: null,
      projects: null,
    };
  },

  methods: {
    sectionObserverd() {
      const options = {
        root: null,
        threshold: 0,
        rootMargin: "-40%",
      };
      const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          console.log(entry.target)
          console.log(entry.isIntersecting)
          if(entry.target.classList.contains('experienceContainer') && entry.isIntersecting) {
            const LandingPage = document.querySelector('.landingPage');
            const backgroundImage = document.querySelector('.backgroundImage');

            entry.target.classList.toggle('disappear');
            entry.target.classList.toggle('placeholder');
            LandingPage.classList.toggle('disappear');
            backgroundImage.classList.toggle('disappear');

          }

          else if (entry.target.classList.contains('experienceContainer') && entry.target.classList.contains('placeholder') && !entry.isIntersecting) {
            console.log('notintersecting')
            const LandingPage = document.querySelector('.landingPage');
            const backgroundImage = document.querySelector('.backgroundImage');

            entry.target.classList.toggle('disappear');
            entry.target.classList.toggle('placeholder');
            LandingPage.classList.toggle('disappear');
            backgroundImage.classList.toggle('disappear');
          }

        })
      }, options)

      this.sections.forEach(section => {
        observer.observe(section)

      })
    },

  },

  mounted() {
    this.sections = document.querySelectorAll(".section");
    this.projects = document.querySelectorAll('.projects');
    this.sectionObserverd();
  }
}
</script>

<style lang="css" scoped>

.disappear {
  opacity: 0;
}

.placeholder {
  /* this just keeps track of transition state */
}

.transitionController {
  transition: opacity .4s ease;
}
/* debug parralax */
.parralax_group-One {
/* transform: translate3d(700px, 0, -800px) rotateY(30deg); */
}

.parralax_group {
  position: relative;
  min-height: 100vh;
  transform-style: preserve-3d;
}

.parralax_layer {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.parralax_layer-base {
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
}

.parralax_layer-background {
  -webkit-transform: translateZ(-300px) scale(2);
  transform: translateZ(-300px) scale(2);
}

.parralax_layer-foreground {
  -webkit-transform: translateZ(90px) scale(.7);
  transform: translateZ(90px) scale(.7);
}

.backgroundImage {
  height: 121vh;
  width: 100vw;
  object-fit: cover;
  filter: brightness(0.75);
  z-index: -2;
}

/* transition styleling */

.fadeInBG-enter-from {
  opacity: 0;
}

/* .fadeInBG-enter-to {
  opacity: 1;
} */

.fadeInBG-enter-active {
  transition: opacity 0.5s ease;
}

.scrollFade-leave-from {
  opacity: 1;
}
.scrollFade-leave-to {
  opacity: 0;
}

.scrollFade-leave-active {
  transition: opacity 0.5s ease;
}
</style>
