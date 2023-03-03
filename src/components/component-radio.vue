<template>
  <div class="component-radio-container">
    <input type="radio" name="radio" />
    <label>{{ text }}</label>
  </div>
</template>

<script>
export default {
  name: 'ComponentRadio',
  props: {
    text: {
      type: String,
      default: 'Yes',
    },
  },
}
</script>

<style scoped>
.component-radio-container {
  position: relative;
}
</style>
