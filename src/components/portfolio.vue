<template lang="html">
  <section class="portfolio">
    
      <div id="whoami">
        
        <b-button v-on:click="changeLan">Change Lan</b-button>
        <b-container fluid="lg">
        <b-row>
          <b-col>
            <img v-bind:src="currentLan.aboutMe.photo" class="img-fluid photo" >
            </b-col>
          <b-col class="datosPersonales">
            <h1 class="align-middle">{{currentLan.aboutMe.nombre}} {{currentLan.aboutMe.apellidos}} </h1>
            <h4>Birthday: {{currentLan.aboutMe.dateBirth}} </h4>
            <h4>Where: {{currentLan.aboutMe.nationallity}}</h4>
            <h4>Mother Language: {{currentLan.languages.motherLanguage}}</h4>
            <h4>Other Language: {{currentLan.languages.otherLanguage}}</h4>
          </b-col>
        </b-row>
        <b-row>
           
        </b-row>
      </b-container>
      </div>
      <div id="projects"> <h1>yomismo</h1> </div> 
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
    this.currentLan=this.datos.data.eng;
    },
    data () {
      return {
        url:'/json/info.json',
        datos:null,
        lang:true,
        currentLan:null,
      }
    },
    methods: {
      changeLan(){
        if(this.lang){
          this.currentLan=this.datos.data.eng;
          this.lang=false;
          return this.currentLan;
        }else{
          this.currentLan=this.datos.data.esp;
          this.lang=true;
          return this.currentLan;
        }
      }
    },
    computed: {

    }
}


</script>

<style scoped>
/*https://zyro.com/preview/eren */
/* SECTIONS */
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
/* OTROS */
.photo{
  border-radius:100%;
  border: 3px #546a7b solid;
  }

h1{
  font-size:4rem;
}
.datosPersonales{
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;
  }

</style>
