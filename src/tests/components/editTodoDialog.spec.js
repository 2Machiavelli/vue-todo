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

    // expect(wrapper.find(".v-card__title").text()).toBe("title")
    // expect(wrapper.find(".v-card__subtitle").text()).toBe(Todo.computed.getDate.call({todoData}))
    // expect(wrapper.find(".v-card__text").text()).toBe("description")

  })

  // it("EditTodoDialog emit", () => {

  //   wrapper.vm.emitDeleteTodo()
  //   wrapper.vm.emitCompleteTodo()

  //   expect(wrapper.emitted().deleteTodo).toEqual([[todoData]])
  //   expect(wrapper.emitted().completeTodo).toEqual([[todoData]])
  // })
})
