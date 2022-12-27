<!----------------------
        Script
----------------------->
<script setup>
  import TheNavigation from "./TheNavigation.vue";

</script>

<!----------------------
        Template
----------------------->
<template>
  <footer>
    <TheNavigation />
    <i18n-t
      keypath="footer.madeWith"
      scope="global"
      tag="p"
    >
      <template #vue>
        <a
          href="https://vuejs.org/"
          target="_blank"
        >Vue 3</a>
      </template>
      <template #vite>
        <a
          href="https://vitejs.dev/"
          target="_blank"
        >Vite</a>
      </template>
      <template #emoji>
        &#10084;&#65039;
      </template>
    </i18n-t>
    <i18n-t
      keypath="footer.download"
      scope="global"
      tag="p"
    >
      <template #github>
        <a
          href="https://github.com/robinkloeckner/vue3-link-page/"
          target="_blank"
        >GitHub</a>
      </template>
    </i18n-t>
  </footer>
</template>

<!----------------------
        Styles
----------------------->
<style lang="scss">
  footer {
    padding-top: calc(#{$section-padding-y} / 2);
    padding-bottom: calc(#{$section-padding-y} / 2);
    background-color: var(--background-alternative-2);

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