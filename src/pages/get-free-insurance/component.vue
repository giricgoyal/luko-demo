<template>
  <div class="get-free-insurance">
    <h1>Get free insurance</h1>
    <p>
      Invite friends and family to get better insurance, you will both get a
      nice discount. Referees without an invite link will have to enter your
      email address on the payment page.
    </p>
    <ShareLink :link="shareLink" class="get-free-insurance__share-link" />
    <h2 class="get-free-insurance__send-invites">
      Send invites to friends and family
    </h2>
    <p>
      We won’t sell, share or use these addresses other than to invite them,
      we’d hate that too. To invite multiple at once, input one address per
      line.
    </p>
    <EmailInvite class="get-free-insurance__email-invite" />
    <div class="get-free-insurance__bottom-banner">
      <div class="get-free-insurance__bottom-banner__content">
        <h3>Luko also protects your home</h3>
        <p>
          Non-occupying homeowners and PEV riders get 1 year of free PEV or
          non-occupying homeowner insurance when insuring their main home with
          Luko!
        </p>
        <div
          class="get-free-insurance__bottom-banner__content__get-my-home-insured-action"
        >
          <Button :onClick="handleBottomBannerActionOnClick"
            >Get my home insured</Button
          >
        </div>
      </div>
      <div class="get-free-insurance__bottom-banner__gift-image">
        <img src="../../assets/gift.png" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import EmailInvite from "../../components/email-invite/component.vue";
import ShareLink from "../../components/share-link/component.vue";
import Button from "../../components/button/component.vue";

@Options({
  components: {
    EmailInvite,
    ShareLink,
    Button,
  },
  props: {},
})
export default class GetFreeInsurance extends Vue {
  shareLink: string;

  constructor() {
    super(...arguments);
    this.shareLink = "https://luko.eu/join/luko@email.com";
  }

  handleBottomBannerActionOnClick(): void {
    console.log("get my home insured");
  }
}
</script>
