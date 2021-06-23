<template>
	<v-card
		class="mx-auto mt-4"
		outlined
	>
		<v-card-title>
			{{ todoData.title }}
		</v-card-title>
		<v-card-subtitle>
			{{ new Date(todoData.date).toDateString() }}
		</v-card-subtitle>
		<v-card-text>
			{{ todoData.description }}
		</v-card-text>
		<v-card-actions>
			<v-btn 
				color="success"
				@click="emitCompleteTodo"
			> 
				Complete
			</v-btn>
			<edit-todo-dialog 
				:todo="todoData"
			/>
			<v-btn
				color="error"
				@click="emitDeleteTodo"
			>
				Delete
			</v-btn>
		</v-card-actions>
	</v-card>
</template>

<script>

import EditTodoDialog from "./EditTodoDialog.vue"

export default {
	components: {
		"edit-todo-dialog": EditTodoDialog
	},

	props: {
		"todoData": {
			type: Object,
			default: () => ({})
		}
	},

	watch: {
		todoData: function () {
			this.$forceUpdate()
		}
	},

	methods: {
		emitDeleteTodo() {
			this.$emit("deleteTodo", this.todoData)
		},
		
		emitCompleteTodo() {
			this.$emit("completeTodo", this.todoData)
		}
	}
}
</script>