<template>
    <div class="wrap--stack">
        <div class="wrap--centering">
            <div class="row">
                <div class="col-12">
                    <navi :nextpage="nextpath" :lastpage="lastpath"></navi>
                    <router-link class="nav-link" to="/#introduction"><button title="Close (Esc)" type="button" class="mfp-close">×</button></router-link>
                    Vue 2
                    Webpack
                    SASS
                    NPM
                    Bootstrap 4
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import './../assets/logos/vue.svg'
    import './../assets/logos/webpack.svg'
    import './../assets/logos/sass.svg'
    import './../assets/logos/npm.svg'
    import './../assets/logos/bootstrap.svg'
    import Nav from './../components/main/navs/IntroNav.vue'
    export default {
        name: 'Stack',
        data () {
            return {
                nextpath:'/Resume',
                lastpath:'/Contact'
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
    height:300px;
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
    text-align:center;
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