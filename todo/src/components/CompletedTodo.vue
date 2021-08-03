<template>
    <div>
        Completed Todo: {{ numbercompletedTodo}}
    </div>
</template>

<script>
export default {
    props: {
        todos: {
            type: Array,
            required: true
        }
    },
    computed: {
        numbercompletedTodo() {
            return this.todos.filter(todo => todo.checked).length;
        }
    }
}
</script>

<style scoped>

</style>