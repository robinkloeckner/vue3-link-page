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
    content-message="legalContent"
    h1-message="legalH1"
  />
</template>

<!----------------------
        Styles
----------------------->
<style lang="scss" scoped>

</style>
