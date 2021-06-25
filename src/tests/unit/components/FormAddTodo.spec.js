import { expect } from "@jest/globals"
import { mount } from "@vue/test-utils"

import FormAddTodo from "@/components/FormAddTodo.vue"

const todoData = {
  id: "G48a_bJwSi0SB6xSeJOtK", 
  title: "title", 
  description: "description", 
  date: 1624471319925
}

describe("FormAddTodo.vue", () => {

  it("testing", () => {
    const wrapper = mount(FormAddTodo, {})

    wrapper.vm.emitAddTodo(todoData)

    expect(wrapper.vm).toBeTruthy()
    expect(wrapper.is(FormAddTodo)).toBeTruthy()
    expect(wrapper.emitted().addTodo).toEqual([[todoData]])
  })

})
