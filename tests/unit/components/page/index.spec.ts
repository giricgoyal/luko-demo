import { shallowMount } from "@vue/test-utils";
import Page from "@/components/page/component.vue";

describe("Page", () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = shallowMount(Page);
  });

  it("should render and match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
