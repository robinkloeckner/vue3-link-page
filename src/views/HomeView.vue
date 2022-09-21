<!----------------------
        Script
----------------------->
<script setup>
  import CardImage from "@/components/CardImage.vue";
  import resources from "@/config/resources.js";
  import contact from "@/config/contact.js";
  import ContactForm from "../components/ContactForm.vue";
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
  <section
    v-if="contact.enableForm"
    class="container-sm"
  >
    <h2 class="col-12">
      {{ $t("contactFormH1") }}
    </h2>
    <ContactForm />
  </section>
</template>

<!----------------------
        Styles
----------------------->
<style lang="scss" scoped>
  section:not(:first-child) {
    margin-bottom: 5rem;
  }

  section:nth-child(2) {
    margin-top: 5rem;
  }

  h2 {
    margin-bottom: 2rem;
    text-align: center;
    color: $primary;
    font-size: 2.4rem;
  }
</style>
