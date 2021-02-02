<template lang="html">
  <section class="portfolio">
      <div class="changeMe fixed-top ml-auto" v-on:click="changeLang">
        <b-form-checkbox v-model="lang" @change="changeLang" class="ml-auto mr-3" name="check-button" switch size="lg">
          <b class="flag">{{flagLang}}</b>
        </b-form-checkbox>
      </div>
      <div id="whoami">
        <b-container fluid="md">
        <b-row >
          <b-col class=" mt-5 col-12 col-md-6">
            <img v-bind:src="currentLang.aboutMe.photo" class="img-fluid photo">
          </b-col>
          <b-col class="datosPersonales mt-5 col-12 col-md-6" >
            <h1 class="align-middle">{{currentLang.aboutMe.nombre}} {{currentLang.aboutMe.apellidos}} </h1>
            <h4>Birthday: {{currentLang.aboutMe.dateBirth}} </h4>
            <h4>Where: {{currentLang.aboutMe.nationallity}}</h4>
            <h4>Mother Language: {{currentLang.languages.motherLanguage}}</h4>
            <h4>Other Language: {{currentLang.languages.otherLanguage}}</h4>
          </b-col>
        </b-row>

        <b-row>
          <b-col class="rowi mt-5 col-12 col-md-6">
            <h3>Websites:</h3>
            <h4 class="mt-2">
              <a target="_blank" v-bind:href="currentLang.websites.github"><i class="iconWeb fab fa-github-square fa-2x mr-3"></i> </a>
              <a target="_blank" v-bind:href="currentLang.websites.linkedin"><i class="iconWeb fab fa-linkedin fa-2x mr-3"></i> </a>
              <a target="_blank" v-bind:href="currentLang.websites.twitter"><i class="iconWeb fab fa-twitter-square fa-2x mr-3"></i> </a>
              <a target="_blank" v-bind:href="currentLang.websites.twitch"><i class="iconWeb fab fa-twitch fa-2x"></i> </a>
            </h4>
          </b-col>
          <b-col class=" rowi mt-5 col-12 col-md-6">
            <h3> Contact:</h3>
            <a v-bind:href=" `mailto:${currentLang.contact.email}`"><h4> {{currentLang.contact.email}}</h4></a>
            <h4> {{currentLang.contact.direccion}}</h4>
          </b-col>
        </b-row>
        <b-row class="botSections"></b-row>
      </b-container>
      </div>
      <div id="projects"> 
      <h2>Projects</h2>
      <div class="d-flex justify-content-center flex-wrap align-items-stretch" fluid="md"> 
      <b-card v-for="(item, index) in currentLang.projects" :key="index" class="myProjects mx-5 my-5">
        <a v-bind:href="item.url" :title="item.name" target="_blank" v-b-tooltip.hover> 
          <h3 class="nameProject">{{item.name}}</h3>
          <img v-bind:src="item.img" class="img-fluid imgProjects my-3 mx-auto d-block">
          <p class="descProject mx-auto">{{item.description}}</p>
        </a>
        </b-card>
      </div> 
      </div>
      <div id="skills">
        
         <h1>Fotomia</h1> 
      </div>
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
        currentLang:null,
        lang:true,
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
#whoami{  
  height:100%;
  background-color:#DBE1E6;
}
#projects{
  height:100%;
  background-color:#C3CDD5;
}
#skills{
  height:100vh;
  background-color:#ABB9C4;
}
#work{
  height:100vh;
  background-color:#94A5B3;
}
#education{
  height:100vh;
  background-color:#7C91A2;
}
/* whoami section */
.photo{
  border-radius:100%;
  border: 3px #546a7b solid;
}
h1{
  font-size:3rem;
}
.datosPersonales{
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;
}

/* STYLES FOR FONTAWESOME ICONS */
.iconWeb{
  color: #3A4955;
}
.iconWeb:hover{
  border-bottom: 2px #546a7b solid;
}

.rowi{
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;
}

/*END whoami section */


/*START projects section */
.myProjects{
  border: 5px #546a7b solid;
  border-radius:10px;
}
#projects > h2{
  text-align:center;
  padding-top:50px;
  padding-bottom:20px;
}
.imgProjects{
  width:80% !important;

}
.descProject{
  font-size:1.3rem;
  text-align:center;
  width:70%;
  text-decoration:none !important;
  color:#2A343C;
}
.nameProject{
  text-align:center !important;
  padding-top:20px;
  text-decoration:none !important;
  color:#2A343C;

}







/* GENERAL */
.botSections{
  padding-bottom:60px;
}
.topSections{
  padding-top:60px;
}
.changeMe{
  border: 4px #546a7b solid;
  width:110px;
  display:flex;
  align-items:center;
  border-radius:20px;
  height:45px;
  background-color:rgba(255,255,255,0.7);
}
.flag{
  font-size:1.4rem;
}

</style>
