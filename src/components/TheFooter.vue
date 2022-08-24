<!----------------------
        Script
----------------------->
<script setup>
  import TheNavigation from "./TheNavigation.vue";

  const viteRef = "<a target='_blank' href='https://vitejs.dev/'>Vite</a>";
  const vueRef = "<a target='_blank' href='https://vuejs.org/'>Vue 3</a>";
  const githubRef = "<a target='_blank' href='https://github.com/robinkloeckner/vue3-link-page/'>GitHub</a>";
</script>

<!----------------------
        Template
----------------------->
<template>
  <footer>
    <TheNavigation />
    <p v-html="$t('contentFooter1', { vueRef: vueRef, viteRef: viteRef, emoji: '&#10084;&#65039;' })" />
    <p v-html="$t('contentFooter2', { githubRef: githubRef })" />
  </footer>
</template>

<!----------------------
        Styles
----------------------->
<style lang="scss">
  footer {
    padding-top: calc(#{$section-padding-y} / 2);
    padding-bottom: calc(#{$section-padding-y} / 2);
    background-color: var(--background-alternative);

    nav {
      text-align: center;
      margin-bottom: $section-padding-y;
      color: var(--font-default);
    }

    p {
      margin: 0;
      text-align: center;
      color: var(--font-default);
    }

    a {
      color: var(--link-default);

      &:hover,
      &:active,
      &:focus {
        color: var(--link-hover-default) !important;
      }
    }
  }
</style>