import { mount } from "@vue/test-utils"

import Todo from "@/components/Todo.vue"

const todoData = {
	id: "G48a_bJwSi0SB6xSeJOtl", 
	title: "title", 
	description: "description", 
	date: 1624471319925
}


describe("Todo.vue", () => {
	it("html testing", () => {
		const wrapper: any = mount(Todo, {
			propsData: { 
				todoData 
			}
		})
		
		expect(wrapper.vm).toBeTruthy()
		expect(wrapper.is(Todo)).toBeTruthy()
		expect(wrapper.vm.getDate).toBeTruthy()
		expect(wrapper.find(".v-card__title").text()).toBe("title")
		expect(wrapper.find(".v-card__subtitle").text()).toBe(wrapper.vm.getDate)
		expect(wrapper.find(".v-card__text").text()).toBe("description")
	})


	it("methods testing", () => {
		const wrapper: any = mount(Todo, {
			propsData: { 
				todoData 
			}
		})

		wrapper.vm.emitDeleteTodo()
		wrapper.vm.emitCompleteTodo()

		expect(wrapper.emitted().deleteTodo).toEqual([[todoData]])
		expect(wrapper.emitted().completeTodo).toEqual([[todoData]])
	})

})
