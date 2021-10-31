<template>
  <div class="address-form">
    <FormInput
      label="Street"
      v-model="street"
      @input="$emit('update:street', $event.target.value)"
    />
    <FormInput
      label="Postcode"
      type="number"
      v-model.number="postcode"
      @input="$emit('update:postcode', $event.target.value)"
    />
    <FormInput
      label="State"
      v-model="state"
      @input="$emit('update:state', $event.target.value)"
    />
    <FormInput
      label="Country"
      v-model="country"
      @input="$emit('update:country', $event.target.value)"
    />
  </div>
</template>


<script setup>
import FormInput from "@/components/FormInput.vue";

defineProps({
  street: {
    type: String,
    required: true,
  },
  postcode: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
});
</script>

<style>
.address-form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 5px;
}

.address-form label {
  text-align: right;
  margin-right: 1em;
}
</style>
