<template>
    <div>
        Completed Todo: {{ numbercompletedTodo}}
    </div>
</template>

<script>
export default {
    computed: {
        todos() {
            return this.$store.state.todos;
        },
        numbercompletedTodo() {
            return this.$store.getters.numbercompletedTodo;
        }
    }
}
</script>

<style scoped>

</style>