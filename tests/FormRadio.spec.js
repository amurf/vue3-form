import { mount } from "@vue/test-utils";
import FormRadio from "@/components/FormRadio.vue";

describe("FormRadio.vue", () => {
  it("renders props.label when passed", () => {
    const props = {
      label: "form radio label",
      value: "formradioselected",
      modelValue: "",
    };

    const wrapper = mount(FormRadio, {
      props,
    });
    expect(wrapper.find("label").text()).toMatch(props.label);
  });
});
