<template>
  <div class="share-link">
    <div class="share-link__link-label">
      {{ link }}
      <div v-if="linkCopied" class="share-link__link-label__copied">
        Copied <i class="fas fa-check" />
      </div>
    </div>
    <div class="share-link__buttons">
      <Button
        v-on:onClick="handleCopyInviteLinkClick"
        class="share-link__buttons__copy-invite-link-button"
      >
        Copy invite link
      </Button>
      <Button :imageButton="true">
        <img src="../../assets/icons/facebook.png" />
      </Button>
      <Button :imageButton="true">
        <img src="../../assets/icons/messenger.png" />
      </Button>
      <Button :imageButton="true">
        <img src="../../assets/icons/whatsapp.png" />
      </Button>
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
    link: String,
  },
})
export default class ShareLink extends Vue {
  link = "";
  linkCopied = false;
  timer: number | null = null;

  handleCopyInviteLinkClick(): void {
    navigator.clipboard.writeText(this.link);
    this.linkCopied = true;
    if (this.timer) {
      clearTimeout(this.timer);
    }

    this.timer = setTimeout(() => {
      this.linkCopied = false;
    }, 5000);
  }
}
</script>
