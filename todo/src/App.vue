<template>
  <div id="app" class="container">
    <h1 calss="text-center"> Todo App</h1>
    <CompletedTodo :todos="todos"/>
    <AddTodo 
      @add-todo="addTodo"
    />
    <hr>
    <TodoList 
      :todos="todos"
      @toggle-checkbox="toggleCheckbox"
      @click-delete="deleteTodo" 
    />

  </div>
</template>

<script>
import TodoList from '@/components/TodoList.vue';
import AddTodo from '@/components/AddTodo.vue';
import CompletedTodo from '@/components/CompletedTodo.vue';

export default {
  components: {
    TodoList,
    AddTodo,
    CompletedTodo
  },
  data() {
    return {
      todos: [
        { id: 1, text: 'buy a car', checked: false},
        { id: 2, text: 'buy a bike', checked: true},
        { id: 3, text: 'buy a pencil', checked: false},
      ]
    }
  },
  methods: {
    addTodo(newText) {
      this.todos.push({
        id: Math.random(),
        text: newText,
        checked: false
      });
      
    },
    toggleCheckbox( {id, checked})
    {
      console.log (id, checked);
      const index = this.todos.findIndex(todo => {
        return todo.id === id;
      });
      this.todos[index].checked = checked;
    },
    deleteTodo(id)
    {
      const index = this.todos.findIndex(todo => {
        return todo.id === id;
      });
      this.todos.splice(index, 1);
    }
  }

}
</script>

<style scoped>

</style>