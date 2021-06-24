import { expect } from "@jest/globals"
import { mount } from "@vue/test-utils"

import TodoPage from "../../views/TodoPage.vue"

const todoData = {
  id: "G48a_bJwSi0SB6xSeJOtK", 
  title: "title", 
  description: "description", 
  date: 1624471319925
}


describe("Todo.vue", () => {
  const $store = {
    state: {

    },
    getters: {
      getAllTodos() {
        return []
      }
    }
  }


  const wrapper = mount(TodoPage, {
    mocks: {
      $store
    },
    propsData: { 
      todoData 
    }
  })

  it("testing props", () => {

    expect(wrapper.vm).toBeTruthy()
    expect(wrapper.is(TodoPage)).toBeTruthy()
    
  })

})