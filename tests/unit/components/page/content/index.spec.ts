import { shallowMount } from "@vue/test-utils";
import Content from "@/components/page/content/component.vue";

describe("Content", () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = shallowMount(Content);
  });

  it("should render and match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
