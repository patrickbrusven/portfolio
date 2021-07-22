<template>
  <LandingPage />
  <ExperiencePage />
  <ContactPage />
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
  }
}
</script>
