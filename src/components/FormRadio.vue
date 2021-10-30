<template>
  <label>{{ label }}</label>
  <input
    type="radio"
    :value="value"
    :checked="modelValue === value"
    @change="$emit('update:modelValue', value)"
    v-bind="$attrs"
  />
</template>

<script setup>
defineProps({
  label: {
    type: [String, Number],
    required: true,
  },
  value: {
    type: [String, Number],
    required: true,
  },
  modelValue: {
    type: [String, Number],
    required: true,
  },
});
</script>
