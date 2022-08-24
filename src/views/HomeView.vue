<!----------------------
        Script
----------------------->
<script setup>
  import CardImage from "@/components/CardImage.vue";
  import resources from "@/config/resources.js";
</script>

<!----------------------
        Template
----------------------->
<template>
  <section class="container-sm">
    <div class="row py-3 justify-content-center">
      <template v-for="item in resources">
        <CardImage
          v-if="item.generateCard === true"
          :key="item.name"
          :icon="item.icon"
          :img="item.img"
          :name="item.name"
          :url="item.url"
          class="col-12 my-3"
        />
      </template>
    </div>
  </section>
</template>

<!----------------------
        Styles
----------------------->
<style lang="scss" scoped>

</style>
