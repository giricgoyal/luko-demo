<template>
  <textarea
    class="textarea"
    v-model="value"
    v-bind:placeholder="placeholder"
  ></textarea>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { debounce } from "lodash";

@Options({
  props: {
    placeholder: String,
    onChange: Function,
  },
  watch: {
    value() {
      this.handleOnChange();
    },
  },
})
export default class TextArea extends Vue {
  placeholder?: string = "";
  value = "";

  handleOnChange = debounce(() => {
    this.$emit("onChange", this.value);
  }, 500);
}
</script>
