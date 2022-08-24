<!----------------------
        Script
----------------------->
<script setup>
  import {inject, onMounted, watch} from "vue";
  import {useTheme} from "@/stores/theme";

  const ls = inject("localStorage");
  const theme = useTheme();

  // Get the stored theme.
  function getTheme() {
    return ls.getItem("theme");
  }

  // // Set a new theme.
  function setTheme(newTheme) {
    ls.setItem("theme", newTheme);
    document.documentElement.className = newTheme;
  }

  // Handler for the theme.
  watch(() => theme.theme, (selectedTheme) => {
    setTheme(selectedTheme);
  });

  onMounted(() => {
    let newTheme = null;

    // Try loading last selected theme.
    if (theme.theme === null) {
      newTheme = getTheme();
    }

    // Try loading browser preference.
    if (newTheme === null) {
      if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        newTheme = "dark";
      } else {
        newTheme = "light";
      }
    }

    // Updated theme state.
    theme.theme = newTheme;
  });
</script>

<!----------------------
        Template
----------------------->
<template>
  <div class="theme-toggle">
    <input
      id="switch"
      v-model="theme.theme"
      false-value="dark"
      true-value="light"
      type="checkbox"
    >
    <label
      class="slider"
      for="switch"
    />
  </div>
</template>

<!----------------------
        Styles
----------------------->
<style lang="scss" scoped>
  .theme-toggle {
    width: 56px;
    height: 28px;
    background-color: var(--switch-background-default);
    border: 1px solid var(--border-default);
    border-radius: 50px;
  }

  input {
    position: absolute;
    display: none;
  }

  .slider {
    position: relative;
    width: 100%;
    height: 100%;
    transition: 0.3s;
  }

  .slider::before {
    content: "";
    position: absolute;
    top: 2px;
    left: -4px;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    box-shadow: inset 9px 0px 0px 0px var(--primary);
    background-color: var(--switch-default);
    transition: 0.3s;
  }

  input:checked + .slider::before {
    transform: translateX(25px);
    box-shadow: none;
  }
</style>
