<template>
<ul>
    <li>
        <router-link class="nav-link" :to="nextpage">Nextpage</router-link>
    </li>
    <li>
        <router-link class="nav-link"  :to="lastpage">Lastpage</router-link>
    </li>
</ul>
</template>

<script>

export default {
  name:"IntroNav",
  data: function() {
    return {

    };
  },
  props:['nextpage','lastpage'],
  components: {
    
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

<style scoped lang="scss">
ul{
    list-style:none;
    display:inline;
}
li{
    display:inline-block;
    a{
        color:#333;
    }
}
    
</style>


