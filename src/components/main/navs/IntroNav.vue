<template>
<ul>
    <li>
        <router-link class="nav-link" :to="nextpage">{{ nextpagename }}</router-link>
    </li>
    <li>
        <router-link class="nav-link" :to="lastpage">{{ lastpagename }}</router-link>
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
     props:['nextpage','lastpage', 'nextpagename', 'lastpagename'],
  components: {
  }
};
</script>

<style scoped lang="scss">
ul{
    list-style:none;
    display:inline;
    margin-top:150px;
}
li{
    display:inline-block;
    a{
        color:#fb2662;
    }
}
.nav-link{
     font-family: "AvenirLTStdBlack";
}
    
</style>


