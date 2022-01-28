import { shallowMount } from "@vue/test-utils";
import Button from "@/components/button/component.vue";
import { before } from "lodash";

describe("Button", () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = shallowMount(Button);
  });

  it("should render and match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe("When image button", () => {
    beforeEach(() => {
      wrapper.setProps({
        imageButton: true,
      });
    });

    it("should render and match snapshot", () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe("When disabled", () => {
    beforeEach(() => {
      wrapper.setProps({
        disabled: true,
      });
    });

    it("should render and match snapshot", () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe("When clicked", () => {
    beforeEach(() => {
      wrapper.find("button").trigger("click");
    });

    it("should emit onClick", () => {
      expect(wrapper.emitted().onClick).toBeTruthy();
    });
  });
});
