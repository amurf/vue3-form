<template>
  <label>{{ label }}</label>
  <select
    @change="$emit('update:modelValue', $event.target.value)"
    :value="modelValue"
  >
    <option v-for="option in options" :value="option">
      {{ option }}
    </option>
  </select>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    required: true,
  },
  options: {
    type: Array,
    required: true,
  },
  modelValue: {
    type: [String, Number],
  },
});
</script>
