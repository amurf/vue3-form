<template>
  <label for="">
    {{ label }}
  </label>

  <input
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    v-bind="$attrs"
  />
</template>

<script setup>
defineProps({
  label: {
    type: String,
    required: true,
  },

  modelValue: {
    type: [String, Number],
    required: true,
  },
});
</script>

