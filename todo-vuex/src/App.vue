<template>
  <div id="app" class="container">
    <h1 calss="text-center"> Todo App</h1>
    <CompletedTodo/>
    <AddTodo 
      @add-todo="addTodo"
    />
    <hr>
    <TodoList
      @toggle-checkbox="toggleCheckbox"
      @click-delete="deleteTodo" 
    />
    <UserList />

  </div>
</template>

<script>
import TodoList from '@/components/TodoList.vue';
import AddTodo from '@/components/AddTodo.vue';
import CompletedTodo from '@/components/CompletedTodo.vue';
import UserList from '@/components/userlist.vue';

export default {
  components: {
    TodoList,
    AddTodo,
    CompletedTodo,
    UserList
  }

}
</script>

<style scoped>

</style>