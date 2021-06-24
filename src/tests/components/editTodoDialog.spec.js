import { expect } from "@jest/globals"
import { mount } from "@vue/test-utils"

import EditTodoDialog from "../../components/EditTodoDialog.vue"

const todoData = {
  id: "G48a_bJwSi0SB6xSeJOtK", 
  title: "title", 
  description: "description", 
  date: 1624471319925
}


describe("EditTodoDialog.vue", () => {
  const wrapper = mount(EditTodoDialog, {
    propsData: { 
      todoData 
    }
  })

  it("EditTodoDialog html", () => {

    expect(wrapper.vm).toBeTruthy()
    expect(wrapper.is(EditTodoDialog)).toBeTruthy()

  })
})
