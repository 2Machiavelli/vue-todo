export default {
	state: () => ({
		todos: [],
		completedTodos: []
	}),
	getters: {
		getAllTodos(state) {
			return state.todos
		}
	},
	mutations: {
		updateTodos(state, { action, todo }) {
			if (action === "add") {
				state.todos = [ todo, ...state.todos ]
			}

			if (action === "complete") {
				state.completedTodos = [ todo, ...state.completedTodos ]

				state.todos = state.todos.filter(item => item.id != todo.id )
			}

			if (action === "edit") {
				state.todos = state.todos.map(item => {
					if (item.id === todo.id) {
						return todo
					}

					return item
				})
			}

			if (action === "delete") {
				state.todos = state.todos.filter(item => item.id != todo.id )
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