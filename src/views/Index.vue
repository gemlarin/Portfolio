<template>
    <div id="page-wrap">
      <div id="to-top"></div>
        <Hero></Hero>
      </div>
</template>

<script>

import Hero from "./../components/main/Hero"

export default {
  data: function() {
    return {
      TIMEOUT: 1

    };
  },
  computed: {},
  mounted: function(){
   
  },
  created: function() {


  },
  methods: {
  
  },

  components: {
    Hero
  }
};
</script>

<style>
    #page-wrap{
      height:3000px;
    }
    
</style>


