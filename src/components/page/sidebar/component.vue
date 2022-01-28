<template>
  <div
    class="page__sidebar"
    v-bind:class="{
      'page__sidebar--open': isMenuOpen,
    }"
  >
    <div class="page__sidebar__items">
      <div class="page__sidebar__items__item">
        <img src="../../../assets/icons/house.png" />Welcome
      </div>
      <div class="page__sidebar__items__item">
        <img src="../../../assets/icons/gift.png" />Get free insurance
      </div>
    </div>
    <Button class="page__sidebar__file-a-claim-action">
      <img
        src="../../../assets/icons/add-document.png"
        class="page__sidebar__file-a-claim-action__icon"
      />
      File a claim
    </Button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Button from "../../button/component.vue";

@Options({
  components: {
    Button,
  },
  props: {
    isMenuOpen: Boolean,
  },
})
export default class Sidebar extends Vue {
  isMenuOpen?: boolean;
}
</script>
