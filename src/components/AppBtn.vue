<!----------------------
        Script
----------------------->
<script setup>
  const props = defineProps({
    type: {
      type: String,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    }
  });

  const emits = defineEmits(["onClick"]);
</script>

<!----------------------
        Template
----------------------->
<template>
  <button
    :disabled="props.disabled"
    :type="props.type"
    class="btn btn-primary btn-lg"
    @click.prevent="emits('onClick')"
  >
    <slot />
  </button>
</template>

<!----------------------
        Styles
----------------------->
<style lang="scss" scoped>
  .btn-primary {
    color: var(--btn-primary-font-color);

    &:hover,
    &:focus,
    &:active {
      background-color: transparent;
      color: var(--primary);
    }
  }

  .btn-lg {
    padding: .75rem 2.25rem;
    border-radius: 4px;
    font-size: 1.5rem;
  }
</style>