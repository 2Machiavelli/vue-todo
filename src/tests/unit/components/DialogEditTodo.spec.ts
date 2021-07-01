import "@testing-library/jest-dom"
import vuetify from "@/plugins/vuetify"
import { render, fireEvent } from "@testing-library/vue"

import DialogEditTodo from "@/components/DialogEditTodo.vue"

const todoData = {
	id: "G48a_bJwSi0SB6xSeJOtl", 
	title: "title", 
	description: "description", 
	date: 1624471319925
}

describe("DialogEditTodo.vue", () => {
	test("testing props", () => {
		const {
			getByTestId,
		} = render(DialogEditTodo, {
			vuetify,
			propsData: {
				editingTodoData: todoData
			},
			data: () => ({
				dialog: true
			})
		})

		const titleInput: any = getByTestId("dialog_edit-title-input")
		const descriptionInput: any = getByTestId("dialog_edit-description-input")

		expect(titleInput.value).toBe("title")
		expect(descriptionInput.value).toBe("description")
	})

	test("testing input data", async () => {
		const {
			getByTestId,
		} = render(DialogEditTodo, {
			vuetify,
			data: () => ({
				dialog: true
			})
		})

		const titleInput: any = getByTestId("dialog_edit-title-input")
		const descriptionInput: any = getByTestId("dialog_edit-description-input")

		await fireEvent.update(titleInput, "newTitle")
		await fireEvent.update(descriptionInput, "newDescription")

		expect(titleInput.value).toBe("newTitle")
		expect(descriptionInput.value).toBe("newDescription")
	})

	test("testing submit", async () => {
		const {
			getByTestId,
			emitted,
		} = render(DialogEditTodo, {
			vuetify,
			data: () => ({
				dialog: true
			}),
			propsData: {
				editingTodoData: todoData
			},
		})

		const titleInput: any = getByTestId("dialog_edit-title-input")
		const descriptionInput: any = getByTestId("dialog_edit-description-input")
		const submitBtn: any = getByTestId("dialog_edit-submit-btn")

		await fireEvent.update(titleInput, "newTitle")
		await fireEvent.update(descriptionInput, "newDescription")
		await fireEvent.click(submitBtn)
		
		expect(emitted().editTodo[0][0].title).toBe("newTitle")
		expect(emitted().editTodo[0][0].description).toBe("newDescription")
	})
})