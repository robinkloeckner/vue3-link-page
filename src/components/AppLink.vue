<!----------------------
        Script
----------------------->
<script setup>
  import {computed} from "vue";

  const props = defineProps({
    url: {
      type: String,
      required: true
    },
    target: {
      type: String,
      required: false,
      default: "/"
    }
  });

  // If link starts with 'http' or 'mailto', return true.
  const isExternal = computed(() => {
    return typeof props.url === "string" &&
      (props.url.startsWith("http") || props.url.startsWith("mailto"));
  });
</script>

<!----------------------
        Template
----------------------->
<template>
  <a
    v-if="isExternal"
    :href="props.url"
    :target="props.target"
  >
    <slot />
  </a>
  <RouterLink
    v-else
    :to="props.url"
    active-class="active"
  >
    <slot />
  </RouterLink>
</template>

<!----------------------
        Styles
----------------------->
<style lang="scss">
  a {
    color: var(--link-default);
    text-decoration: none;
  }

  .active {
    color: var(--link-hover-default);
  }
</style>