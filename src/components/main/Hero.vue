<template>
  <div id="main">
    <div class="main__navbar">
      <div class="navbar__hidden--top">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <ul>
                <li>
                  <a href="#about_me">ABOUT</a>
                </li>
                <li>
                  <a href="#details">OTHER PROJECTS</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="nav-wrapper">
        <div class="row">
          <div class="col-sm-12">
            <div class="main__navbar--logo--container">
              <a href="#">
                  <svg version="1.1" id="Logo" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                  viewBox="0 0 49.612 50" style="enable-background:new 0 0 49.612 50;" xml:space="preserve">
                  <path class="logo__background-color" d="M49.461,16.105c0-8.985-7.038-16.023-15.874-16.023H16.288c-0.95,0-1.72,0.77-1.72,1.72v12.881H1.8
                 c-0.95,0-1.72,0.77-1.72,1.72v17.448c0,8.985,7.038,16.023,15.874,16.023h17.299c0.95,0,1.72-0.77,1.72-1.72V35.273h12.769
                 c0.95,0,1.72-0.77,1.72-1.72V16.105z M44.369,30.238l-14.233,0.011H29.88v0L19.66,30.257v-5.498h-5.092v8.681
                 c0,1.013,0.821,1.834,1.834,1.834H29.88v9.659c0,0-3.594,0-13.852,0c-7.937,0-10.857-7.095-10.857-10.614c0-3.519,0-14.601,0-14.601
                 l9.397-0.007v0.003h5.092v-0.007l10.221-0.008v5.504h5.092v-8.97c0-0.856-0.694-1.551-1.551-1.551H19.66V5.023c0,0,3.594,0,13.852,0
                 c7.937,0,10.857,7.095,10.857,10.614C44.369,19.156,44.369,30.238,44.369,30.238z"/>
               </svg>
              </a>
            </div>
            <ul>
              <li>
                <div class="main__navbar--item--wrapper">
                  <div id="main__navbar--burger--wrapper">
                    <div class="burger__bar burger__bar--top"></div>
                    <div class="flip--wrapper">
                      <div class="burger__bar burger__bar--top--flip"></div>
                      <div class="burger__bar burger__bar--bottom--flip"></div>
                    </div>
                    <div class="burger__bar burger__bar--bottom"></div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- /container -->
    </div>


    <!-- container for the BG image in the hero. Set in _theme.scss -->
    <header class="main__masthead">
      <div class="main__masthead--content">
        <div class="wrap--hero-copy">
            <div class="welcome-block">
                <h1 id="firstname">
                    <span class="alter">d</span>
                    <span class="alter">a</span>
                    <span class="alter">n</span>
                </h1>
                <h1 id="lastname">
                    <span class="alter">g</span>
                    <span class="alter">i</span>
                    <span class="alter">b</span>
                    <span class="alter">a</span>
                    <span class="alter">s</span>
                </h1>
                <div class="tagline">Front end engineer</div>
            </div>
        </div>
        <div class="sd-container">
            <div class="scrolldown"></div>
            <img class="dot" src="./../../assets/scrolldown.svg">
            <div class="scroll-text">scroll down</div>
        </div>
        <div class="social-media">
            <div id="open-icon-text">social</div>
            <div id="open-icon">
                <img @click="toggleOpen" src="./../../assets/share.svg">
            </div>
            <div id="drawer">
                <div id="slide" :class="{ expand: drawerOpen }">
                    <div class="icon-lg">
                        <a href="http://jsfiddle.net/user/gemlarin/fiddles/" target="_blank"><img src="./../../assets/jsfiddle-icon.svg"></a>
                    </div>
                    <div class="icon">
                        <a href="https://www.linkedin.com/in/dannygibas/" target="_blank"><img src="./../../assets/linkedin-icon.svg"></a>
                    </div>
                    <div class="icon">
                        <a href="https://twitter.com/RestingDev" target="_blank"><img src="./../../assets/twitter-icon.svg"></a>
                    </div>
                </div>
            </div>
            </div>
      </div>
    </header>
    <!--<div class="main__image--top--overlay"></div>-->

    <div class="main__image--top"></div>
  </div>
   
</template>

<script>

