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
			data-testid="form_add-title-input"
		></v-text-field>
		<v-text-field
			v-model="description"
			label="Description"
			data-testid="form_add-description-input"
		></v-text-field>
		<v-btn
			color="success"
			class="mr-4"
			type="submit"
			data-testid="form_add-submit-btn"
		>
			Add
		</v-btn>
		<v-btn
			color="warning"
			class="mr-4"
			data-testid="form_add-reset-btn"
			@click="reset"
		>
			Reset
		</v-btn>
	</v-form>
</template>

<script lang="ts">

import Vue from "vue"
import { nanoid }from "nanoid"

export default Vue.extend ({
	data: () => ({
		title: "",
		description: "",
		valid: true,
		titieRules: [
			(v: any) => !!String(v).trim() || "Title is required",
			(v: any) => (v && v.length <= 50) || "Title must be not more than 50 characters"
		]
	}),

	methods: {
		handleSubmit(): void {
			if (!this.validate("form")) return

			if (this.validate("form")) {

				this.emitAddTodo({
					id: nanoid(),
					title: this.title,
					description: this.description,
					date: Date.now()
				})
				
				this.reset("form")
				return
			}
		},

		emitAddTodo(todoData: any): void {
			this.$emit("addTodo", todoData)
		},

		validate(el: string): boolean {
			const refEl: any = this.$refs[el]

			return refEl.validate()
		},

		reset(el: string): void {
			const refEl: any = this.$refs[el]

			refEl.reset()
		}
	}
})
</script>