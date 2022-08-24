<!----------------------
        Script
----------------------->
<script setup>
  import {defineAsyncComponent, shallowRef, watch} from "vue";
  import {RouterView, useRoute} from "vue-router";
  import TheAppController from "@/components/TheAppController.vue";

  const route = useRoute();
  const currentLayout = shallowRef(null);

  watch(
    () => route.meta.layout,
    async (layout) => {
      currentLayout.value = await defineAsyncComponent(() =>
        import(`./layouts/${layout}.vue`)
      );
    }
  );
</script>

<!----------------------
        Template
----------------------->
<template>
  <TheAppController />

  <!-- Wrap the view with the layout defined in the router config. -->
  <component :is="currentLayout">
    <RouterView />
  </component>
</template>

<!----------------------
        Styles
----------------------->
<style lang="scss">
  @import "@/assets/scss/main.scss";

  /*
   * Define layout and assign color to elements that ONLY apply to the Vue app.
   */
  .wrapper-layout {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  nav,
  header,
  footer {
    flex-shrink: 0;
  }

  main {
    flex: 1 0 auto;
  }

  .container-sm {
    max-width: 540px;
  }
</style>
