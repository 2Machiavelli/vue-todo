export default {
	state: () => ({
		todos: [
			{
				id: 392,
				text: "something",
				status: false,
				data: Date.now()
			},
			{
				id: 465,
				text: "something",
				status: false,
				data: Date.now()
			},
			{
				id: 1452,
				text: "something",
				status: false,
				data: Date.now()
			}
		]
	}),
	getters: {
		getTodos(state) {
			return state.todos
		}
	},
	mutations: { },
	actions: { },
}