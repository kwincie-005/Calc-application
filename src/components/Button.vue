<template>
  <button class="" :style="{ backgroundColor: customized }">
    {{ name }}
  </button>
</template>

<script setup>
const props = defineProps({
  name: String,
  customized: String,
});
</script>

<style lang="scss" scoped></style>
