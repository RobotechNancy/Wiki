import type { Theme } from 'vitepress'
import DefaultTheme from "vitepress/theme";
import "./custom.css"

import ZoomLayout from './ZoomLayout.vue';

export default {
    extends: DefaultTheme,
    Layout: ZoomLayout
} satisfies Theme