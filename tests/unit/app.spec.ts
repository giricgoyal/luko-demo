import { shallowMount } from "@vue/test-utils";
import App from "@/App.vue";

describe("App", () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = shallowMount(App);
  });

  it("should render and match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
