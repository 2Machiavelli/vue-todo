import { expect } from "@jest/globals"
import { mount } from "@vue/test-utils"

import FormTodo from "../../components/FormTodo.vue"

const todoData = {
  id: "G48a_bJwSi0SB6xSeJOtK", 
  title: "title", 
  description: "description", 
  date: 1624471319925
}

describe("FormTodo.vue", () => {
  const $store = {
    state: {

    },
    getters: {
      getAllTodos() {
        return []
      }
    }
  }

  const wrapper = mount(FormTodo, {
    mocks: {
      $store
    },
    propsData: { 
      todoData,
    }
  })

  it("FormTodo html", () => {

    console.log(wrapper.html())

    expect(wrapper.vm).toBeTruthy()
    expect(wrapper.is(FormTodo)).toBeTruthy()

    // expect(wrapper.find(".v-card__title").text()).toBe("title")
    // expect(wrapper.find(".v-card__subtitle").text()).toBe(Todo.computed.getDate.call({todoData}))
    // expect(wrapper.find(".v-card__text").text()).toBe("description")

  })

  // it("FormTodo emit", () => {

  //   wrapper.vm.emitDeleteTodo()
  //   wrapper.vm.emitCompleteTodo()

  //   expect(wrapper.emitted().deleteTodo).toEqual([[todoData]])
  //   expect(wrapper.emitted().completeTodo).toEqual([[todoData]])
  // })
})
