import { mount } from "@vue/test-utils";
import FormRadioGroup from "@/components/FormRadioGroup.vue";

describe("FormRadioGroup.vue", () => {
  it("renders props.label when passed", () => {
    const props = {
      label: "form radio group label",
      modelValue: "",
      name: "formradiogroup",
      options: [1, 2, 3],
    };

    const wrapper = mount(FormRadioGroup, {
      props,
    });
    expect(wrapper.find("legend").text()).toMatch(props.label);
  });
});
