<!----------------------
        Script
----------------------->
<script setup>
  import TheFooter from "@/components/TheFooter.vue";
  import TheHeader from "@/components/TheHeader.vue";
</script>

<!----------------------
        Template
----------------------->
<template>
  <!-- Header section. -->
  <TheHeader />

  <!-- Main content from the view. -->
  <main>
    <slot />
  </main>

  <!-- Footer section. -->
  <TheFooter />
</template>

<!----------------------
        Styles
----------------------->
<style lang="scss" scoped>

</style>