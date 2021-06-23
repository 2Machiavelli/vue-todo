<template>
	<div class="text-center">
		<v-btn
			class="mr-2 ml-2"
			color="warning"
			@click="dialog = true"
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
					ref="formEditTodo"
					v-model="valid"
					fluid
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
						@click="saveChanges"
					>
						Save
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

import { mapActions } from "vuex"
 
export default {
	props: {
		todo: {
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

	watch: {
		dialog: function(val) {
			if (!val) {
				this.$
			}
		}
	},

	created() {
		this.title = this.todo.title
		this.description = this.todo.description
	},

	

	methods: {
		...mapActions([
			"editTodo"
		]),
		
		closeDialog() {
			this.dialog = false
		},

		reset() {
			this.$refs.formEditTodo.reset()
		},

		saveChanges() {
			if (!this.$refs.formEditTodo.validate()) return

			if (
				(this.title === this.todo.title) &&
				(this.description === this.todo.description)
			) return this.closeDialog()

			this.editTodo({
				...this.todo,
				title: this.title,
				description: this.description,
				date: Date.now()
			})

			this.closeDialog()
		}
	}
}
</script> 