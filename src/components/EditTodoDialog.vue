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
			<v-card>
				<v-card-text>
					<v-container>
						<v-row>
							<v-col cols="12">
								<v-text-field
									v-model="title"
									label="Title"
									:counter="50"
									required
								></v-text-field>
							</v-col>
							<v-col cols="12">
								<v-text-field
									v-model="description"
									label="Desctiprion"
									required
								></v-text-field>
							</v-col>
						</v-row>
					</v-container>
				</v-card-text>
				<v-card-actions>
					<v-btn
						color="success"
						@click="saveChanges"
					>
						Save
					</v-btn>
					<v-btn
						color="error"
						@click="dialog = false"
					>
						Close
					</v-btn>
				</v-card-actions>
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
		description: ""
	}),

	created() {
		this.title = this.todo.title
		this.description = this.todo.description
	},

	methods: {
		...mapActions([
			"editTodo"
		]),
		
		saveChanges() {
			this.editTodo({
				...this.todo,
				title: this.title,
				description: this.description,
				date: Date.now()
			})
			this.dialog = false
		}
	}
}
</script>