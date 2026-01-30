<script setup>
const props = defineProps(["src"]);

let src = props.src;
const fileName = src.match(/.*\/(.*)/)[1];

function downloadURI(uri, name) {
  var link = document.createElement("a");
  link.download = name;
  link.href = uri;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  link.remove();
}
</script>

<template>
  <button class="file-container" @click="downloadURI(src, fileName)">
    <div class="flex">
      <slot></slot>
      <p>{{ src }}</p>
    </div>
    <span class="block">
      <span class="download-icon"></span>
    </span>
  </button>
</template>

<style scoped>
.file-container {
  display: flex;
  padding: 20px;
  margin: 15px 0;
  color: var(--vp-c-brand-1);
  font-size: medium;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  transition: border-color 0.25s;
  cursor: pointer;
  width: 100%;
  text-decoration: unset;

  text-align: left;
  font-weight: 500;

  justify-content: space-between;

  &:hover {
    border-color: var(--vp-c-brand-1);
  }
}

p {
  margin: 0;
  font-size: small;
  color: var(--vp-c-text-2);
}

.download-icon {
  mask: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Uploaded to: SVG Repo  www.svgrepo.com  Generator: SVG Repo Mixer Tools --%3E%3Csvg width='800px' height='800px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3 15C3 17.8284 3 19.2426 3.87868 20.1213C4.75736 21 6.17157 21 9 21H15C17.8284 21 19.2426 21 20.1213 20.1213C21 19.2426 21 17.8284 21 15' stroke='%231C274C' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M12 3V16M12 16L16 11.625M12 16L8 11.625' stroke='%231C274C' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")
    no-repeat;
  height: 24px;
  width: 24px;
  display: block;
  fill: currentColor;
  box-sizing: border-box;
  color: inherit;
  background-color: var(--vp-c-text-2);
  mask-size: 100% 100%;
}
.block {
  display: block;
}
</style>
