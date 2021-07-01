<template>
	<div 
		class="text-center"
	>
		<v-btn
			ref="btn"
			class="mr-2 ml-2"
			color="warning"
			@click="openDialog"
		>
			Edit
		</v-btn>
		<v-dialog
			v-model="dialog"
			persistent
			width="600"
		>
			<v-card
				class="spacing-playground pa-3"
			>
				<v-form
					ref="form"
					v-model="valid"
					fluid
					lazy-validation
					@submit.prevent="handleSubmit"
				>
					<v-text-field
						v-model="title"
						:counter="50"
						label="Title*"
						:rules="titieRules"
						required
						data-testid="dialog_edit-title-input"
					></v-text-field>
					<v-text-field
						v-model="description"
						label="Description"
						data-testid="dialog_edit-description-input"
					></v-text-field>
					<v-btn
						color="success"
						class="mr-4"
						type="submit"
						data-testid="dialog_edit-submit-btn"
					>
						Save
					</v-btn>
					<v-btn
						color="warning"
						class="mr-4"
						@click="reset"
						data-testid="dialog_edit-reset-btn"
					>
						Reset
					</v-btn>
					<v-btn
						color="error"
						class="mr-4"
						@click="closeDialog"
					>
						Cancel
					</v-btn>
				</v-form>
			</v-card>
		</v-dialog>
	</div>
</template>

<script lang="ts">

import Vue from "vue"
 
export default Vue.extend ({
	props: {
		editingTodoData: {
			type: Object,
			default: () => ({})
		}
	},

	data: () => ({
		dialog: false,
		title: "",
		description: "",
		valid: true,
		titieRules: [
			(v: any) => !!String(v).trim() || "Title has to be not empty",
			(v: any) => (v && v.length <= 50) || "Title must be not more than 50 characters"
		]
	}),

	created() {
		this.title = this.editingTodoData.title
		this.description = this.editingTodoData.description
	},

	methods: {
		handleSubmit(): void {
			if (
				(this.title === this.editingTodoData.title) &&
				(this.description === this.editingTodoData.description)
			) {
				this.closeDialog()
				return
			}

			if (!this.validate("form")) return

			this.emitEditTodo({
				id: this.editingTodoData.id,
				title: this.title,
				description: this.description,
				date: Date.now()
			})

			this.closeDialog()
		},

		emitEditTodo(todoData: any): void {
			this.$emit("editTodo", todoData)
		},

		openDialog(): void {
			this.dialog = true
		},

		closeDialog(): void {
			this.dialog = false
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