<script setup>
import { useClipboard } from '@vueuse/core'
import tools from '../assets/tools.json'

const props = defineProps(["src"]);
const src = props.src;

const target = tools.find(x => x.id === src);

const { copy } = useClipboard();

function load_profile() {
  let decoded_data = atob(target['data']);
  copy(decoded_data);
  console.debug(`[DEBUG] Profile "${target["id"]}" loaded`)

  let icon_classList = document.getElementById("icon").classList;
  icon_classList.replace("clipboard-icon", "check-icon");

  let button_classList = document.getElementById("container").classList;
  button_classList.replace("file-container", "file-container-active");

  setTimeout(() => {
    icon_classList.replace("check-icon", "clipboard-icon");
    button_classList.replace("file-container-active", "file-container");
  }, 1000)
}
</script>

<template>
  <button id="container" class="file-container" @click="load_profile()">
    <div class="flex">
      <slot></slot>
      <p>{{ target["name"] }}</p>
    </div>
    <span class="block">
      <span id="icon" class="clipboard-icon"></span>
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
  transition:
    all ease-in-out 0.1s, border-color 0.25s;
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

.file-container-active {
  display: flex;
  padding: 20px;
  margin: 15px 0;
  color: var(--vp-c-brand-1);
  background-color: var(--vp-c-success-soft);
  font-size: medium;
  border: 1px solid var(--vp-c-success-3);
  border-radius: 8px;
  transition:
    all ease-in-out 0.1s, border-color 0.25s;
  cursor: pointer;
  width: 100%;
  text-decoration: unset;

  text-align: left;
  font-weight: 500;

  justify-content: space-between;

  &:hover {
    border-color: var(--vp-c-success-1);
  }
}

p {
  margin: 0;
  font-size: small;
  color: var(--vp-c-text-2);
}

#icon {
  transition: all cubic-bezier(1, 0, 0, 0.5);
}

.clipboard-icon {
  mask: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjgwMCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik04IDVjLS45ODggMC0xLjUwNi4wMTMtMS45MDguMjE4YTIgMiAwIDAgMC0uODc0Ljg3NEM1IDYuNTIgNSA3LjA4IDUgOC4ydjkuNmMwIDEuMTIgMCAxLjY4LjIxOCAyLjEwOGEyIDIgMCAwIDAgLjg3NC44NzRDNi41MiAyMSA3LjA4IDIxIDguMiAyMWg3LjZjMS4xMiAwIDEuNjggMCAyLjEwOC0uMjE4YTIgMiAwIDAgMCAuODc0LS44NzRDMTkgMTkuNDggMTkgMTguOTIgMTkgMTcuOFY4LjJjMC0xLjEyIDAtMS42OC0uMjE4LTIuMTA4YTIgMiAwIDAgMC0uODc0LS44NzRjLS40MDItLjIwNS0uOTItLjIxNy0xLjkwOC0uMjE4TTggNXYyaDhWNU04IDV2LS4yOTNBMS43MDcgMS43MDcgMCAwIDEgOS43MDcgM2g0LjU4NkExLjcwNyAxLjcwNyAwIDAgMSAxNiA0LjcwN1Y1IiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PC9zdmc+") no-repeat;
  height: 24px;
  width: 24px;
  display: block;
  fill: currentColor;
  box-sizing: border-box;
  color: inherit;
  background-color: var(--vp-c-text-2);
  mask-size: 100% 100%;
}

.check-icon {
  mask: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjgwMCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik00IDEyLjYxMSA4LjkyMyAxNy41IDIwIDYuNSIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==") no-repeat;
  height: 24px;
  width: 24px;
  display: block;
  fill: currentColor;
  box-sizing: border-box;
  color: inherit;
  background-color: var(--vp-c-success-3);
  mask-size: 100% 100%;
}

.block {
  display: block;
}
</style>
