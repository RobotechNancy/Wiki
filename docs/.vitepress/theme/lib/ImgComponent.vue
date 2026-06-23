<script setup>
const props = defineProps(["src", "alt", "width", "height", "dataShowAlt", "dataDisableZoom"]);

const disableZoom = props.dataDisableZoom;
const showAlt = props.dataShowAlt;

let width = props.width;
let height = props.height;

let src = "/Wiki" + props.src;
</script>

<template>
  <div v-if="typeof showAlt === 'string' && showAlt !== 'false'" class="flex">
    <img
      class="with-label"
      :src="src"
      :alt="props.alt"
      :width="width"
      :height="height"
      :data-disable-zoom="disableZoom"
    />
    <p class="alt-text">{{ props.alt }}</p>
  </div>
  <img
    v-else
    :src="src"
    :alt="props.alt"
    :width="width"
    :height="height"
    :data-disable-zoom="disableZoom"
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
