<!----------------------
        Script
----------------------->
<script setup>
  import AppLink from "./AppLink.vue";
</script>

<!----------------------
        Template
----------------------->
<template>
  <nav>
    <AppLink url="/">
      {{ $t('btnHome') }}
    </AppLink>
    |
    <AppLink url="/legal">
      {{ $t('btnLegal') }}
    </AppLink>
    |
    <AppLink url="/privacy">
      {{ $t('btnPrivacy') }}
    </AppLink>
  </nav>
</template>

<!----------------------
        Styles
----------------------->
<style lang="scss" scoped>

</style>