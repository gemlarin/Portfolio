<template>
  <div> 
    <div class="wrap--stack">
      <router-link class="nav-link" to="/#introduction"><button title="Close (Esc)" type="button" class="mfp-close">×</button></router-link>
      <div class="wrap--centering">
          <div class="row">
              <h2>RESUME</h2>
          </div>
      </div>
    </div>
    <div class="positioner">
      <navi :activepage="page"></navi>
    </div>
</div>
</template>

<script>

    import Nav from './../components/main/navs/IntroNav.vue'
    export default {
        name: 'Resume',
        data () {
            return {
                page:'resume', 
            }
        },
        created(){
           
        },
        components: {
            Navi : Nav
        }
    }
</script>
<style lang="scss" scoped>


h2{
    font-family: 'proxima_novablack';
    color:#333;
    font-size:50px;       
    margin-bottom:5px; 
    line-height:55px; 
    padding-right:5px;                                           
}
.wrapper--postion-nav{
    margin-top:60px;
}
.positioner{
  width:100vw;
  position:absolute;
  z-index: 301;
  bottom:40px;
  text-align:center;
}
p{
    font-family: "AvenirLTStdBook";
    font-size:15px;
    line-height:1.74em;
    padding-top:10px;
    padding-left:5px;
    color:#5a5a5a;
}
.subcopy{
    max-width:265px;
}
.wrap--stack{
    height:100vh;
    width:100vw;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: row;            
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-flex-wrap: nowrap;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-align-content: stretch;
    -ms-flex-line-pack: stretch;
    align-content: stretch;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
}
.wrap--centering{
    width:40vw;
    background-color:white;
    -webkit-order: 0;
    -ms-flex-order: 0;
    order: 0;
    -webkit-flex: 0 1 auto;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    -webkit-align-self: center;
    -ms-flex-item-align: center;
    align-self: center;
    text-align:right;
    img{
        display:inline-block;
        height:20px;
        width:auto;
        margin-left:10px;
        margin-right:10px;
    }
    img:nth-child(2){
      height:35px;
    }
    ul{
        padding:0;
        text-decoration: none;
        li{
            display:block;
            font-size:32px;
            font-family: 'proxima_novablack';
            p{
                margin-bottom:0;
                line-height:1em;
            }
            .subtext{
                font-size:12px;
                margin-top:5px;
                padding-top:0;
                color:#fb2662;
                margin-bottom:20px;
                font-family: "AvenirLTStdBook";
            }
        }
    }
}

</style>