<template>
	<v-app>
		<v-main>
			<todo-page />
		</v-main>
	</v-app>
</template>

<script lang="ts">

import Vue from "vue";

import TodoPage from "./views/TodoPage.vue"

export default Vue.extend ({
	components: {
		"todo-page": TodoPage
	}
})
</script>
