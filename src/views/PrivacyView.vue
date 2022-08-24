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
    content-message="privacyContent"
    h1-message="privacyH1"
  />
</template>

<!----------------------
        Styles
----------------------->
<style lang="scss" scoped>

</style>
