<!----------------------
        Script
----------------------->
<script setup>
  import resources from "@/config/resources";
  import AppLink from "./AppLink.vue";
  import {defineAsyncComponent} from "vue";
  import contact from "@/config/contact.js";
</script>

<!----------------------
        Template
----------------------->
<template>
  <header class="header">
    <!-- Header image. -->
    <div class="header-img">
      <img
        alt="It's me!"
        src="@/assets/img/header.jpg"
      >
    </div>

    <!-- Text secion. -->
    <div class="header-text">
      <div class="name">
        <h1>{{ contact.name }}</h1>
      </div>
      <div class="profession">
        {{ $t("service") }}
      </div>
    </div>

    <!-- Icons / external links. -->
    <div class="header-icons">
      <span
        v-for="item in resources"
        :key="item.name"
      >
        <AppLink :url="item.url">
          <component :is="defineAsyncComponent(() => import(`./icons/${item.icon}.vue`))" />
        </AppLink>
      </span>
    </div>
  </header>
</template>

<!----------------------
        Styles
----------------------->
<style lang="scss" scoped>
  .header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--background-alternative-2);
    border-radius: 0 0 25px 25px;

    &-img {
      margin: 1rem 0 2rem 0;

      img {
        --width: 14rem;
        width: var(--width);
        height: var(--width);
        object-fit: cover;
        border-radius: calc(var(--width) / 2);
      }
    }

    &-text {
      text-align: center;

      .name h1 {
        font-size: 3.5rem;
        font-weight: 500;
        color: var(--title-alternative);
      }

      .profession {
        margin-top: -8px;
        margin-bottom: 2rem;
        font-size: 1.75rem;
        color: var(--font-default);
      }
    }

    &-icons {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      margin-bottom: 2rem;

      svg {
        margin: 1rem;
        width: 2.75rem;
        fill: var(--svg-default);

        &:hover,
        &:active,
        &:focus {
          fill: var(--svg-hover-default) !important;
        }
      }
    }
  }
</style>