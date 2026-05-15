<script setup>
import DefaultTheme from "vitepress/theme";
import { MediumZoom } from "vitepress-component-medium-zoom";
import "vitepress-component-medium-zoom/style.css";

const { Layout } = DefaultTheme;
</script>

<template>
  <Layout></Layout>
  <!-- Use here -->
  <MediumZoom
    :options="{
      background: 'rgba(0, 0, 0, 0.9)',
      margin: 24,
    }"
    selector=".vp-doc img:not([data-disable-zoom])"
  />
</template>
