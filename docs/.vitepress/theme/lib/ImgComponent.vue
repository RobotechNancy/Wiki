<script setup>
const props = defineProps(["src", "alt", "showAlt", "width", "height"]);
const showAlt = props.showAlt;

let src = "/Wiki" + props.src;
</script>

<template>
  <div v-if="typeof showAlt === 'string' && showAlt !== 'false'" class="flex">
    <img
      class="with-label"
      :src="src"
      :alt="props.alt"
      :width="props.width"
      :height="props.height"
    />
    <p class="alt-text">{{ props.alt }}</p>
  </div>
  <img
    v-else
    :src="src"
    :alt="props.alt"
    :width="props.width"
    :height="props.height"
  />
</template>

<style scoped>
div.flex {
  display: flex;
  flex-direction: column;
}

img.with-label {
  margin-bottom: 5px;
}

p.alt-text {
  text-align: center;
  margin-top: 0;
  font-style: italic;
  color: var(--docsearch-muted-color);
  font-size: 15px;
}
</style>
