import { Module } from "vuex"

const todosModule: Module<any, any> = {
	state: () => ({
		todos: [],
		completedTodos: []
	}),
	getters: {
		getAllTodos(state: any): any {
			return state.todos
		},
		getAllCompletedTodos(state: any): any {
			return state.completedTodos
		}
	},
	mutations: {
		updateTodos(state: any, { action, todo }) {
			if (action === "add") {
				state.todos = [ todo, ...state.todos ]
			}

			if (action === "complete") {
				state.completedTodos = [ todo, ...state.completedTodos ]

				state.todos = state.todos.filter((item: any) => item.id != todo.id )
			}

			if (action === "edit") {
				state.todos = state.todos.map((item: any) => {
					if (item.id === todo.id) {
						return todo
					}

					return item
				})
			}

			if (action === "delete") {
				state.todos = state.todos.filter((item: any) => item.id != todo.id )
			}
		}
	},
	actions: {
		async addTodo({commit}, todo) {
			commit("updateTodos", {
				action: "add",
				todo
			})
		},

		async completeTodo({commit}, todo) {
			commit("updateTodos", {
				action: "complete",
				todo
			})
		},

		async editTodo({commit}, todo) {
			commit("updateTodos", {
				action: "edit",
				todo
			})
		},
		
		async deleteTodo({commit}, todo) {
			commit("updateTodos", {
				action: "delete",
				todo
			})
		}
	}
}



export default todosModule