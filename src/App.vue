<template>
	<v-app>
		<v-main>
			<todo-page />
		</v-main>
	</v-app>
</template>

<script>

import TodoPage from "./views/TodoPage.vue"

export default {
	components: {
		"todo-page": TodoPage
	}
}
</script>
