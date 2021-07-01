import "@testing-library/jest-dom"
import { render, fireEvent } from "@testing-library/vue"

import FormAddTodo from "@/components/FormAddTodo.vue"

describe("FormAddTodo.vue", () => {
	test("testing input data", async () => {
		const {
			getByTestId,
			debug,
		} = render(FormAddTodo)

		const titleInput: any = getByTestId("form_add-title-input")
		const descriptionInput: any = getByTestId("form_add-description-input")

		await fireEvent.update(titleInput, "title")
		await fireEvent.update(descriptionInput, "description")

		expect(titleInput.value).toBe("title")
		expect(descriptionInput.value).toBe("description")
	})



	test("testing submit", async () => {
		const {
			getByTestId,
			emitted,
		} = render(FormAddTodo, {
			data: () => ({
				title: "title",
				description: "description"
			})
		})

		const submitBtn: any = getByTestId("form_add-submit-btn")

		await fireEvent.click(submitBtn)
		
		expect(emitted().addTodo[0][0].title).toBe("title")
		expect(emitted().addTodo[0][0].description).toBe("description")
	})
})