<template>
	<div 
		class="text-center"
		data-app
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
						Save
					</v-btn>
					<v-btn
						color="warning"
						class="mr-4"
						@click="reset"
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

<script>
 
export default {
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
			v => !!String(v).trim() || "Title has to be not empty",
			v => (v && v.length <= 50) || "Title must be not more than 50 characters"
		]
	}),

	created() {
		this.title = this.editingTodoData.title
		this.description = this.editingTodoData.description
	},

	methods: {
		handleSubmit() {
			if (
				(this.title === this.editingTodoData.title) &&
				(this.description === this.editingTodoData.description)
			) {
				this.closeDialog()
				return
			}

			if (!this.$refs.form.validate()) return

			this.emitEditTodo({
				id: this.editingTodoData.id,
				title: this.title,
				description: this.description,
				date: Date.now()
			})

			this.closeDialog()
			return
		},

		emitEditTodo(todoData) {
			this.$emit("editTodo", todoData)
		},

		openDialog() {
			this.dialog = true
		},

		closeDialog() {
			this.dialog = false
		},

		reset () {
			this.$refs.form.reset()
		}
	}
}
</script> 