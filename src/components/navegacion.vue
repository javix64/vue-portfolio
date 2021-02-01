<template lang="html">
  <section class="navegacion" v-b-scrollspy>

      <b-navbar toggleable="lg" type="dark" variant="info" fixed="bottom">
        <b-navbar-brand href="#">Javier</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse" dropup="true"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav >
          <b-navbar-nav class="ml-auto my-6 nav-pills">
            <a class="nav-link mr-4 mt-2" href="#whoami"><i class="far fa-address-card"></i> <i>whoami</i></a>
            <a class="nav-link mr-4 mt-2" href="#projects"><i class="far fa-folder-open"></i> <i>projects</i></a>
            <a class="nav-link mr-4 mt-2" href="#skills"><i class="fas fa-code"></i> <i>skills</i></a>
            <a class="nav-link mr-4 mt-2" href="#work"><i class="fas fa-business-time"></i> <i>workExperience</i></a>
            <a class="nav-link mr-4 mt-2" href="#education"><i class="fas fa-graduation-cap"></i> <i>education</i></a>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>



    
        

  </section>
</template>

<script lang="js">
  export default  {
    name: 'navegacion',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {
      
    },
    computed: {

    }
}


</script>

<style scoped>
    /*COLORES */
.navbar{
  background-color: #546a7b !important;
}
.nav-link{
  color:white !important;
}
.navbar-brand{
  font-size:2rem;
  color: white !important;
  }
.navbar{
  background-color: #546a7b !important;
}
.nav-link{
  color:white !important;
}
.navbar-brand{
  font-size:2rem;
  color: white !important;
}
.navbar-toggler{
  background-color:#425461 !important;
}
.nav-link.active{
  /**/background-color:inherit !important;
  border-bottom: 6px #3A4955 solid;
  border-radius: 3px;
  background-color:#425461 !important;
}
.nav-link.active{
  /**/background-color:inherit !important;
  border-bottom: 6px #3A4955 solid;
  border-radius: 3px;
}
/* FIN COLORES */
/* Efectos */
a > i{
  padding-left:10px;
}
/* Fin efectos */
</style>
