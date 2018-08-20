<template>
    <div id="page-wrap">
      <div id="to-top"></div>
        <Hero></Hero>
        <introduction></introduction>
        <portfolio></portfolio>
        <foot></foot>
      </div>
</template>

<script>
import Hero from "./../components/main/Hero"
import Introduction from "./../components/main/Introduction"
import Portfolio from "./../components/main/Portfolio"
import Foot from "./../components/main/Footer"
export default {
  data: function() {
    return {
      TIMEOUT: 1

    };
  },
  components: {
    Hero,
    Introduction,
    Portfolio,
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


