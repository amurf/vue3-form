<template>
  <fieldset>
    <legend>{{ label }}</legend>
    <FormCheckbox
      v-for="option in options"
      :value="option"
      :label="option"
      :name="name"
      @change="
        $event.target.checked
          ? modelValue.add(option)
          : modelValue.delete(option)
      "
      :modelValue="modelValue.has(option)"
    />
  </fieldset>
</template>

<script setup>
import FormCheckbox from "@/components/FormCheckbox.vue";

defineProps({
  options: {
    type: Array,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  modelValue: {
    type: Set,
    required: true,
  },
});
</script>
