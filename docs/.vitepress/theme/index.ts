import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import "./custom.css";

import ZoomLayout from "./ZoomLayout.vue";
import FileComponent from "./FileComponent.vue";

export default {
  extends: DefaultTheme,
  Layout: ZoomLayout,
  enhanceApp({ app }) {
    app.component("file", FileComponent);
  },
} satisfies Theme;
