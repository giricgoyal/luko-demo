import { shallowMount } from "@vue/test-utils";
import ShareLink from "@/components/share-link/component.vue";

Object.assign(navigator, {
  clipboard: {
    writeText: jest.fn().mockImplementation(() => Promise.resolve()),
  },
});

describe("ShareLink", () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = shallowMount(ShareLink, {
      props: {
        link: "https://some-link.com",
      },
    });
  });

  it("should render and match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe("When copy button is clicked", () => {
    beforeEach(() => {
      jest.spyOn(navigator.clipboard, "writeText");
      jest.useFakeTimers();
      wrapper
        .findComponent(".share-link__buttons__copy-invite-link-button")
        .vm.$emit("onClick");
    });

    afterEach(() => {
      jest.useRealTimers();
    });

    it("should copy the link to clipboard", () => {
      expect(navigator.clipboard.writeText).toHaveBeenCalledWith(
        "https://some-link.com"
      );
    });

    it("should show copied feedback to user", () => {
      expect(wrapper.find(".share-link__link-label__copied")).toMatchSnapshot();
    });

    it("should render and match snapshot", () => {
      expect(wrapper).toMatchSnapshot();
    });

    describe("After timeout", () => {
      it("should render and match snapshot", () => {
        jest.runAllTimers();
        wrapper.vm.$nextTick(() => {
          expect(wrapper).toMatchSnapshot();
        });
      });
    });
  });
});
