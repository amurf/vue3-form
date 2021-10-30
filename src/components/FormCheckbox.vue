<template>
  <label>{{ label }}</label>
  <input
    type="checkbox"
    :value="value"
    :checked="modelValue"
    @change="$emit('update:modelValue', $event.target.checked)"
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
    type: Boolean,
    required: true,
  },
});
</script>
