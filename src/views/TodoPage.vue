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
				<todo-form
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
			>
				<todo
					v-for="todo in getAllTodos"
					:key="todo.id"
					:todo-data="todo"
					@deleteTodo="deleteTodo"
					@completeTodo="completeTodo"
				/>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>

import { mapGetters, mapActions } from "vuex"

import TodoForm from "../components/FormTodo.vue"
import Todo from "../components/Todo.vue"

export default {
	components: {
		"todo-form": TodoForm,
		"todo": Todo,
	},

	computed: {
		...mapGetters([
			"getAllTodos"
		])
	},

	methods: {
		...mapActions([
			"addTodo",
			"deleteTodo",
			"completeTodo"
		])
	}
}
</script>