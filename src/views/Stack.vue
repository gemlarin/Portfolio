<template>
    <div class="wrap--stack">
        <router-link class="nav-link" to="/#introduction"><button title="Close (Esc)" type="button" class="mfp-close">×</button></router-link>
        <div class="wrap--centering">
            <div class="row">
                <div class="col-6">
                    <h2>VUE 2</h2>
                    <h2>WEBPACK</h2>
                    <h2>SASS</h2>
                    <h2>NPM</h2>
                    <h2>BS 3/4</h2>
                </div>
                <div class="col-6 subcopy text-left">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p> <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
            <div class="row">
                <div class="col-12 text-center">
                    <navi :nextpage="nextpath" :nextpagename="nextpagename" :lastpage="lastpath" :lastpagename="lastpagename"></navi>
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
                nextpagename:'Resume',
                lastpath:'/Contact',
                lastpagename:'Contact' 
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
    font-size:55px;       
    margin-bottom:5px; 
    line-height:63px;                                            
}
p{
    font-family: "AvenirLTStdBook";
    padding-top:10px;
    padding-left:10px;
}
.subcopy{
    max-width:250px;
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