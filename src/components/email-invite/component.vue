<template>
  <div class="email-invite">
    <div class="email-invite__email-address-label">Email Addresses</div>
    <TextArea
      :placeholder="placeholder"
      v-on:onChange="handleEmailListOnChange"
      class="email-invite__email-list-input"
    />
    <div class="email-invite__info" v-if="errors.length || isApiError">
      <img src="../../assets/icons/info.png" class="email-invite__info__icon" />
      <span v-if="!isApiError" class="email-invite__info__label">{{
        errors.join(" ")
      }}</span>
      <span
        v-else
        class="email-invite__info__label email-invite__info__label--error"
      >
        An error occured. Please try again later.
      </span>
    </div>
    <Button
      v-on:onClick="handleSendInvitesOnClick"
      class="email-invite__action"
      :disabled="isButtonDisabled"
    >
      Send Invites
    </Button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import TextArea from "../text-area/component.vue";
import Button from "../button/component.vue";
import { validateEmails } from "./utils";

@Options({
  components: {
    Button,
    TextArea,
  },
  props: {},
})
export default class EmailInvite extends Vue {
  placeholder = "john.doe@lukognito.com\njane.doe@lukognito.com";
  isButtonDisabled = true;
  inviteeList: string[] = [];
  errors: string[] = [];
  isApiError = false;

  handleSendInvitesOnClick(): void {
    console.log("send invites click");
  }

  async handleEmailListOnChange(value: string): Promise<void> {
    try {
      this.isApiError = false;
      this.inviteeList = value.trim().split("\n");
      this.errors = await validateEmails(this.inviteeList);
      this.isButtonDisabled = this.errors.length > 0;
    } catch (error) {
      this.isApiError = true;
      this.errors = [];
      console.log(error);
    }
  }
}
</script>
