<template lang="html">
  <section class="portfolio" v-if="currentLang">
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
            <h4>{{tagLang.all.birthday}}: {{currentLang.aboutMe.dateBirth}} </h4>
            <h4>{{tagLang.all.where}}: {{currentLang.aboutMe.nationallity}}</h4>
            <h4>{{tagLang.all.motherLanguage}}: {{currentLang.languages.motherLanguage}}</h4>
            <b-progress :max=100 height="2rem">
              <b-progress-bar :value="currentLang.languages.barSpa">
                <span><strong>{{currentLang.languages.motherLanguage}}: {{currentLang.languages.barSpa}} / 100</strong></span>
            </b-progress-bar>
            </b-progress>
            <h4>{{tagLang.all.otherLanguage}}: {{currentLang.languages.otherLanguage}}</h4>
            <b-progress :max=100 height="2rem">
              <b-progress-bar :value="currentLang.languages.barEng">
                <span><strong>{{currentLang.languages.otherLanguage}}: {{currentLang.languages.barEng}} / 100</strong></span>
            </b-progress-bar>
            </b-progress>
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
            <h3> {{tagLang.all.contact}}:</h3>
            <a v-bind:href=" `mailto:${currentLang.contact.email}`"><h4> {{currentLang.contact.email}}</h4></a>
            <h4> {{currentLang.contact.direccion}}</h4>
          </b-col>
        </b-row>
        <b-row class="botSections"></b-row>
      </b-container>
      </div>
      <div id="projects"> 
      <h2>{{tagLang.all.projects}}</h2>

      <div class="d-flex justify-content-center flex-wrap align-items-stretch" fluid="md">
      <b-card v-for="(item, index) in currentLang.projects" :key="index" class="myProjects mx-5 my-5">
        
        
          <h3 class="nameProject">{{item.name}}</h3>
          <img v-bind:src="item.img" class="img-fluid imgProjects my-3 mx-auto d-block">
        <!-- IMPLEMENTACION DE MODALS-->
        <b-btn v-b-modal="modalId(index)" class="midButton">{{item.name}}</b-btn>
        <b-modal :id="'modal' + index" v-bind:title="item.name" ok-only>
          <h3 class="nameProject">{{item.name}}</h3>
          <img v-bind:src="item.img" class="img-fluid imgProjects my-3 mx-auto d-block">
          <p class="descProject mx-auto">{{item.description}}</p>
          <b-button v-bind:href="item.url" :title="item.name" target="_blank" v-b-tooltip.hover class="midButton">Open project</b-button>
        </b-modal>
      </b-card>
      </div>

      <div class="botSections"></div>
      </div>
      <div id="skills" fluid>
        <h2>{{tagLang.all.skills}}</h2>
        
        <b-container >
          <b-row> 
            <b-col>
              <h3>{{tagLang.all.dSkills}}</h3>
              <section class="sk d-flex flex-wrap col-md-12 col-12"> 
                <b-card v-for="(item, index) in currentLang.digitalSkills" :key="index" class="skills my-2 mx-auto"> 
                <p>{{item}}</p>
                </b-card> 
              </section>
            </b-col>

            <b-col>
                <h3 class="">{{tagLang.all.oSkills}}</h3>
                <section class="sk d-flex flex-wrap col-md-12 col-12"> 
                <b-card v-for="(item, index) in currentLang.otherSkills" :key="index" class="skills my-2 mx-auto"> 
                <p>{{item}}</p>
                </b-card>
                </section>
            </b-col>
        </b-row>

        </b-container>
        <div class="botSections"> </div>
      </div>
      <div id="work"> 
        <h2> {{tagLang.all.work}} </h2> 
        <section class="d-flex flex-wrap justify-content-center" fluid> 
          <b-card v-for="(item, index) in currentLang.workExperience" :key="index" class="cardWork mx-3 my-3" fluid=lg>
          <b-media>
          <h5>{{item.work}}</h5>
          <p>{{tagLang.all.from}}: {{item.dateStart}}, {{tagLang.all.to}}: {{item.dateEnd}}</p>
          <p>{{tagLang.all.place}}: {{item.place}} </p>
          <p>{{tagLang.all.position}}: {{item.position}}</p>
          <p>{{tagLang.all.description}}: {{item.description}}</p>
          </b-media>
          </b-card>
        </section>

        <div class="botSections"> </div>
      </div>
      <div id="education"> 
        <h2 class="eduName">{{tagLang.all.education}}</h2> 
        <div class="tabli d-flex text-center mx-auto pt-4">
          <b-table hover :items="currentLang.education" striped bordered dark></b-table>
        </div>
      </div>
      <div id="other"> 
        <h2 class="eduName">{{tagLang.all.rrc}}</h2> 
        <section class="d-flex flex-wrap justify-content-center" fluid> 
          <b-card v-for="(item, index) in currentLang.references" :key="index" class="cardWork mx-3 my-3" fluid=lg>
          <b-media>
            
          <h5 class="mid" v-b-toggle.openAll>{{item.person}}</h5>
          <b-collapse id="openAll" class="mt-2">
          <p id="collapse-1">{{item.reference}}</p>
          </b-collapse>
          </b-media>
          </b-card>
        </section>
        <section>
          <b-form class="d-flex mx-auto justify-content-center flex-column">
            <b-form-group :label="tagLang.all.name">
            <b-form-input type="text" :placeholder="tagLang.all.iname" required></b-form-input>
          </b-form-group>
          <b-form-group id="input-group-1" :label="tagLang.all.email">
            <b-form-input type="email" :placeholder="tagLang.all.iemail" required></b-form-input>
          </b-form-group>

          
          <b-form-group :label="tagLang.all.message">
            <b-form-input type="text" :placeholder="tagLang.all.imessage" required></b-form-input>
          </b-form-group>
          <b-button type="submit" variant="primary">{{tagLang.all.send}}</b-button>
    </b-form>
        </section>
        <div class="botSections"> </div>
      </div>
  </section>
