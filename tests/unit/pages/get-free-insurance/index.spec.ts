import { shallowMount } from "@vue/test-utils";
import GetFreeInsurance from "@/pages/get-free-insurance/component.vue";

describe("GetFreeInsurance", () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = shallowMount(GetFreeInsurance);
  });

  it("should render and match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
