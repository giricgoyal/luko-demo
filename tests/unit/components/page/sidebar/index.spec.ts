import { shallowMount } from "@vue/test-utils";
import Sidebar from "@/components/page/sidebar/component.vue";

describe("Sidebar", () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = shallowMount(Sidebar);
  });

  it("should render and match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe("When menu is open", () => {
    beforeEach(() => {
      wrapper.setProps({
        isMenuOpen: true,
      });
    });

    it("should render and match snapshot", () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
