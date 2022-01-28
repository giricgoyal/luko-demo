import { shallowMount } from "@vue/test-utils";
import Topbar from "@/components/topbar/component.vue";
import Button from "@/components/button/component.vue";

describe("Topbar", () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = shallowMount(Topbar);
  });

  it("should render Topbar and match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe("When menu is clicked", () => {
    beforeEach(() => {
      wrapper.findComponent(Button).vm.$emit("onClick");
    });

    it("should emit the event", () => {
      expect(wrapper.emitted().onMenuClick).toBeTruthy();
    });
  });
});
