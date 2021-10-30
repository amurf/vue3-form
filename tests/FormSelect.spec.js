import { mount } from "@vue/test-utils";
import FormSelect from "@/components/FormSelect.vue";

describe("FormSelect.vue", () => {
  it("renders props.label when passed", () => {
    const props = {
      label: "select label",
      options: ["one", "two", 3],
      modelValue: "",
    };

    const wrapper = mount(FormSelect, {
      props,
    });
    expect(wrapper.find("label").text()).toMatch(props.label);
  });
});