import './../../assets/hero__img--home.jpg'
import './../../assets/scrolldown.svg'
import './../../assets/share.svg'
export default {
    data: function(){
        return{
            open : true,
            drawerOpen: false
        }
    },
    computed: {
        isOpen: () =>{
            return this.drawerOpen;
        },
        windowHeight: () => {
            //console.log(window.innerHeight)
            return window.innerHeight;
        },
        offset: () =>  {
            var off = (window.scrollY / (window.innerHeight) * 5);
            //clamp the offset - ADJUST HERE IF NEEDED
            if (off > 1){
                off = 1;
            }else if(off < 0){
                off = 0
            }
            return off;
        }
    },
    created: function(){

    },
    mounted: function() {
            window.addEventListener("scroll", this.handleScroll);

            setTimeout(function(){ 
                $('h1#firstname span').removeClass("alter");
                $('h1#lastname span').removeClass("alter");
                $('.scrolldown').addClass("grow");
                $(".dot").addClass("show");
                $(".scroll-text").addClass("show");
                $(".tagline").addClass("reveal");
            }, 300);    
            
            //init the masthead particle engine *stars*
            $('.navbar__hidden--top').hide();
            //var position = $('#side__navbar').position();
            $(".main__navbar--item--wrapper").click(function () {
                
                $('.navbar__hidden--top').slideToggle(300);
                $('.burger__bar--top--flip').toggleClass('open');
                $('.burger__bar--bottom--flip').toggleClass('open');
                $('.burger__bar--top').toggleClass('open');
                $('.burger__bar--bottom').toggleClass('open');
            });
            $('.main__navbar a').click(function(){
                
                $('.navbar__hidden--top').slideToggle(300);
                $('.burger__bar--top--flip').toggleClass('open');
                $('.burger__bar--bottom--flip').toggleClass('open');
                $('.burger__bar--top').toggleClass('open');
                $('.burger__bar--bottom').toggleClass('open');
            });
            //init navbar opacity
            $('#side__navbar__list--group').css('background-color', 'rgba(0,0,0,' + this.offset);
    },
    methods: {
        toggleOpen: function(){
            this.drawerOpen = !this.drawerOpen
        },
        handleScroll: function(){ 
            //do some fabulous optimization to prevent scroll overloading
            if(window.scrollY > 60 && this.open){
                this.open = false;
                $('.logo__background-color').addClass('alt');
                $('.main__navbar').addClass('alt');
                $('.burger__bar').addClass('alt');
            }else if(window.scrollY < 60 && !this.open) {
                
                this.open = true;
                $('.logo__background-color').removeClass('alt');
                $('.main__navbar').removeClass('alt');
                $('.burger__bar').removeClass('alt');
            } 
           
        }
    }
}
</script>

<style lang="scss">

//== Colors
$gray-base:              #000 !default;
$gray-darker:            lighten($gray-base, 13.5%) !default; // #222
$gray-dark:              lighten($gray-base, 20%) !default;   // #333
$gray:                   lighten($gray-base, 33.5%) !default; // #555
$gray-light:             lighten($gray-base, 66.7%) !default; // #777
$gray-light-alt:         lighten($gray-base, 80.5%) !default; // 
$gray-lighter:           lighten($gray-base, 93.5%) !default; // #eee
$brand-primary:         #535250 !default;
$brand-secondary:       $gray-darker !default;
$brand-tertiary:        #11a1b8 !default;
$color-gold:            #dea110 !default;
$color-white:			#fff   !default;
$color-offwhite:        #fafafa !default;

.color-white{
    color:$color-white;
}
//== Scaffolding
//
//## Settings for some of the most global styles.
//** Background color for `<body>`.
$body-bg:               #fff !default;
//** Global text color on `<body>`.
$text-color:            $gray-dark !default;
//** Global textual link color.
$link-color:            $brand-primary !default;
//** Link hover color set via `darken()` function.
$link-hover-color:      darken($link-color, 15%) !default;
//** Link hover decoration.
$link-hover-decoration: underline !default;

.logo__background-color {
    fill: $color-white;
    transition: fill .6s;
}

