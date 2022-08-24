<!----------------------
        Script
----------------------->
<script setup>
  import TheFooter from "@/components/TheFooter.vue";
  import TheNavigationLight from "../components/TheNavigationLight.vue";
</script>

<!----------------------
        Template
----------------------->
<template>
  <!-- Navigation to the homepage. -->
  <TheNavigationLight />

  <!-- Main content from the view. -->
  <main v-bind="$attrs">
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