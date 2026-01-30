import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import "./custom.css";

import ZoomLayout from "./lib/ZoomLayout.vue";
import FileComponent from "./lib/FileComponent.vue";
import ImgComponent from "./lib/ImgComponent.vue";
import FloatDivComponent from "./lib/FloatDivComponent.vue";

export default {
  extends: DefaultTheme,
  Layout: ZoomLayout,
  enhanceApp({ app }) {
    app.component("file", FileComponent);
    app.component("Image", ImgComponent);
    app.component("Div", FloatDivComponent);
  },
} satisfies Theme;
