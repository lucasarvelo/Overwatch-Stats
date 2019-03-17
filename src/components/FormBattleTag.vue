<template>
  <form novalidate class="md-layout md-alignment-center" @submit.prevent="validateBattleTag">
    <md-card class="md-layout-item md-size-50 md-small-size-100">
      <md-card-header>
        <div class="md-title">Search BattleTag</div>
      </md-card-header>

      <md-card-content>
        <div class="md-layout-item md-small-size-100">
          <md-field :class="getValidationClass('battleTag')">
            <label for="battleTag">BattleTag</label>
            <md-input
              name="battleTag"
              id="battleTag"
              autocomplete
              v-model="form.battleTag"
              :disabled="sending"
            />
            <span class="md-error" v-if="!$v.form.battleTag.required">The Battle Tag is required</span>
            <span class="md-error" v-else-if="!$v.form.battleTag.minlength">Invalid BattleTag</span>
          </md-field>
        </div>
      </md-card-content>

      <md-progress-bar md-mode="indeterminate" v-if="sending"/>

      <md-card-actions>
        <md-button type="submit" class="md-primary" :disabled="sending">Save BattleTag</md-button>
      </md-card-actions>
    </md-card>
  </form>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, minLength, maxLength } from "vuelidate/lib/validators";

export default {
  name: "FormValidation",
  mixins: [validationMixin],
  props: {
    updateBattleTag: { type: Function }
  },
  data: () => ({
    form: {
      battleTag: null
    },
    sending: false
  }),
  validations: {
    form: {
      battleTag: {
        required,
        minLength: minLength(7),
        maxLength: maxLength(17)
      }
    }
  },
  methods: {
    getValidationClass(fieldName) {
      const field = this.$v.form[fieldName];

      if (field) {
        return {
          "md-invalid": field.$invalid && field.$dirty
        };
      }
    },
    saveBattleTag() {
      this.sending = true;
      localStorage.setItem("battleTag", this.form.battleTag);
      this.updateBattleTag();
      this.sending = false;
    },
    validateBattleTag() {
      this.$v.$touch();

      if (!this.$v.$invalid) {
        this.saveBattleTag();
      }
    }
  }
};
</script>

<style>
</style>
