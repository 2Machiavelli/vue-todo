import { expect } from "@jest/globals"
import todosModule from "@/store/modules/Todos"
import { Store } from "vuex"


const todoDataOne: any = {
	id: "G48a_bJwSi0SB6xSeJOtu", 
	title: "title", 
	description: "description", 
	date: 1624471319925
}

const todoDataTwo: any = {
	id: "G48a_bJwRi0SB6xSeJOtu", 
	title: "title", 
	description: "description", 
	date: 1624471319925
}



describe("Todos.js", () => {
	let store: any

	beforeEach(() => {
		store = new Store({
			modules: {
				todos: {
					...todosModule,
					state: {
						todos: [
							todoDataOne
						],
						completedTodos: []
					}
				}
			}
		})
	});

	it("get todos", () => {
		expect(store.getters.getAllTodos).toEqual([
			todoDataOne
		])
	})

	it("add todo", () => {
		store.commit("updateTodos", {
			action: "add",
			todo: todoDataTwo
		})

		expect(store.getters.getAllTodos.length).toBe(2)
	})

	it("delete todo", () => {
		store.commit("updateTodos", {
			action: "delete",
			todo: todoDataOne
		})

		expect(store.getters.getAllTodos.length).toBe(0)
	})

	it("complete todo", () => {
		store.commit("updateTodos", {
			action: "complete",
			todo: todoDataOne
		})

		expect(store.getters.getAllTodos.length).toBe(0)
		expect(store.getters.getAllCompletedTodos.length).toBe(1)
	})

	it("edit todo", () => {
		store.commit("updateTodos", {
			action: "edit",
			todo: {
				...todoDataOne,
				title: "newTitle"
			}
		})

		expect(store.getters.getAllTodos[0].title).toBe("newTitle")
	})
})