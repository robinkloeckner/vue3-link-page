<!----------------------
        Script
----------------------->
<script setup>
  import AppLink from "./AppLink.vue";
  import {computed} from "vue";
  import {defineAsyncComponent} from "vue";
  import {useI18n} from "vue-i18n";

  const props = defineProps({
    name: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: false,
      default: undefined
    },
    img: {
      type: String,
      required: false,
      default: undefined
    },
    textOnly: {
      type: Boolean,
      required: false,
      default: false
    }
  });

  const {t} = useI18n();

  const hasIcon = computed(() => {
    return props.textOnly === false && props.icon !== undefined;
  });

  const hasImage = computed(() => {
    return props.textOnly === false && props.img !== undefined;
  });
</script>

<!----------------------
        Template
----------------------->
<template>
  <AppLink :url="props.url">
    <div class="card shadow">
      <img
        v-if="hasImage"
        :alt="'Image ' + props.img"
        :src="props.img"
        class="card-img-top"
      >
      <component
        :is="defineAsyncComponent(() => import(`./icons/${props.icon}.vue`))"
        v-else-if="hasIcon"
        class="card-svg-top"
      />
      <div class="card-body">
        <h2 class="card-title">
          {{ t(`links.${props.name}`) }}
        </h2>
      </div>
    </div>
  </AppLink>
</template>

<!----------------------
        Styles
----------------------->
<style lang="scss" scoped>
  .card {
    $cardBorderRadius: 1rem;
    $imgHeight: 8rem;
    border-width: 0;
    border-radius: $cardBorderRadius;
    background-color: var(--background-alternative);
    transition: transform .75s ease;

    &:hover {
      cursor: pointer;
      transform: scale(1.015);
    }

    &-img-top {
      border-radius: $cardBorderRadius $cardBorderRadius 0 0;
      object-fit: cover;
      object-position: center;
      padding-top: 0;
      margin-top: 0;
      width: auto;
      height: $imgHeight;
    }

    &-svg-top {
      height: $imgHeight;
      padding-top: 1.5rem;
      fill: var(--svg-default);
    }

    &-body {
      padding: 2rem 1.5rem 0.5rem 1.5rem;
      border-radius: 0 0 $cardBorderRadius $cardBorderRadius;
    }

    &-title {
      font-size: 2rem;
      font-weight: 400;
      margin-top: -.6rem;
      margin-bottom: 1rem;
      color: var(--title-alternative);
    }
  }
</style>