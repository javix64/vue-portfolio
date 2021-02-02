<template lang="html">
  <section class="portfolio">
      <div class="changeMe fixed-top ml-auto" v-on:click="changeLang">
        <b-form-checkbox v-model="lang" @change="changeLang" class="ml-auto mr-3" name="check-button" switch size="lg">
          <b>{{flagLang}}</b>
        </b-form-checkbox>
      </div>
      <div id="whoami">
        <div  fixed="bottom" toggleable="lg" type="dark" variant="info"> 
        </div>
        <b-container fluid="lg">
        <b-row>
          <b-col class="datosPersonales">
            <img v-bind:src="currentLang.aboutMe.photo" class="img-fluid photo">
          </b-col>
          <b-col class="datosPersonales">
            <h1 class="align-middle">{{currentLang.aboutMe.nombre}} {{currentLang.aboutMe.apellidos}} </h1>
            <h4>Birthday: {{currentLang.aboutMe.dateBirth}} </h4>
            <h4>Where: {{currentLang.aboutMe.nationallity}}</h4>
            <h4>Mother Language: {{currentLang.languages.motherLanguage}}</h4>
            <h4>Other Language: {{currentLang.languages.otherLanguage}}</h4>
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
    this.currentLang=this.datos.data.eng;
    
    },
    data () {
      return {
        url:'/json/info.json',
        datos:null,
        lang:true,
        currentLang:null,
        flagLang:"🇬🇧"
      }
    },
    methods: {
      changeLang(){
        if(!this.lang){
          this.currentLang=this.datos.data.eng;
          this.lang=true;
          this.flagLang="🇬🇧";
          return this.currentLang;
        }else{
          this.currentLang=this.datos.data.esp;
          this.lang=false;
          this.flagLang="🇪🇸";
          return this.currentLang;
        }
      },
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
.changeMe{
  border: 4px #546a7b solid;
  width:110px;
  display:flex;
  align-items:center;
  border-radius:20px;
  height:45px;
}

</style>
