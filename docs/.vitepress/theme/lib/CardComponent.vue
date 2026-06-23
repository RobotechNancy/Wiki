<script setup>

const props = defineProps(["src", "img", "title"]);
const img = props.img;
const src = props.src;
const title = props.title

</script>

<template>
  <a :href="'/Wiki' + src">
    <img :src="img ? ('/Wiki' + img) : '/Wiki/favicon.webp'" data-disable-zoom />
    <h1>{{ title }}</h1>
    <!-- <slot></slot> -->
  </a>
</template>

<style scoped>

a {
  width: 50%;
  margin: 5px;
  padding: 10px;
  height: 340px;

  border-radius: 10px;
  border: 1px #a0a0a0 solid;

  display: flex;

  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  transition: 0.2s var(--hover-animation);

  color: var(--vp-c-text-1);
  text-decoration: none;

  &:hover {
    box-shadow: 0 2px 3px #a0a0a0;
    border: 1px var(--vp-c-brand-1) solid;
  }
}

img {
  flex-grow: 1;
  max-height: 310px;
  height: 100%;
  object-fit: cover;
}

</style>
