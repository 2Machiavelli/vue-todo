import "@testing-library/jest-dom"
import { render, fireEvent } from "@testing-library/vue"

import Todo from "@/components/Todo.vue"

const todoData = {
	id: "G48a_bJwSi0SB6xSeJOtl", 
	title: "title", 
	description: "description", 
	date: 1624471319925
}


describe("Todo.vue", () => {
	test("testing props", async () => {
		const {
			getByTestId,
		} = render(Todo, {
			props: {
				todoData
			}
		})

		expect(getByTestId("todo-title")).toHaveTextContent("title")
		expect(getByTestId("todo-date")).toHaveTextContent("6/23/2021 | 21:01")
		expect(getByTestId("todo-description")).toHaveTextContent("description")
	})

	test("testing methods", async () => {
		const {
			getByTestId,
			emitted,
		} = render(Todo, {
			props: {
				todoData
			}
		})

		const completeBtn: any = getByTestId("todo-complete-btn")
		const deleteBtn: any = getByTestId("todo-delete-btn")

		await fireEvent.click(completeBtn, todoData)
		await fireEvent.click(deleteBtn, todoData)

		expect(emitted().completeTodo).toEqual([[ todoData ]])
		expect(emitted().deleteTodo).toEqual([[ todoData ]])
	})
})
