<template>
	<v-form
		ref="form"
		v-model="valid"
		lazy-validation
		@submit.prevent="handleSubmit"
	>
		<v-text-field
			v-model="title"
			:counter="50"
			label="Title*"
			:rules="titieRules"
			required
			data-todo-title
		></v-text-field>
		<v-text-field
			v-model="description"
			label="Description"
			required
		></v-text-field>
		<v-btn
			color="success"
			class="mr-4"
			type="submit"
		>
			Add
		</v-btn>
		<v-btn
			color="warning"
			class="mr-4"
			@click="reset"
		>
			Reset
		</v-btn>
	</v-form>
</template>

<script>

import { nanoid }from "nanoid"

export default {
	data: () => ({
		title: "",
		description: "",
		valid: true,
		titieRules: [
			v => !!String(v).trim() || "Title is required",
			v => (v && v.length <= 50) || "Title must be not more than 50 characters"
		]
	}),

	methods: {
		handleSubmit() {
			if (!this.$refs.form.validate()) return false

			if (this.$refs.form.validate()) {
				const todoData = {
					id: nanoid(),
					title: this.title,
					description: this.description,
					date: Date.now()
				}

				this.emitAddTodo(todoData)
				
				this.reset()

				return true
			}
		},

		emitAddTodo(todoData) {
			this.$emit("addTodo", todoData)
		},

		reset () {
			this.$refs.form.reset()
		},
	}
}
</script>