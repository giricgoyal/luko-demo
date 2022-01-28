<template>
  <button
    class="button"
    v-bind:class="{
      'button--image-button': imageButton,
      'button--disabled': disabled,
    }"
    v-on:click="handleOnClick"
    type="button"
    v-bind:disabled="disabled"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    imageButton: Boolean,
    onClick: Function,
    disabled: Boolean,
  },
})
export default class Button extends Vue {
  imageButton?: boolean;
  disabled?: boolean;

  handleOnClick(): void {
    this.$emit("onClick");
  }
}
</script>
