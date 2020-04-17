import { shallowMount } from '@vue/test-utils'
import UnitTest from '../../pages/covid/index.vue'

const factory = () => {
  return shallowMount(UnitTest, {
  });
};

describe("UnitTest", () => {
  test("mounts properly", () => {
    const wrapper = factory();
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test("renders properly", () => {
    const wrapper = factory();
    expect(wrapper.html()).toMatchSnapshot();
  });
});