<template>
  <div class="home">
    <ul>
        <li
          v-for="( todo, index ) in getTodos"
          :key="index"
        >
          {{ todo.text }}
        </li>
    </ul>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {

	computed: {
		...mapGetters([
			"getTodos"
		])
	}

}
</script>

<style lang="stylus">
</style>