import { shallowMount } from "@vue/test-utils";
import EmailInvite from "@/components/email-invite/component.vue";
import * as utils from "@/components/email-invite/utils";

describe("EmailInvite", () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = shallowMount(EmailInvite);
  });

  it("should render and match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should not be visible", () => {
    expect(wrapper.find(".email-invite__info__label").exists()).toBe(false);
  });

  it("should keep the button disabled", () => {
    expect(wrapper.find(".email-invite__action").attributes().disabled).toEqual(
      "true"
    );
  });

  describe("When user inputs an invalid email", () => {
    beforeEach(() => {
      jest
        .spyOn(utils, "validateEmails")
        .mockImplementation(async () => ["_a@a is invalid."]);
      wrapper
        .findComponent(".email-invite__email-list-input")
        .vm.$emit("onChange", "_a@a");
    });

    it("should render and match snapshot", () => {
      expect(wrapper).toMatchSnapshot();
    });

    it("should show info", () => {
      expect(wrapper.find(".email-invite__info__label")).toMatchSnapshot();
    });

    it("should keep the button disabled", () => {
      expect(
        wrapper.find(".email-invite__action").attributes().disabled
      ).toEqual("true");
    });
  });

  describe("When user inputs a valid email", () => {
    beforeEach(() => {
      jest.spyOn(utils, "validateEmails").mockImplementation(async () => []);

      wrapper
        .findComponent(".email-invite__email-list-input")
        .vm.$emit("onChange", "cover@getluko.com");
    });

    it("should render and match snapshot", () => {
      expect(wrapper).toMatchSnapshot();
    });

    it("should not show info", () => {
      expect(wrapper.find(".email-invite__info__label").exists()).toBe(false);
    });

    it("should not keep the button disabled", () => {
      expect(
        wrapper.find(".email-invite__action").attributes().disabled
      ).toEqual("false");
    });
  });
});
