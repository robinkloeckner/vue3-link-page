<!----------------------
        Script
----------------------->
<script setup>
  import {useI18n} from "vue-i18n";

  const {t} = useI18n();

  const props = defineProps({
    "h1Message": {
      type: String,
      required: true
    },
    "contentMessage": {
      type: String,
      required: true
    },
    "data": {
      type: Object,
      required: true
    }
  });
</script>

<!----------------------
        Template
----------------------->
<template>
  <section class="container-fluid wrapper-content-text">
    <div class="row justify-content-center">
      <h1 class="col-12 cold-xl-6 text-center">
        {{ t(props.h1Message) }}
      </h1>
      <div
        class="col-12 col-xl-6"
        v-html="t(props.contentMessage, props.data)"
      />
    </div>
  </section>
</template>

<!----------------------
        Styles
----------------------->
<style lang="scss">
  .wrapper-content-text {
    padding: $section-padding-x;
    color: var(--font-default);

    h1 {
      font-size: 4rem;
      padding-bottom: 1em;
      color: var(--title-alternative);
    }

    h2 {
      margin-top: 1.4em;
      color: var(--title-default);
    }

    h3, h4, h5 {
      color: var(--title-default);
    }

    a {
      hyphens: auto;
      word-break: break-word;
    }
  }
</style>