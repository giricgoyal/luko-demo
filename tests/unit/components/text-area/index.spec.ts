import { shallowMount } from "@vue/test-utils";
import TextArea from "@/components/text-area/component.vue";

describe("TextArea", () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = shallowMount(TextArea);
  });

  it("should render Topbar and match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
