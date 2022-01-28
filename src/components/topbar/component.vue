<template>
  <div class="topbar">
    <img src="../../assets/luko-logo.png" class="topbar__logo" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {},
})
export default class Topbar extends Vue {}
</script>
