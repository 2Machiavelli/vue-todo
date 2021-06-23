<template>
	<v-form
		ref="formAddTodo"
		v-model="valid"
		lazy-validation
	>
		<v-text-field
			v-model="title"
			:counter="50"
			label="Title*"
			:rules="titieRules"
			required
		></v-text-field>
		<v-text-field
			v-model="description"
			label="Description"
			required
		></v-text-field>
		<v-btn
			color="success"
			class="mr-4"
			@click="emitAddTodo"
		>
			Add
		</v-btn>
		<v-btn
			color="error"
			class="mr-4"
			@click="reset"
		>
			Reset Form
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
		emitAddTodo() {
			if (!this.$refs.formAddTodo.validate()) return

			this.$emit("addTodo", {
				id: nanoid(),
				title: this.title,
				description: this.description,
				date: Date.now()
			})
			
			this.reset()
		},

		reset () {
			this.$refs.formAddTodo.reset()
		},
	}
}
</script>