
<template>

    <div class="wrap dialog" id="introduction">

            <h2 v-scroll-reveal.reset="{ delay: 500, origin:'left', duration: 500, easing:'ease-out'}">
                Hello! I'm Danny Gibas and I build experiences for the web<span>.</span>  
            </h2>
            <div id="navigation--intro">
                <ul>
                    <li><router-link class="nav-link" to="/resume">resume</router-link></li>
                    <li><router-link class="nav-link" to="/stack">stack</router-link></li>
                    <li><router-link class="nav-link" to="/contact">contact</router-link></li>
                </ul> 
            </div>
            <div class="dividerline--animated"></div>
            <div class="dividerline--mask"></div>
    
    </div>

</template>

<script>

    export default {
        name: 'Introduction',
        data () {
            return {
                animatelock:false,
                lastScrollTop:0,
                windowheight:0,
                direction:''
            }
        },
        components: {
        
        },
        created(){
           
        },
        mounted(){
            window.addEventListener("scroll", this.handleScroll);
            
            
        },
        methods:{
            handleScroll: () => { 
            //do some fabulous optimization to prevent scroll overloading
            
            var st = window.scrollY
            if (st > this.lastScrollTop){
                this.direction = "down";
            } else {
                this.direction = "up"
            }
            this.lastScrollTop = st;


            if(window.scrollY > 50 && this.direction == "down"){
                if(!this.animatelock){
                    this.windowheight = $(window).height();
                    this.animatelock = true;
                    //console.log("locked: " + this.animatelock)
                    $('.dividerline--animated').addClass('animate');
                }
            }
            
            if(window.scrollY < (this.windowheight / 2) && this.direction == "up") {
                if(this.animatelock){
                    this.animatelock = false;
                   // console.log("locked: " + this.animatelock)
                    $('.dividerline--animated').removeClass('animate');

                }
            } 

    
            
            }
        }
    }
</script>
<style scoped lang="scss">
  .wrap.dialog{
        position:relative;
        z-index:300;
        height:100vh;
        width:100vw;
        background:#fff;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
        -webkit-flex-wrap: nowrap;
        -ms-flex-wrap: nowrap;
        flex-wrap: nowrap;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -webkit-align-content: stretch;
        -ms-flex-line-pack: stretch;
        align-content: stretch;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;

    a.nav-link{
        color:#fb2662;
        font-size:18px;
    }
    a:hover{
        text-decoration: underline;
    }
    ul{
        list-style: none;
        padding-left:0;
        li{
            display:inline-block;
        }
    }
    h2{
        font-family: 'proxima_novablack';
        margin-left:30px;
        width:490px;
        height:220px;
        text-align:left;
        font-size:55px;
        line-height:1em;
         -webkit-order: 0;
        -ms-flex-order: 0;
        order: 0;
        -webkit-flex: 0 1 auto;
        -ms-flex: 0 1 auto;
        flex: 0 1 auto;
        -webkit-align-self: auto;
        -ms-flex-item-align: auto;
        align-self: auto;
        z-index:302;
        span{
            color:#fb2662;
        }
    }
    #navigation--intro{
        z-index:302;
         -webkit-order: 0;
        -ms-flex-order: 0;
        order: 0;
        -webkit-flex: 0 1 auto;
        -ms-flex: 0 1 auto;
        flex: 0 1 auto;
        -webkit-align-self: auto;
        -ms-flex-item-align: auto;
        align-self: auto;
        width:50vw;
        text-align:center;
    }


    .dividerline--animated{
        width:1px;
        height:0;
        position:absolute;
        z-index:300;
        left:50%;
        top:0;
        background-color: #252324;
        transition: height 2s;
        transition-delay: .4s;
        transition-timing-function: ease;
        &.animate{
           height:100vh; 
        }
    }
    .dividerline--mask{
        display:none;
        position:absolute;
        z-index:301;
        left:calc(50% - 10px);
        top:calc(50vh - 150px);
        width:20px;
        height:270px;
        background-color: white;
    }
  }

@media (max-width: 460px) {
    .wrap.dialog{
        h2{
            margin:0 15px;
            width:calc(100vw - 30px);
            text-align:center;
            height:270px !important;
        }
        .dividerline--mask{
            top:calc(50vh - 185px) !important;
            height:350px !important;
        }
    }
}  

@media (max-width: 600px) {
    .wrap.dialog{
        h2{
            margin:0 15px;
            width:calc(100vw - 30px);
            text-align:center;
            height:220px;
        }
        .dividerline--mask{
            top:calc(50vh - 160px);
            height:315px;
        }
    }
}
@media (max-width: 768px) and (min-width: 601px){
    .wrap.dialog{
        h2{
            text-align:center;
            max-width:600px;
            margin:0 auto;
            padding:15px;
            height:250px;
        }
        .dividerline--mask{
            top:calc(50vh - 160px);
            height:315px;
        }
    }
}
@media screen and (max-width: 940px ) and (min-width: 769px) {
    .wrap.dialog{
       h2{
            text-align:center;
            margin:0 auto;
            width:600px;
            height:160px;
        }

        .dividerline--mask{
            top:calc(50vh - 140px);
            height:260px;
        }
    }
}

@media (max-width: 940px) {
    .wrap.dialog{
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-align-content: stretch;
        -ms-flex-line-pack: stretch;
        align-content: stretch;
        -webkit-align-items: flex-start;
        -ms-flex-align: start;
        align-items: flex-start;
         #navigation--intro{
            width:100vw;
            margin-top:20px;
        }
        .dividerline--mask{
            display:block;
        }

    }
}
</style>