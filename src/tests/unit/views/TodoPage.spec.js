import { mount, shallowMount } from "@vue/test-utils"
import Vuex from "vuex"

import TodoPage from "@/views/TodoPage.vue"

import DialogEditTodo from "@/components/DialogEditTodo.vue"
import FormAddTodo from "@/components/FormAddTodo.vue"
import Todo from "@/components/Todo.vue"


describe("TodoPage.vue", () => {
	let store

	beforeEach(() => {
		store = new Vuex.Store({
			state: {
				todos: [
					{
						id: "G48a_bJwSi0SB6xSeJOtK", 
						title: "titleOne", 
						description: "descriptionOne", 
						date: 1624471319925
					},
					{
						id: "G48a_bJwSi0SB6xSeJOtm", 
						title: "titleTwo", 
						description: "descriptionTwo", 
						date: 1624471319928
					}
										
				]
			},
			getters: {
				getAllTodos(state) {
					return state.todos
				}
			}
		})
	})
	

	it("testing component", () => {
		const wrapper = shallowMount(TodoPage, {
			store
		})

		expect(wrapper.vm).toBeTruthy()
		expect(wrapper.is(TodoPage)).toBeTruthy()
		
	})

	it("testing child components", () => {
		const wrapper = mount(TodoPage, {
			store
		})


		expect(wrapper.findComponent(DialogEditTodo).exists()).toBe(true)
		expect(wrapper.findComponent(FormAddTodo).exists()).toBe(true)
		expect(wrapper.findComponent(Todo).exists()).toBe(true)
	})

	it("testing computed", () => {
		const wrapper = mount(TodoPage, {
			store
		})

		expect(wrapper.vm.allTodosSortedByDate).toEqual([
			{
				id: "G48a_bJwSi0SB6xSeJOtK", 
				title: "titleOne", 
				description: "descriptionOne", 
				date: 1624471319925
			},
			{
				id: "G48a_bJwSi0SB6xSeJOtm", 
				title: "titleTwo", 
				description: "descriptionTwo", 
				date: 1624471319928
			}
								
		].reverse())
	})

})