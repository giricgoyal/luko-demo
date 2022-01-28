<template>
  <div class="topbar">
    <div class="topbar__container">
      <Button
        :imageButton="true"
        v-on:onClick="handleHamburgerOnClick"
        class="topbar__container__hamburger"
      >
        <i class="fas fa-bars"></i>
      </Button>
      <img src="../../assets/luko-logo.png" class="topbar__container__logo" />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Button from "../button/component.vue";

@Options({
  components: {
    Button,
  },
  props: {
    isMenuOpen: Boolean,
    onMenuClick: Function,
  },
})
export default class Topbar extends Vue {
  isMenuOpen?: boolean;

  handleHamburgerOnClick(): void {
    this.$emit("onMenuClick", !this.isMenuOpen);
  }
}
</script>
