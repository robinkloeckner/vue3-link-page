<!----------------------
        Script
----------------------->
<script setup>
  import AppLink from "./AppLink.vue";
  import {useI18n} from "vue-i18n";

  const {t} = useI18n();
</script>

<!----------------------
        Template
----------------------->
<template>
  <nav>
    <AppLink url="/">
      {{ t('btn.backHome') }}
    </AppLink>
  </nav>
</template>

<!----------------------
        Styles
----------------------->
<style lang="scss" scoped>
  nav {
    position: absolute;
    top: 1rem;
    left: 2rem;

    a {
      color: var(--link-default);

      &:hover,
      &active,
      &focus {
        color: var(--link-hover-default);
      }
    }
  }

</style>