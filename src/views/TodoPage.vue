<template>
	<v-container
		fluid
	>
		<v-row
			justify="center"
		>
			<v-col
				cols="6"
				align-self="center"
			>
				<form-add-todo
					@addTodo="addTodo"
				/>
			</v-col>
		</v-row>
		<v-divider
			class="mt-4"
		></v-divider>
		<v-row
			justify="center"
		>
			<v-col
				cols="6"
				align-self="center"
				data-testid="todo-container"
			>
				<todo
					v-for="todo in allTodosSortedByDate"
					:key="todo.id"
					:todo-data="todo"
					@deleteTodo="deleteTodo"
					@completeTodo="completeTodo"
				>
					<dialog-edit-todo
						slot="dialogEditTodo"
						:editing-todo-data="todo"
						@editTodo="editTodo"
					/>
				</todo>
			</v-col>
		</v-row>
	</v-container>
</template>

<script lang="ts">

import Vue from "vue"
import { mapGetters, mapActions } from "vuex"
import DialogEditTodo from "../components/DialogEditTodo.vue"
import FormAddTodo from "../components/FormAddTodo.vue"
import Todo from "../components/Todo.vue"

export default Vue.extend ({
	components: {
		"dialog-edit-todo": DialogEditTodo,
		"form-add-todo": FormAddTodo,
		"todo": Todo,
	},

	computed: {
		...mapGetters([
			"getAllTodos"
		]),


		allTodosSortedByDate() {
			const allTodos = [...this.getAllTodos]

			return allTodos.sort((a, b) =>  b.date - a.date)
		}
	},

	methods: {
		...mapActions([
			"addTodo",
			"completeTodo",
			"editTodo",
			"deleteTodo"
		])
	}
})
</script>