import "@testing-library/jest-dom"
import { render } from "@testing-library/vue"
import Vuex from "vuex"

import TodoPage from "@/views/TodoPage.vue"

describe("TodoPage.vue", () => {
	let store: any

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

	it("testing computed", () => {
		const {
			getByTestId,
		} = render(TodoPage, {
			store
		})


		const todoContainer = getByTestId("todo-container")

		expect(todoContainer.childNodes.length).toBe(2)
	})
})