.logo__background-color.alt {
    fill: $brand-primary;
}
.nav-wrapper{
    padding-left:20px;
    padding-right:30px;
}
.navbar__hidden--top {
    background-color: #ffffff;
    overflow: hidden;
    color: $body-bg;
    -webkit-box-shadow: inset 0px -5px 22px 0px rgba(209, 209, 209, 0.23);
    -moz-box-shadow: inset 0px -5px 22px 0px rgba(209, 209, 209, 0.23);
    box-shadow: inset 0px -5px 22px 0px rgba(209, 209, 209, 0.23);
    a,
    a:active,
    a:visited {
        cursor: pointer;
        color: $gray-darker;
        font-size: .8em;
            font-family: "AvenirLTStdBlack";
    }
    a:hover {
        color: $link-hover-color;
    }
    @media (max-width: 768px) {
        a {
            font-size: .9em
        }
    }
    ul {
        margin: 0 auto 0 auto !important;
        padding-top: 25px !important;
        padding-bottom: 20px !important;
      
        
        li {
            display: inline;
            cursor: pointer;
            margin-right: 20px;
        }
        @media (max-width: 768px) {
            li {
                margin-right: 10px;
            }
        }
    }
    @media (max-width: 768px) {
        ul {
            display: block;
            width: 100%;
            text-align: center;
            padding-left: 0;
            margin-left: 0;
        }
    }
}
.social-media{
    position:absolute;
    z-index:200;
    top:50vh;
    left:30px;
    #open-icon-text{
        position:absolute;
        opacity:.9;
        top:-10px;
        left:-1px;
        z-index:200;
        font-size:9px;
        font-family: "AvenirLTStdLight";
        color:#fff;
    }
    #open-icon{
        width:20px;
        height:auto;
        cursor:pointer;
        position:absolute;
        opacity:.7;
        z-index:200;
            svg{
            fill: #dea110;
            }
        }
        #open-icon:hover{
        opacity:.9;
        }
        #drawer{
        display:inline-block;
        overflow:hidden;
        position:relative;
        left:30px;
        }

        #slide{
        position:relative;
        z-index:200;
        right:100px;
        background-color: transparent;
        transition: right .3s;
        &.expand{
            right:0
        }
        .icon{
            height:20px;
            width:20px;
            margin-left:7px;
            display:inline-block;
            &:hover{
                opacity:.8;
            }
        }
        .icon-lg{
            height:auto;
            width:27px;
            margin-left:7px;
            position:relative;
            top:1px;
            display:inline-block;
            &:hover{
                opacity:.8;
            }
        }
    }
}


