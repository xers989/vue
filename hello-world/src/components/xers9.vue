<template>
<div>
  <h1> {{title}} </h1>
  <p> {{ name}} </p><br>
  <button @click="updateName"> Change Name </button>
</div>  
</template>

<script>
export default {
      props: {
          title: {
              type: String,
              required: false,
              default: 'Default Value'
          }
      },

      data() {
          return {
              name: 'xers9',
          }
      },
      methods: {
          updateName() {
              this.name = 'My name is xers9'
          }
      }
}
</script>

<style scoped>
h1 {
  color: black;
}

</style>