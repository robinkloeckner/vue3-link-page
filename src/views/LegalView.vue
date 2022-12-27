<!----------------------
        Script
----------------------->
<script setup>
  import ContentText from "@/components/ContentText.vue";
  import contact from "@/config/contact.js";
</script>

<!----------------------
        Template
----------------------->
<template>
  <ContentText
    :data="contact"
    content-message="legal.content"
    h1-message="legal.heading"
  />
</template>

<!----------------------
        Styles
----------------------->
<style lang="scss" scoped>

</style>
