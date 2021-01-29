<template lang="html">
  <section class="portfolio">
      <div id="projects"> <h1>yomismo</h1> </div> 
      <div id="whoami"> <h1>Fotomia</h1> </div>
      <div id="skills"> <h1>Fotomia</h1> </div>
      <div id="work"> <h1>Fotomia</h1> </div>
      <div id="education"> <h1>Fotomia</h1> </div>
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

#projects{
  height:100vh;
  background-color:lavender;
}
#whoami{
  height:100vh;
  background-color:khaki;
}
#skills{
  height:100vh;
  background-color:lightcoral;
}
#work{
  height:100vh;
  background-color:lightslategrey;
}
#education{
  height:100vh;
  background-color:moccasin;
}
</style>
