import { mount } from "@vue/test-utils";
import FormInput from "@/components/FormInput.vue";

describe("FormInput.vue", () => {
  it("renders props.label when passed", () => {
    const props = {
      label: "form input label",
      modelValue: "",
    };

    const wrapper = mount(FormInput, {
      props,
    });

    expect(wrapper.find("label").text()).toMatch(props.label);
  });
});
