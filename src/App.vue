<template>
  <div id="app">
    <navegacion></navegacion>
    <portfolio> </portfolio>
  </div>
</template>

<script>
import navegacion from './components/navegacion.vue'
import portfolio from './components/portfolio.vue'
export default {
  name: 'App',
  created(){
  },
  mounted(){
  },
  data(){
    return{
      url:'/json/info.json',
      data:null,
    }
  },
  computed: {
    
  },
  components: {
    navegacion,
    portfolio,
  },
  methods: {

  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');
#app{
  font-family: "Nunito", sans-serif;
}
</style>
