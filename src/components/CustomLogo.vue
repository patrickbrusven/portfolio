<template lang="html">
  <div class="container">
    <h1 class="p">P</h1>
    <h1 class="b">B</h1>
  </div>
</template>

<script>
export default {
  name: 'CustomLogo'
}
</script>

<style lang="css" scoped>

/* .container {
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  width: 75px;
  height: 75px;
}

h1 {
  font-size: 18px;
  font-weight: bold;
  display: inline-block;
}

.p {
  grid-column: 1/2;
  grid-row: 1/3;
}

.b {
  grid-column: 2/4;
  grid-row: 2/4;
} */


.container {
  position: relative;
}

h1 {
  font-size: 32px;
  font-weight: bold;
  display: inline-block;
}

.p {
  position: relative;
  top: -6px;
}

.b {
  position: relative;
  bottom: -9px;
  right: 11px;
}

</style>