#main {
    position: relative;
    height: 100vh;
    width: 100vw;
    .main__image--top {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 100;
        width: 100vw;
        height: 100vh;
        background: url('./../../assets/hero__img--home.jpg') no-repeat center center;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
    }
    .main__image--top--overlay {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 300;
        width: 100vw;
        height: 100vh;
        background-color: black;
        opacity: .5;
        pointer-events: none;
    }
    .main__navbar {
        //margin-bottom:50px;
        position: fixed;
        width: 100%;
        z-index: 1000;
        background-color: transparent;
        transition: background-color .6s;
        /* Or border-top-color */
        ul{
            padding: 0;
            margin-top: 25px;
            margin-bottom: 15px;
            float: right;
            li {
                display: inline;
                cursor: pointer;
            }
        }
        .main__navbar--logo--container {
            display: inline;
            a {
                font-size: 30px;
                font-family: "AvenirLTStdBlack";
                position: relative;
            }
            svg {
                height: 40px;
                width: auto;
                margin-top: 15px;
                margin-left: 5px;
                opacity:.9;
            }
        }
        .icon-arrow-left {
            padding-top: 6px;
            padding-bottom: 6px;
            padding-left: 6px;
            padding-right: 6px;
            border-radius: 50%;
            position: relative;
            top: -8px;
            border: 1px solid $color-white;
            &:hover {
                color: $brand-tertiary;
                border: 1px solid $brand-tertiary;
            }
        }
        .main__navbar--item--wrapper {
            position: relative;
            height: 27px;
            width: 23px;
            cursor: pointer;
            display: inline-block;
            color: $color-white;
            .main__navbar-item {
                font-size: 30px;
            }
            .icon-bars:hover {
                color: $brand-tertiary;
            }
            i {
                font-size: 30px;
            }
        }
    }
    .main__navbar.alt {
        background-color: $color-white;
        box-shadow: 0px 0px 5px 0px rgba(85, 85, 85, 0.25);
    }
    .main__masthead {
        .main__masthead--content {
            height: 100vh;
            overflow:hidden;
            .sd-container{
                position:absolute;
                bottom:-100px;
                z-index:200;
                left:50vw;
                opacity:.9;
                .scrolldown{
                    z-index:200;
                    position:absolute;
                    bottom:0;
                    width:1px;
                    height:0;
                    background-color:#fff;
                    transition: height 1.5s;
                    transition-delay: 1s;
                    &.grow{
                        height:200px;
                    }
                }
                .dot{
                    opacity:0;
                    z-index:200;
                    width:99px;
                    height:300px;
                    position:relative;
                    left:-52px;
                    top:56px;
                    transition: opacity .5s;
                    transition-delay: 2.5s;
                    &.show{
                        opacity:1;
                    }
                }
                .scroll-text{
                    position:absolute;
                    color:white;
                    z-index:200;
                    bottom:100px;
                    top:70px;
                    transform: rotate(-90deg);
                    font-family: 'proxima_novablack';
                    font-size:13px;
                    right:2px;;
                    width:100px;
                    opacity:0;
                    transition: opacity .5s;
                    transition-delay: 2.5s;
                    &.show{
                        opacity:1;
                    }
                }
            }
        }
        .text__about--link {
            position: absolute;
            z-index: 400;
            bottom: 30px;
            left: 60px;
            color: $color-white;
            a {
                color: $color-white;
                font-size: 12px;
            }
        }
    }
    #main__navbar--burger--wrapper {
        opacity:.9;
        &:hover{
            opacity:1;
        }
        .flip--wrapper {
            position: relative;
            min-height: 2px;
        }
        .burger__bar {
            height: 2px;
            background-color: $color-white;
            /* Or border-top-color */
            &.burger__bar--top {
                width: 30px;
                margin-bottom: 5px;
                -webkit-transition: .5s ease-in-out;
                -moz-transition: .5s ease-in-out;
                -o-transition: .5s ease-in-out;
                transition: .5s ease-in-out;
                &.open {
                    transform: scale(0);
                }
            }
            &.burger__bar--bottom {
                width: 30px;
                margin-top: 5px;
                -webkit-transition: .5s ease-in-out;
                -moz-transition: .5s ease-in-out;
                -o-transition: .5s ease-in-out;
                transition: .5s ease-in-out;
                &.open {
                    transform: scale(0);
                }
            }
            &.burger__bar--top--flip {
                width: 30px;
                position: absolute;
                top: 0;
                left: 0;
                -webkit-transition: .5s ease-in-out;
                -moz-transition: .5s ease-in-out;
                -o-transition: .5s ease-in-out;
                transition: .5s ease-in-out;
                &.open {
                    -webkit-transform: rotate(45deg);
                    -moz-transform: rotate(45deg);
                    -o-transform: rotate(45deg);
                    -ms-transform: rotate(45deg);
                    transform: rotate(45deg);
                }
            }
            &.burger__bar--bottom--flip {
                width: 30px;
                position: absolute;
                top: 0;
                left: 0;
                -webkit-transition: .5s ease-in-out;
                -moz-transition: .5s ease-in-out;
                -o-transition: .5s ease-in-out;
                transition: .5s ease-in-out;
                &.open {
                    -webkit-transform: rotate(-45deg);
                    -moz-transform: rotate(-45deg);
                    -o-transform: rotate(-45deg);
                    -ms-transform: rotate(-45deg);
                    transform: rotate(-45deg);
                }
            }
        }
        .burger__bar.alt {
            background-color: $brand-primary;
        }
    }
}

h1.hero-title {
    font-size: 220px;
    font-family: 'proxima_novablack';
    line-height:1em !important;
    letter-spacing:-3px;
}   

