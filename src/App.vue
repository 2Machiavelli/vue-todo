<template>
  <div>
    <todo-list></todo-list>
  </div>
</template>

<script>

import TodoList from "./views/TodoList.vue"

export default {
  components: {
    "todo-list": TodoList
  }
}
</script>

<style>

</style>