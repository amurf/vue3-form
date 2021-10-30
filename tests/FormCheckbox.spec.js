import { mount } from "@vue/test-utils";
import FormCheckbox from "@/components/FormCheckbox.vue";

describe("FormCheckbox.vue", () => {
  it("renders props.label when passed", () => {
    const props = {
      label: "checkbox label",
      value: "",
      modelValue: false,
    };

    const wrapper = mount(FormCheckbox, {
      props,
    });

    expect(wrapper.find("label").text()).toMatch(props.label);
  });
});
