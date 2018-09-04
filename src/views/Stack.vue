<template>
<div>
    <div class="nav-wrap">
        <navi :activepage="page"></navi>
    </div>
    <div class="wrap--stack">
        <router-link class="nav-link" to="/#introduction"><button title="Close (Esc)" type="button" class="mfp-close">×</button></router-link>
        <div class="wrap--centering">
            <div class="row">
                <div class="col-12 col-md-6 col-lg-6 col-xl-6 listing">
                    <h2>VUE 2</h2>
                    <h2>SASS</h2>
                    <h2>WEBPACK</h2>
                    <h2>NPM</h2>
                    <h2>BS-VUE</h2>
                </div>
                <div class="col-12 col-md-6 col-lg-6 col-xl-6 subcopy">
                    <p>This list defines my current primary development stack. For projects that do not require an advanced JS framework, I use the CodeKit task runner in in lieu of Webpack and Knockout.js for data binding.</p>
                    <p>My design and UX tooling includes Axure RP, Adobe CC, and Balsamiq.</p>
                </div>
            </div>
        </div>
    </div>

</div>
</template>

<script>
    import Nav from './../components/main/navs/IntroNav.vue'
    export default {
        name: 'Stack',
        data () {
            return {
                page:'stack', 
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
    color:#222;
}
.subcopy{
    max-width:265px;
    text-align: left;
}
.listing{
    text-align: right;
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
.nav-link{
    position: absolute;
    right: 0;
    top: 0;
}
.mfp-close{
    font-size:50px;
    right:10px;
    top:10px;
   
}
.wrap--centering{
    width:70vw;
    height:360px;
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
   @media (max-width: 768px) {
       .mfp-close{
            font-size:45px;
        }
       .wrap--centering{
           width:100%;
           height:410px;
       }
       .subcopy{
            max-width:400px;
            padding-top:20px;
            text-align: center;
            margin:0 auto;
            padding-left:0;
            padding-right:0;
            max-width:80%;
        }
        .listing{
            text-align: center;
            max-width:80%;
            margin:0 auto;
        }
        h2{
            line-height: 50px;
            font-size:45px;
            display:inline;
            padding-left:15px;
            padding-right:15px;
        }
        p{
            padding-left:15px;
            padding-right:15px;
        }
   }

@media (max-width: 768px) and (min-width: 695px){
    .wrap--centering{
        width:100%;
        height:330px;
    }
}


</style>