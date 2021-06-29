import { expect } from "@jest/globals"
import { mount, shallowMount } from "@vue/test-utils"

import FormAddTodo from "@/components/FormAddTodo.vue"

describe("FormAddTodo.vue", () => {

	it("testing component", () => {
		const wrapper: any = mount(FormAddTodo)

		expect(wrapper.vm).toBeTruthy()
		expect(wrapper.is(FormAddTodo)).toBeTruthy()
	})

	it("testing submit", () => {
		const wrapper: any = shallowMount(FormAddTodo)

		wrapper.setData({
			title: "newTitle",
			description: "newDescription"
		})

		wrapper.vm.$nextTick()

		wrapper.vm.$refs.form.validate = () => true
		wrapper.vm.$refs.form.reset = () => true

		wrapper.vm.handleSubmit()

		expect(wrapper.emitted().addTodo).toBeTruthy()
	})

})
