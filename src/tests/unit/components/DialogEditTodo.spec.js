import { expect } from "@jest/globals"
import { mount, shallowMount } from "@vue/test-utils"
import HtmlWebpackPlugin from "html-webpack-plugin"

import DialogEditTodo from "@/components/DialogEditTodo.vue"

describe("FormTodo.vue", () => {

  it("testing", () => {
    const wrapper = shallowMount(DialogEditTodo)

    expect(wrapper.vm).toBeTruthy()
    expect(wrapper.is(DialogEditTodo)).toBeTruthy()

    expect(wrapper.find("v-form-stub").exists()).toBeTruthy()
    expect(wrapper.find("v-dialog-stub").exists()).toBeTruthy()
  })

})