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
      {{ t('btn.home') }}
    </AppLink>
    |
    <AppLink url="/legal">
      {{ t('btn.legal') }}
    </AppLink>
    |
    <AppLink url="/privacy">
      {{ t('btn.privacy') }}
    </AppLink>
  </nav>
</template>

<!----------------------
        Styles
----------------------->
<style lang="scss" scoped>

</style>