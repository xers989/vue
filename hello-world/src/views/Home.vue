<template>
<div>
  <h1> Xers9 World Home</h1>
  <form action="">
    <inputfile :name='name' @update-name="updateName"></inputfile>
    <button>Submit</button>
  </form>
  {{name}}
  <xers9 title='Home Component Title'></xers9>
</div>  
</template>


<script>
import xers9 from '@/components/xers9.vue';
import inputfile from '@/components/inputFile.vue';

export default {
  components: {
    xers9,
    inputfile
  },
  data() {
    return {
      name: 'xers989'
    }
  },
  methods: {
    updateName(target) {
      console.log("Home vue :" + target);
      this.name = target;
    }
  }

}
</script>

<style scoped>
h1 {
  color: red;
}

</style>