<template>
    <div id="page-wrap">
      <div id="to-top"></div>
        <Hero></Hero>
        <introduction></introduction>
        <portfolio></portfolio>
        <div id="portfolio"></div>
        <project-one></project-one>
        <project-two></project-two>
        <project-three></project-three>
        <project-four></project-four>
        <project-five></project-five>
  
        <foot></foot>
      </div>
</template>

<script>
import Hero from "./../components/main/Hero"
import Introduction from "./../components/main/Introduction"
import Portfolio from "./../components/main/Portfolio"
import ProjectOne from "./../components/main/projects/ProjectOne"
import ProjectTwo from "./../components/main/projects/ProjectTwo"
import ProjectThree from "./../components/main/projects/ProjectThree"
import ProjectFour from "./../components/main/projects/ProjectFour"
import ProjectFive from "./../components/main/projects/ProjectFive"
import ProjectSix from "./../components/main/projects/ProjectSix"
import Foot from "./../components/main/Footer"
export default {
  name:"Index",
  data: function() {
    return {
      TIMEOUT: 1

    };
  },
  components: {
    Hero,
    Introduction,
    Portfolio,
    ProjectOne,
    ProjectTwo,
    ProjectThree,
    ProjectFour,
    ProjectFive,
    ProjectSix,
    Foot
    
  },
  computed: {},
  mounted: function(){
   
  },
  created: function() {

      

  },
  methods: {
  
  }
};
</script>

<style>
    #page-wrap{
      
    }
    
</style>


