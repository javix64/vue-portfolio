<template lang="html">

  <section class="portfolio">
    <h1>portfolio Component</h1>
  </section>

</template>

<script lang="js">
  import axios from 'axios';
  export default  {
    name: 'portfolio',
    props: [],
    async mounted(){
    {this.datos = await axios.get(this.url)}
    },
    data () {
      return {
        url:'/json/info.json',
        datos:null
      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped>
/*https://zyro.com/preview/eren */
</style>