.wrap--hero-copy{
    display: flex;
    flex-direction: column;
    justify-content: center;
    height:100vh;

    .tagline{
        position:absolute;
        z-index:200;
        font-family: 'proxima_novablack';
        color:#dea110;
        opacity:.9;
        font-size:27px;
        top:217px;
        left:300px;
        width:290px;
        opacity:0;
        transition: opacity 1s;
        transition-timing-function: ease-out;
        transition-delay: 1.5s;
        &.reveal{
            opacity:.9;
        }
    }

    .welcome-block{
        margin:0 auto;
        position:relative;
        display:block;
        width: 570px;
        height: 250px;
        h1{
            color: rgb(247, 247, 247);
            font-size: 180px;
            letter-spacing: -25px;
            text-shadow: -10px 1px 14px rgba(0, 0, 0, 0.26);
            line-height:.7em;
            font-family: 'proxima_novablack';
            opacity:1;
            transition: opacity .6s;
                    
        }
        .alt{
            opacity:0;
        }

        h1#firstname {
            position:absolute;
            z-index:300;
            margin-top:0;
            letter-spacing:-25px;
            margin-bottom:0;
            width: 305px;
            height: 110px;
            left:0;
            top:0;

            span:nth-child(1){
                margin-right:-11px;
                transition: all 1s;
                transition-timing-function: ease-out;
                transition-delay: .8s;
                opacity:1;
                &.alter{
                    opacity:0;
                    margin-right:-90px;
                }
            }
            span:nth-child(2){
                margin-right:-12px;
                transition: all 1s;
                transition-timing-function: ease-out;
                transition-delay: .9s;
                opacity:1;
                &.alter{
                    margin-right:-90px;
                    opacity:0;
                }
            }
            span:nth-child(3){
                transition: all 1s;
                transition-timing-function: ease-out;
                transition-delay: 1s;
                opacity:1;
                &.alter{
                    margin-right:-90px;
                    opacity:0;
                }
            }
        }

        h1#lastname {
            position:absolute;
            z-index:300;
            margin-top:0;
            margin-bottom:0;
            top: 91px;
            left: 179px;
            width: 455px;
            height: 115px;

            span:nth-child(1){
                margin-right:-11px;
                transition: all 1s;
                transition-timing-function: ease-out;
                transition-delay: .6s;
                opacity:1;
                &.alter{
                    margin-right:-90px;
                    opacity:0;
                }
            }
            span:nth-child(2){
                margin-right:-11px;
                transition: all 1s;
                transition-timing-function: ease-out;
                transition-delay: .7s;
                opacity:1;
                &.alter{
                    margin-right:-90px;
                    opacity:0;
                }
            }
            span:nth-child(3){
                margin-right:-12px;
                transition: all 1s;
                transition-timing-function: ease-out;
                transition-delay: .8s;
                opacity:1;
                &.alter{
                    margin-right:-90px;
                    opacity:0;
                }
            }
            span:nth-child(4){
                margin-right:-11px;
                transition: all 1s;
                transition-timing-function: ease-out;
                transition-delay: .9s;
                opacity:1;
                &.alter{
                    margin-right:-90px;
                    opacity:0;
                }
            }
            span:nth-child(5){
                margin-right:0;
                transition: all 1s;
                transition-timing-function: ease-out;
                transition-delay: 1s;
                opacity:1;
                &.alter{
                    margin-right:-90px;
                    opacity:0;
                }
            }
        }
    }
}

.overlay--text--wrapper {
    position: relative;
    text-align: center;
    background-color: $color-white;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    text-align: center;
    height: 500px;
    z-index: 300;
    .light h1 {
        margin: 0;
        text-transform: uppercase;
        line-height: 1.9;
        color: #000;
        font-family: "AvenirLTStdBook";
        text-transform: uppercase;
        font-size: 100px;
    }
    .light img {
        position: absolute;
        width: 100%;
        max-height: 350px;
        top: 50px;
        left: -100px;
        mix-blend-mode: lighten;
    }
    .light {
        background: #fff;
    }
}

.list-group-item:last-child {
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
}

.list-group-item:first-child {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
}

//BS4 override
.list-group-item,
.list-group-item.active {
    background-color: transparent;
    border: none;
    padding: 0;
}


</style>


