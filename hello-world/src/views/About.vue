<template>
<div>
  <h1> About Page</h1>
  <xers9 title='About Title'>
    <template #header="xers9">
      <p>header by about {{xers9.xers9}}</p>
    </template>
    <template v-slot:body>
      <p>Body by about</p>
    </template>
    <template v-slot:footer>
      <p>footer by about</p>
    </template>
    <template #default>
      <p> Default by about</p>
    </template>
    
  </xers9>
</div>  
</template>

<script>
import xers9 from '@/components/xers9.vue';

export default {
  components: {
    xers9
  },
  data() {
    return {
      name: 'xers9',
      xer9: 'my data'
    }
  }

}
</script>

<style scoped>
h1 {
  color: blue;
}

</style>