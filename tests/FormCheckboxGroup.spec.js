import { mount } from "@vue/test-utils";
import FormCheckboxGroup from "@/components/FormCheckboxGroup.vue";

describe("FormCheckboxGroup.vue", () => {
  it("renders props.label when passed", () => {
    const props = {
      label: "some label",
      name: "checkboxName",
      options: [1, 2, 3],
      modelValue: new Set(),
    };

    const wrapper = mount(FormCheckboxGroup, {
      props,
    });
    expect(wrapper.find("legend").text()).toMatch(props.label);
  });
});
