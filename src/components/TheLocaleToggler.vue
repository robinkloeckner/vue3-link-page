<!----------------------
        Script
----------------------->
<script setup>
  import {computed} from "vue";
  import {useI18n} from "vue-i18n";

  const i18n = useI18n();

  const getLabel = computed(() => {
    const alternativeLocale = i18n.availableLocales.filter(locale => locale !== i18n.locale.value);
    return alternativeLocale[0].toUpperCase();
  });

  function switchLocale() {
    const newLocale = i18n.availableLocales.filter(locale => locale !== i18n.locale.value);
    i18n.locale.value = newLocale[0];
  }
</script>

<!----------------------
        Template
----------------------->
<template>
  <button
    id="locale-toggle"
    @click="switchLocale"
  >
    {{ getLabel }}
  </button>
</template>

<!----------------------
        Styles
----------------------->
<style lang="scss" scoped>
  #locale-toggle {
    height: 4rem;
    line-height: 4rem;
    min-width: 3.5em;
    padding: 0 1em;
    font-size: 2rem;
    border: none;
    background-color: transparent;
    color: var(--primary);

    &:hover,
    &active,
    &focus {
      color: var(--primary-hover);
    }
  }
</style>