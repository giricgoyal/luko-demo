<template>
  <div class="page__content">
    <slot />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {},
})
export default class Content extends Vue {}
</script>
