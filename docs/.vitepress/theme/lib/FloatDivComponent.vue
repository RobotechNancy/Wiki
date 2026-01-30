<script setup>
const props = defineProps(["img", "text"]);
const img_location = props.img;
const text = props.text;
</script>

<template>
  <div class="container" v-if="img_location === 'left'">
    <slot class="image"></slot>
    <p class="text">{{ text }}</p>
  </div>
  <div class="container" v-else-if="img_location === 'right'">
    <p class="text">{{ text }}</p>
    <slot class="image"></slot>
  </div>
  <div class="container" v-else>
    <slot></slot>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

p {
    flex-grow: 1;
    align-self: normal;
    margin-top: 30px;
}
</style>
