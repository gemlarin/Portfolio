<template>
<ul class="navlist">
    <li>
        <router-link class="nav-link" to="/#portfolio">Portfolio</router-link>
    </li>
    <li>
        <router-link class="nav-link" :class="{ active: activepage == 'stack' }" to="/stack">Stack</router-link>
    </li>
    <li>
        <router-link class="nav-link" :class="{ active: activepage == 'resume' }" to="/resume">Resume</router-link>
    </li>
    <li>
        <router-link class="nav-link" :class="{ active: activepage == 'contact' }" to="/contact">Contact</router-link>
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
     props:['activepage'],
  components: {
  }
};
</script>

<style scoped lang="scss">
ul{
    list-style:none;
    display:inline;
    padding-left:0;
    margin: auto 0;
    position:relative;
}
li{
    display:inline-block;
    a{
        color:#fb2662;
        &:hover{
            text-decoration: underline;
        }
    }
}
.nav-link{
     font-family: "AvenirLTStdLight";
     font-size:16px;
     &.active{
         color:#fb2662;
         font-family: "AvenirLTStdBlack";
     }
}

    
</style>


