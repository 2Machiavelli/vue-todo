<template>
	<v-card
		class="mx-auto mt-4"
		outlined
	>
		<v-card-title
			data-testid="todo-title" 
		>
			{{ todoData.title }}
		</v-card-title>
		<v-card-subtitle
			data-testid="todo-date" 
		>
			{{ getDate }}
		</v-card-subtitle>
		<v-card-text
			data-testid="todo-description" 
		>
			{{ todoData.description }}
		</v-card-text>
		<v-card-actions>
			<v-btn 
				color="success"
				@click="emitCompleteTodo"
				data-testid="todo-complete-btn"
			> 
				Complete
			</v-btn>
			<slot
				name="dialogEditTodo"
			/>
			<v-btn
				color="error"
				@click="emitDeleteTodo"
				data-testid="todo-delete-btn"
			>
				Delete
			</v-btn>
		</v-card-actions>
	</v-card>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend ({
	props: {
		"todoData": {
			type: Object,
			default: () => ({})
		}
	},

	computed: {
		getDate(): string {
			const todoDate = new Date(this.todoData.date) 

			const minutes =  todoDate.getMinutes() >= 10 ? todoDate.getMinutes() : `0${ todoDate.getMinutes() }`

			return `${ todoDate.toLocaleDateString() } | ${ todoDate.getHours() }:${ minutes }`
		}
	},

	methods: {
		emitDeleteTodo(): void {
			this.$emit("deleteTodo", this.todoData)
		},
		
		emitCompleteTodo(): void {
			this.$emit("completeTodo", this.todoData)
		}
	}
})
</script>