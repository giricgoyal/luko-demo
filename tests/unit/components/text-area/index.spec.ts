import { shallowMount } from "@vue/test-utils";
import TextArea from "@/components/text-area/component.vue";
import { advanceBy } from "jest-date-mock";

describe("TextArea", () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = shallowMount(TextArea);
  });

  it("should render and match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe("When placeholder is supplied", () => {
    beforeEach(() => {
      wrapper.setProps({
        placeholder: "some placeholder",
      });
    });

    it("should render and match snapshot", () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe("When user inputs value in textarea", () => {
    beforeEach(() => {
      jest.useFakeTimers();
      wrapper.find("textarea").setValue("s");
      wrapper.find("textarea").setValue("so");
      wrapper.find("textarea").setValue("som");
      wrapper.find("textarea").setValue("some");
    });

    afterEach(() => {
      jest.useRealTimers();
    });

    it("should emit onChange with value", () => {
      advanceBy(1000);
      jest.advanceTimersByTime(500);
      expect(wrapper.emitted().onChange[0]).toEqual(["some"]);
    });
  });
});
