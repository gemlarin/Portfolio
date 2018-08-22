<template>
  <div id="main">
    <div class="main__navbar">
      <div class="navbar__hidden--top">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <ul>
                <li>
                    <a href="javascript:void(0)" v-scroll-to="'#introduction'">ABOUT</a>
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
            <div class="social-media">
            <div id="open-icon-text">social</div>
            <div id="open-icon">
                <svg @click="toggleOpen" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                    <g>
                        <path class="social-icon" d="M412.854,314c-34.299,0-64.576,17.535-82.348,44.109l-122.541-56.533
                            c6.419-13.874,10.008-29.313,10.008-45.577c0-16.775-3.815-32.674-10.618-46.881l122.35-56.444
                            C347.359,179.929,378.034,198,412.854,198c54.589,0,99-44.411,99-99s-44.411-99-99-99s-99,44.411-99,99
                            c0,9.107,1.242,17.927,3.555,26.309L190.554,183.83c-19.968-22.522-49.099-36.744-81.495-36.744
                            C49.004,147.086,0.146,195.945,0.146,256S49.004,364.914,109.06,364.914c32.935,0,62.5-14.696,82.488-37.872l126.259,58.247
                            c-2.569,8.797-3.953,18.095-3.953,27.711c0,54.589,44.411,99,99,99s99-44.411,99-99S467.443,314,412.854,314z M412.854,30
                            c38.047,0,69,30.953,69,69s-30.953,69-69,69s-69-30.953-69-69S374.807,30,412.854,30z M109.06,334.914
                            c-43.513,0-78.914-35.4-78.914-78.914s35.4-78.914,78.914-78.914s78.914,35.4,78.914,78.914S152.573,334.914,109.06,334.914z
                            M412.854,482c-38.047,0-69-30.953-69-69s30.953-69,69-69s69,30.953,69,69S450.901,482,412.854,482z"/>
                    </g>
                </svg>
            </div>
            <div id="drawer">
                <div id="slide" :class="{ expand: drawerOpen }">
                    <div class="icon _lg">
                        <a href="http://jsfiddle.net/user/gemlarin/fiddles/" target="_blank">
                            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                                <g>
                                    <path class="svgicon" d="M443.0233,322.3473c0.2923-3.7185,0.5683-7.3883,0.5683-11.1555c0-80.037-64.8869-144.9077-144.9077-144.9077
                                        c-58.4405,0-108.697,34.7005-131.5925,84.5349c-12.0648-8.5412-26.7926-13.6399-42.7383-13.6399
                                        c-40.8872,0-74.0127,33.1417-74.0127,74.0289c0,6.1217,0.8281,12.0486,2.2246,17.7481C22.4436,345.4052,2,377.329,2,414.0756
                                        C2,467.6122,45.3879,511,98.9082,511s273.6585,0,312.9869,0c53.5204,0,96.9082-43.3878,96.9082-96.9244
                                        C508.8358,371.4347,481.28,335.3214,443.0233,322.3473z M437.3725,404.9661c-3.3126,35.0415-27.6857,72.5513-86.11,72.5513
                                        c-44.1835,0-86.2074-46.9277-104.54-72.9572c-0.0487-0.0812-34.2459-52.8871-72.0966-51.5231
                                        c-37.0226,1.3315-46.7816,20.8008-48.4541,38.2566c-1.6563,17.4396,8.3138,35.3988,24.2433,43.6314
                                        c20.0052,10.2624,44.9305,3.9621,70.1805-17.9267l24.7629,28.66c-24.3894,21.1093-50.4027,31.9563-75.0681,31.9725
                                        c-12.9254,0-25.4774-2.9878-37.2337-9.0445c-29.7804-15.3611-47.7071-47.8371-44.5732-80.8326
                                        c3.3125-35.074,27.702-72.5837,86.1262-72.5837c52.1401,0,88.773,47.4474,100.7079,64.0101
                                        c19.7616,27.4909,54.2348,60.4865,75.9288,60.4865c37.055,0,46.7816-20.8333,48.4541-38.2729
                                        c1.6563-17.4233-8.3138-35.3988-24.2433-43.6152c-19.989-10.2624-44.9142-3.9458-70.1643,17.9267L280.53,347.0615
                                        c37.2012-32.1674,78.1208-40.53,112.3018-22.9118C422.6122,339.4946,440.5226,371.9705,437.3725,404.9661z"/>
                                </g>
                            </svg>

                        </a>
                    </div>
                    <div class="icon">
                        <a href="https://www.linkedin.com/in/dannygibas/" target="_blank">
                    
                            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                                <g>
                                    <path class="svgicon" d="M255.196,3C115.0327,3,1.392,116.6407,1.392,256.804s113.6407,253.804,253.804,253.804
                                        S509,396.9673,509,256.804C509,116.6094,395.3593,3,255.196,3z M191.745,379.7402h-63.451v-222.079h63.451V379.7402z
                                        M161.9862,144.0514c-16.4339,0-29.7265-13.3249-29.7265-29.7588s13.3249-29.7588,29.7265-29.7588
                                        c16.4339,0.0313,29.7588,13.3562,29.7588,29.7588C191.745,130.7265,178.4201,144.0514,161.9862,144.0514z M413.823,379.7402
                                        h-63.451V242.4323c0-16.0853-4.6003-27.347-24.3654-27.347c-32.7728,0-39.0856,27.347-39.0856,27.347v137.3079H223.47v-222.079
                                        h63.451v21.2241c9.0732-6.9474,31.7249-21.1928,63.451-21.1928c20.5583,0,63.451,12.3095,63.451,86.6736L413.823,379.7402
                                        L413.823,379.7402z"/>
                                </g>
                            </svg>
                        </a>
                    </div>
                    <div class="icon">
                        <a href="https://twitter.com/RestingDev" target="_blank">
                            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                                <g>
                                    <path class="svgicon" d="M255.326,1C114.5398,1,0,115.5398,0,256.326c0,140.7759,114.5398,255.326,255.326,255.326
                                        c140.7759,0,255.326-114.5501,255.326-255.326C510.652,115.5398,396.1224,1,255.326,1z M369.2282,197.8888
                                        c0.1132,2.53,0.1748,5.0806,0.1748,7.6312c0,77.6592-59.0955,167.1765-167.2177,167.1765c-33.1885,0-64.0835-9.6984-90.083-26.38
                                        c4.5972,0.5451,9.2767,0.8228,14.0179,0.8228c27.5422,0,52.8732-9.4001,72.99-25.1562
                                        c-25.7115-0.4731-47.4224-17.4633-54.8993-40.8197c3.579,0.6788,7.2712,1.0593,11.0457,1.0593
                                        c5.3583,0,10.5623-0.6994,15.4886-2.0466c-26.884-5.3892-47.1344-29.1363-47.1344-57.6247c0-0.2468,0-0.504,0.0103-0.7405
                                        c7.9192,4.3915,16.9799,7.045,26.6063,7.3432c-15.756-10.5212-26.1332-28.5193-26.1332-48.9034
                                        c0-10.7783,2.89-20.8778,7.95-29.558c28.9718,35.5642,72.2906,58.9514,121.122,61.4198
                                        c-1.0079-4.3093-1.5118-8.7831-1.5118-13.4009c0-32.448,26.3081-58.7663,58.756-58.7663c16.9079,0,32.16,7.1375,42.8972,18.5535
                                        c13.4009-2.6329,25.9481-7.5078,37.3332-14.2648c-4.4224,13.73-13.7094,25.2385-25.8761,32.52
                                        c11.8993-1.4193,23.2535-4.5664,33.7542-9.2459C390.6819,179.2736,380.7161,189.6302,369.2282,197.8888z"/>
                                </g>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            </div>
            </li>
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
                    <span>d</span>
                    <span>a</span>
                    <span>n</span>
                </h1>
                <h1 id="lastname">
                    <span>g</span>
                    <span>i</span>
                    <span>b</span>
                    <span>a</span>
                    <span>s</span>
                </h1>
                <div class="tagline">Experience. Development. Design</div>
            </div>
        </div>
        <div class="sd-container">
            <!--<div class="scrolldown"></div>-->
            <img v-scroll-to="'#introduction'" class="dot" src="./../../assets/scrolldown.svg">
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
import Parallax from 'vue-parallaxy'
export default {
    data: function(){
        return{
            open : true,
            drawerOpen: false
        }
    },
    components:{
        Parallax
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
                //$('h1#firstname span').removeClass("alter");
                //$('h1#lastname span').removeClass("alter");
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
            //do some fabulous optimization to prevent scroll overloading ... later...
            if(window.scrollY > 60 && this.open){
                this.open = false;
             
                $('.logo__background-color').addClass('alt');
                $('.main__navbar').addClass('alt');
                $('.burger__bar').addClass('alt');
                $('.svgicon').addClass('alt');
                $('.social-icon').addClass('alt');
            }else if(window.scrollY < 60 && !this.open){
                this.open = true;
            
                $('.logo__background-color').removeClass('alt');
                $('.main__navbar').removeClass('alt');
                $('.burger__bar').removeClass('alt');
                $('.svgicon').removeClass('alt');
                $('.social-icon').removeClass('alt');
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
$brand-tertiary:        #fb2662 !default;
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
    &.alt {
        fill: $brand-tertiary;
    }
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
    display:inline;
    cursor:default;
    position:absolute;
    right:0;
    top:18px;
    .social-icon{
        fill: $color-white;
        transition: fill .6s;
        &.alt {
            fill: $brand-tertiary;
        }
    }
    #Capa_1{
        position:relative;
        top:0px;
    }
    #open-icon-text{
        display:none;
        position:absolute;
        opacity:.9;
        top:-10px;
        left:-1px;
        z-index:200;
        font-size:9px;
        font-family: "AvenirLTStdLight";
        color:#fff;
    }//end open-icon-text
    #open-icon{
        width:20px;
        height:20px;
        cursor:pointer;
        position:absolute;
        top:5px;
        opacity:.8;
        z-index:200;
        &:hover{
            opacity:.9;
        }
    }//end open-icon-text
    #drawer{
        display:inline-block;
        overflow:hidden;
        position:relative;
        right:110px;
        #slide{
            position:relative;
            z-index:200;
            left:100px;
            top:0px;
            background-color: transparent;
            transition: left .3s;
                a{
                    height:20px;
                    width:20px;
                }
                &.expand{
                    left:0;
                }
                .icon{
                    height:20px;
                    width:20px;
                    margin-left:7px;
                    position:relative;
                    top:-1px;
                    display:inline-block;
                    &:hover{
                        opacity:.8;
                    }
                }
                ._lg{
                    width:27px;
                }
                .svgicon{
                    fill:#fff;
                    &.alt{
                        fill:$brand-tertiary;
                    }
                }
        }
    }
    
}//end social


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
        background: url('./../../assets/hero__img--home.jpg') no-repeat center center fixed;
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
                    cursor:pointer;
                    position:relative;
                    left:-52px;
                    top:130px;
                    transition: opacity .5s;
                    transition-delay: .5s;
                    &.show{
                        opacity:1;
                    }
                    &:hover{
                        filter: brightness(0.5) sepia(1) hue-rotate(230deg) saturate(6);
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
            background-color: $brand-tertiary;
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
        position:relative;
        z-index:200;
        font-family: "AvenirLTStdLight";
        color:white;
        opacity:.9;
        font-size:15px;
        margin-left:60px;
        top:-30px;
        letter-spacing:.5px;
        display:inline;
        opacity:0;
        transition: opacity 1s;
        transition-timing-function: ease-out;
        transition-delay: .5s;
        &.reveal{
            opacity:1;
        }
    }

    .welcome-block{
        margin:0 auto;
        position:relative;
        display:block;
        width: 850px;
        height: 150px;
        right:-100px;
        h1{
            color: rgb(247, 247, 247);
            font-size: 150px;
            letter-spacing: -25px;
            text-shadow: -10px 1px 14px rgba(0, 0, 0, 0.26);
            line-height:.7em;
            font-family: 'proxima_novablack';
            opacity:1;
            transition: opacity .6s;
                    
        }
        @media (max-width: 768px){
        }
        .alt{
            opacity:0;
        }

        h1#firstname {
            position:relative;
            z-index:300;
            margin-right:20px;
            display:inline;

            span:nth-child(1){
                margin-right:-1px;
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
                margin-right:-1px;
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
            position:relative;
            z-index:300;
            display:inline;

            span:nth-child(1){
                margin-right:-1px;
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
                margin-right:-1px;
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
                margin-right:-1px;
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
                margin-right:-1px;
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

 @media (max-width: 1080px) and (min-width: 881px){
     .wrap--hero-copy{
         .welcome-block{
            margin:0 auto;
            position:relative;
            display:block;
            width: 850px;
            height: 150px;
            right:0;
        }

    }

}

 @media (max-width: 880px) and (min-width: 631px){
     .wrap--hero-copy{

         .welcome-block{
            width:560px;
            right:0;
            h1{

            }
            h1#firstname{

            }
            h1#lastname{
                
            }
        }
        .tagline{
            display:inline-block;
            margin-left:0;
            top:-5px;
            right:-330px;
            font-size:14px;
        }
    }
}

 @media (max-width: 630px){
     .wrap--hero-copy{

         .welcome-block{
            width:560px;
            height:240px;
            right:-25px;
            h1{

            }
            h1#firstname{
                
                display:block;
                width:233px;
                
            }
            h1#lastname{
                display:block;
                top:-10px;
                width:327px;
            }
        }
        .tagline{
            display:inline-block;
            margin-left:0;
            top:-14px;
            right:-90px;
            font-size:14px;
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


