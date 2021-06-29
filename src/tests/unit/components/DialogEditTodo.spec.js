import { expect } from "@jest/globals"
import { mount, shallowMount } from "@vue/test-utils"

import DialogEditTodo from "@/components/DialogEditTodo.vue"


const todoData = {
	id: "G48a_bJwSi0SB6xSeJOtu", 
	title: "title", 
	description: "description", 
	date: 1624471319925
}


describe("DialogEditTodo.vue", () => {

	it("testing component", () => {
		const wrapper = shallowMount(DialogEditTodo)

		expect(wrapper.vm).toBeTruthy()
		expect(wrapper.is(DialogEditTodo)).toBeTruthy()
	})

	it("testing props", () => {
		const wrapper = shallowMount(DialogEditTodo, {
			propsData: {
				"editingTodoData": todoData
			}
		})

		expect(wrapper.vm.title).toBe("title")
		expect(wrapper.vm.description).toBe("description")
	})

	it("testing submit", () => {
		const wrapper = shallowMount(DialogEditTodo)

		wrapper.setData({
			title: "newTitle",
			description: "newDescription"
		})

		wrapper.vm.$nextTick()

		wrapper.vm.$refs.form.validate = () => true

		wrapper.vm.handleSubmit()

		expect(wrapper.emitted().editTodo).toBeTruthy()
	})

	it("testing open/close", () => {
		const wrapper = mount(DialogEditTodo)

		wrapper.vm.openDialog()

		expect(wrapper.vm.dialog).toBeTruthy()

		wrapper.vm.closeDialog()

		expect(wrapper.vm.dialog).toBeFalsy()
	})

})