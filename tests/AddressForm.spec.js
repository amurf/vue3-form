import { mount } from "@vue/test-utils";
import AddressForm from "@/components/AddressForm.vue";

describe("AddressForm.vue", () => {
  it("renders props.label when passed", () => {
    const props = {
      street: "",
      postcode: "",
      state: "",
      country: "",
    };

    const wrapper = mount(AddressForm, {
      props,
    });

    expect(wrapper.findAll("label").at(0).text()).toMatch("Street");
  });
});
