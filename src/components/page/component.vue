<template>
  <div class="page">
    <slot />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
export { default as Sidebar } from "./sidebar/component.vue";
export { default as Content } from "./content/component.vue";

@Options({
  props: {},
})
export default class Page extends Vue {}
</script>
