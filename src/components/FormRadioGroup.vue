<template>
  <fieldset>
    <legend>{{ label }}</legend>
    <FormRadio
      v-for="option in options"
      :value="option"
      :label="option"
      :name="name"
      :modelValue="modelValue"
      @update:modelValue="$emit('update:modelValue', $event)"
    />
  </fieldset>
</template>

<script setup>
import FormRadio from "@/components/FormRadio.vue";
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
    type: [String, Number],
  },
});
</script>
