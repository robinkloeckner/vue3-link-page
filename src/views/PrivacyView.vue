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
    content-message="privacy.content"
    h1-message="privacy.heading"
  />
</template>

<!----------------------
        Styles
----------------------->
<style lang="scss" scoped>

</style>
