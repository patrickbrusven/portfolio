<template>
  <div class="about">
    <h1>This is a Project Section</h1>
    <Project title="408 EXCHANGE TAVERN"
            filename="logo.png"
            description="Front-end Web Development, Designer"/>
    <Project title="Menu Builder App"
            filename="logo.png"
            description="Full-stack Development, MEVN"/>
  </div>
</template>

<script>
import Project from '@/components/Project.vue'

export default {
  components: {
    Project,
  }
}
</script>
