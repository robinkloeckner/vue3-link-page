<!----------------------
        Script
----------------------->
<script setup>
  import {computed, reactive, ref} from "vue";
  import {useVuelidate} from "@vuelidate/core";
  import {required, email, sameAs} from "@vuelidate/validators";
  import AppBtn from "./AppBtn.vue";
  import {useI18n} from "vue-i18n";
  import api from "../services/api.js";

  // Data & rules.
  const httpStatus = ref(null);

  const formData = reactive({
    name: "",
    email: "",
    message: "",
    privacy: false
  });

  const rules = {
    name: {required, $autoDirty: true},
    email: {required, email, $autoDirty: true},
    message: {required, $autoDirty: true},
    privacy: {sameAs: sameAs(true), $autoDirty: true}
  };


  // Imported functions
  const v = useVuelidate(rules, formData);
  const {t} = useI18n();


  // Computed properties
  const httpStatusMessage = computed(() => {
    if (httpStatus.value === null || httpStatus.value.length < 3) {
      return "";
    }

    return t("contactForm.http" + httpStatus.value);
  });

  const httpStatusMessageColor = computed(() => {
    const error = httpStatus.value === "Error" || parseInt(httpStatus.value, 10) >= 300;
    return [
      error ? "text-danger" : "text-success"
    ];
  });


  // Functions.
  const submitForm = async () => {
    // Catch potentially incorrect/missing endpoint key in config file.
    try {
      httpStatus.value = await api("postContactForm", formData);
    } catch (error) {
      console.error(error);
      httpStatus.value = "Error";
    }
  };

  function resetHttpState() {
    httpStatus.value = null;
  }
</script>

<!----------------------
        Template
----------------------->
<template>
  <form>
    <div class="row gy-3">
      <!-- Name. -->
      <div class="col-12">
        <label
          class="visually-hidden"
          for="formName"
        >
          {{ t("contactForm.nameLabel") }}
        </label>
        <input
          id="formName"
          v-model="formData.name"
          :class="{ 'is-invalid': v.name.$error }"
          :placeholder="t('contactForm.nameLabel')"
          class="form-control form-control-lg"
          type="text"
          @blur="v.name.$touch"
          @click="resetHttpState"
        >
        <div
          :class="{ 'visible-feedback': v.name.$error }"
          class="invalid-feedback"
        >
          {{ t("contactForm.nameInvalid") }}
        </div>
      </div>

      <!-- Email. -->
      <div class="col-12">
        <label
          class="visually-hidden"
          for="formEmail"
        >
          {{ t("contactForm.emailLabel") }}
        </label>
        <input
          id="formEmail"
          v-model="formData.email"
          :class="{ 'is-invalid': v.email.$error }"
          :placeholder="t('contactForm.emailLabel')"
          class="form-control form-control-lg"
          type="email"
          @blur="v.email.$touch"
          @click="resetHttpState"
        >
        <div
          :class="{ 'visible-feedback': v.email.$error }"
          class="invalid-feedback"
        >
          {{ t("contactForm.emailInvalid") }}
        </div>
      </div>

      <!-- Message. -->
      <div class="col-12">
        <label
          class="visually-hidden"
          for="formMessage"
        >
          {{ t('contactForm.messageLabel') }}
        </label>
        <textarea
          id="formMail"
          v-model="formData.message"
          :class="{ 'is-invalid': v.message.$error }"
          :placeholder="t('contactForm.messageLabel')"
          class="form-control form-control-lg"
          rows="5"
          type="email"
          @blur="v.message.$touch"
          @click="resetHttpState"
        />
        <div
          :class="{ 'visible-feedback': v.message.$error }"
          class="invalid-feedback"
        >
          {{ t("contactForm.messageInvalid") }}
        </div>
      </div>

      <!-- Legal + Privacy. -->
      <div class="col-12 col-privacy">
        <div class="form-check">
          <input
            id="formCheckPrivacy"
            v-model="formData.privacy"
            :class="{ 'is-invalid': v.privacy.$error }"
            class="form-check-input"
            type="checkbox"
            @blur="v.privacy.$touch"
            @click="resetHttpState"
          >
          <label
            class="form-check-label"
            for="formCheckPrivacy"
          >
            {{ t("contactForm.privacyLabel") }} </label>
          <div
            :class="{ 'visible-feedback': v.privacy.$error }"
            class="invalid-feedback"
          >
            {{ t("contactForm.privacyInvalid") }}
          </div>
        </div>
      </div>

      <!-- Button. -->
      <div class="col-12">
        <AppBtn
          :disabled="v.$invalid"
          type="submit"
          @on-click="submitForm"
        >
          {{ t("contactForm.submitBtn") }}
        </AppBtn>
      </div>

      <!-- Http status. -->
      <div
        id="httpStatusMessage"
        :class="httpStatusMessageColor"
        class="col-12"
      >
        {{ httpStatusMessage }}
      </div>
    </div>
  </form>
</template>

<!----------------------
        Styles
----------------------->
<style lang="scss" scoped>
  form > .row > div {
    margin-top: .2rem;
  }

  ::placeholder,
  textarea {
    font-family: $font-family-sans-serif;
  }

  textarea {
    resize: none;
  }

  input,
  textarea {
    background-color: transparent;
    border-color: var(--field-border);
    color: var(--font-default);
  }

  .form-control {
    min-height: 3.5rem;
    font-size: 1.4rem;
  }

  .form-control:active,
  .form-control:focus {
    background-color: transparent !important;
    color: var(--font-default);
  }

  .form-control:-webkit-autofill,
  .form-control:-webkit-autofill:hover,
  .form-control:-webkit-autofill:focus,
  .form-control:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px transparent inset !important;
  }

  .form-control:-webkit-autofill {
    -webkit-text-fill-color: var(--font-default) !important;
  }

  .col-privacy {
    margin-top: -.22rem !important;
  }

  .form-check-input {
    $form-check-input-size: 1.65rem;
    width: #{$form-check-input-size};
    height: #{$form-check-input-size};
  }

  .form-check-label {
    font-size: 1.4rem;
    font-weight: 400;
    margin-left: -.4rem;
    color: var(--field-label);
  }

  .invalid-feedback {
    display: block;
    visibility: hidden;
    margin-top: 0;
    font-size: 1rem;
    font-weight: 400;
  }

  .visible-feedback {
    visibility: visible;
  }

  #httpStatusMessage {
    margin-top: 0.5rem;
    font-size: 1.2rem;
    font-weight: 400;
    height: 2.5rem;
  }
</style>