</template>




<script lang="js">
/* 
<transition name="fade">
   aquí dentro va todo en un container que tiene v-if con tu variable con los datos del json
</transition>

y esto en la parte de estilos
tan cual copiado de vuejs.org lo he puesto yo xddd */
  import axios from 'axios';
  export default  {
    name: 'portfolio',
    props: [],
    async mounted(){
    {this.datos = await axios.get(this.url)}
    this.currentLang=this.datos.data.eng;
    this.tagLang=this.datos.data.tagEng;
    },
    data () {
      return {
        url:'./json/info.json',
        datos:null,
        currentLang:null,
        tagLang:null,
        lang:true,
        flagLang:"🇬🇧",
      }
    },
    methods: {
      modalId(i) {
        return 'modal' + i;
      },
      showSvg(){

      },
      changeLang(){
        if(!this.lang){
          this.currentLang=this.datos.data.eng;
          this.tagLang=this.datos.data.tagEng;
          this.lang=true;
          this.flagLang="🇬🇧";
          return this.currentLang;
          
        }else{
          this.currentLang=this.datos.data.esp;
          this.tagLang=this.datos.data.tagEsp;
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
  height:100%;
  background-color:#ABB9C4;
}
#work{
  height:100%;
  background-color:#94A5B3;
}
#education{
  height:60vh;
  background-color:#7C91A2;
}
#other{
  height:100%;
  background-color:#667C8F;
}
/* START whoami section */
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
.progress{
  width:260px;
}
.progress-bar{
  color:#E7EBEE !important;
  background-color:#425461 !important;
}
/* END whoami section */
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
  width:400px;
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
/*END projects section */

/*START education section */
.tabli{
  width:60%;
  color:white;
}
.eduName{
  text-align:center;
  padding-top:40px;
}
/*END education section */

/*START skill section */
#skills > h2{
  text-align:center;
  padding-top:30px;
  padding-bottom:40px;
}
.skills{
  width:200px;
  height:130px;
  border-radius:20px;
  background-color: #F3F5F7;
  color: #2A343C;
  text-align: center;
}
.sk{
  border: 2px #f3f5f7 solid;
  border-radius:30px;
}
.col > h3{
  text-align:center;
  padding-bottom:20px;
  padding-top:20px;
}


/*END skill section */




/*START work section */
#work > h2{
  padding-top:50px;
  text-align:center;
  padding-bottom:50px;
}
.cardWork{
  width:300px;
}
/*END work section */

/*START other section */
.mid{
  text-align:center;
}
form{
  width:80%;
  padding-top:100px;
  padding-bottom:100px;
}
input:focus:invalid{
   border-color: rgba(255,0,0,0.3);
   background-color: rgba(255,0,0,0.3);
}
input:valid{
   border-color: rgba(0,255,0,0.3);
   background-color: rgba(0,255,0,0.3);
}
/*END other section */

/*START animations */
.fade-enter-active, .fade-leave-active {
  transition: opacity 2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  
}



/*END animations */




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
button{
  background-color:#3a4955;
}
.midButton{
  display:block;
  width:60%;
  margin:auto !important;
  margin-top:20px;
}
</style>