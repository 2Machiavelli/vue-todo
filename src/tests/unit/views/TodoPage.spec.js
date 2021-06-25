import { expect } from "@jest/globals"
import { mount, shallowMount } from "@vue/test-utils"

import TodoPage from "@/views/TodoPage.vue"


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


  

  it("testing", () => {
    const wrapper = shallowMount(TodoPage, {
      mocks: {
        $store
      }
    })

    expect(wrapper.vm).toBeTruthy()
    expect(wrapper.is(TodoPage)).toBeTruthy()
    expect(wrapper.find("form-add-todo-stub").exists()).toBeTruthy()
    
  })

})