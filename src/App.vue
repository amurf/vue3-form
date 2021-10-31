<template>
  <div class="form-examples">
    <FormInput
      label="First form item"
      type="password"
      v-model="formInputValue"
    />

    <FormSelect
      :options="[1, 2, 3]"
      label="The select"
      v-model="formSelectValue"
    />

    <FormCheckbox
      value="Checkbox"
      label="Checkbox"
      v-model="formCheckboxValue"
    />

    <FormRadio
      value="radioIsSelectedYay"
      label="Radio"
      v-model="formRadioValue"
    />

    <FormRadioGroup
      :options="['yes', 'no']"
      name="yesOrNo"
      label="Do you like food?!"
      v-model="formRadioGroupValue"
    />

    <FormCheckboxGroup
      :options="['Cheese', 'Cake']"
      name="bestFood"
      label="Best food?"
      v-model="formInputGroupValue"
    />
  </div>

  <FormCheckboxGroup
    :options="['Cheese', 'Cake']"
    name="bestFood"
    label="Best food?"
    v-model="formInputGroupValue"
  />
</template>

<script setup>
import FormInput from "@/components/FormInput.vue";
import FormSelect from "@/components/FormSelect.vue";
import FormCheckbox from "@/components/FormCheckbox.vue";
import FormRadio from "@/components/FormRadio.vue";
import FormRadioGroup from "@/components/FormRadioGroup.vue";
import FormCheckboxGroup from "@/components/FormCheckboxGroup.vue";

import { ref } from "vue";

const formInputValue = ref("");
const formSelectValue = ref("");
const formCheckboxValue = ref(false);
const formRadioValue = ref("");
const formRadioGroupValue = ref("");
const formInputGroupValue = ref(new Set());
</script>

<style scoped>
.form-examples {
  display: flex;
  flex-direction: column;
}
</style>
