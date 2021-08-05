<template>
  <LandingPage class="section" />
  <ExperiencePage class="section" id="projects" />
  <ContactPage class="section" id="contact"/>
</template>

<script>
import LandingPage from '@/components/LandingPage.vue'
import ExperiencePage from '@/components/ExperiencePage.vue'
import ContactPage from '@/components/ContactPage.vue'

export default {
  name: 'Home',
  components: {
    LandingPage,
    ExperiencePage,
    ContactPage,
  },

  data() {
    return {
      sections: null
    };
  },

  // created() {
  //   this.sections = document.querySelectorAll(".section");
  //   this.sectionObserverd();
  // },

  methods: {
    sectionObserverd() {

      const options = {
        root: null,
        threshold: 0,
        rootMargin: "-50px",
      }

      const observer = new IntersectionObserver(function (entries) {
        entries.forEach( entry => {
          console.log(entry);
        })
      }, options)

      this.sections.forEach(section => {
        observer.observe(section)
      })
    }
  },

  mounted() {
    this.sections = document.querySelectorAll(".section");
    this.sectionObserverd();
  }
}
</script>
