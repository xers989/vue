<template>
<div>
  <h1> About Page</h1>
  <xers9 title='About Title'></xers9>
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
      name: 'xers9'
    }
  }

}
</script>

<style scoped>
h1 {
  color: blue;
}

</style>