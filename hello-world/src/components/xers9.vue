<template>
<div>
  <p>Header</p>
  <slot name="header" :xers9="xers9"></slot>
  <p>Body</p>
  <slot name="body"></slot>
  <slot></slot>
  <p>footer</p>
  <slot name="footer"></slot>
  <slot>
  </slot>
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
              xers9: 'My return data'
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