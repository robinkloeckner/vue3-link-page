<!----------------------
        Script
----------------------->
<script setup>
  import TheThemeToggler from "./TheThemeToggler.vue";
  import TheLocaleToggler from "./TheLocaleToggler.vue";
</script>

<!----------------------
        Template
----------------------->
<template>
  <div class="wrapper-controller">
    <div class="container-xxl">
      <div class="row justify-content-end align-items-center">
        <TheThemeToggler class="col-auto" />
        <TheLocaleToggler class="col-auto" />
      </div>
    </div>
  </div>
</template>

<!----------------------
        Styles
----------------------->
<style lang="scss" scoped>
  .wrapper-controller {
    background-color: var(--background-alternative-2);
  }
</style>