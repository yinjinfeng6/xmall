<template>
  <div class="home">

  </div>
</template>

<script>
// @ is an alias to /src
import request from '@/api'
export default {
  name: "HomeView",
  components: {

  },
  methods:{
    async getTryData(){
      const {data} = await request.get("/try")
      // console.log(data)
    }
  },
  created(){
    this.getTryData()
  }
};
</script>
<style  scoped>


</style>
