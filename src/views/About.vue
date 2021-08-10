<template>
  <div class="about">
    <AboutPage />
    <ContactPage class="section" />
    <Footer />
  </div>
</template>

<script>
import AboutPage from '@/components/AboutPage.vue'
import ContactPage from '@/components/ContactPage.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'About',

  components: {
    AboutPage,
    ContactPage,
    Footer,
  }
}
</script>

<style lang="css" scoped>
.about {
  min-height: 100vh;
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
}
</style>
