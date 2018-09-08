  <template>
  <div id="app">
      <div v-bind:class="{ 'hide': !isShowLoader }" class="load--wrapper">
        <div v-bind:class="{ 'hide': !isShowLoader }" class="white--overlay">
          <img v-bind:class="{ 'hide': !isShowLoader }" src="./assets/loader.svg">
        </div>
      </div>
      <router-view></router-view>
      <div id="imagecache">
        <img src="./assets/project-one.jpg">
        <img src="./assets/project-one-hover.jpg">
        <img src="./assets/project-two.jpg">
        <img src="./assets/project-two-hover.jpg">
        <img src="./assets/project-three.jpg">
        <img src="./assets/project-three-hover.jpg">
        <img src="./assets/project-four.jpg">
        <img src="./assets/project-four-hover.jpg">
        <img src="./assets/project-five.jpg">
        <img src="./assets/project-five-hover.jpg">
      </div>
  </div>
</template>

<script>

import './assets/loader.svg'
export default {
  name: "app",

  data() {
    return {
      counter:0,
      len:0
    };
  },
  components: {

  },
  computed:{
    isShowLoader: function(){
      //console.log("showloader: ", this.$store.getters.getShowLoader)
      return this.$store.getters.getShowLoader
    }
  },
  methods: {

    hideload: function(){
      var selfi = this;
      setTimeout(function(){ 
        if(window.location.hash){
          selfi.$scrollTo(window.location.hash);
        }else{
          window.scrollTo(0,0);
        }
        selfi.$store.dispatch('hideLoader');
    }, 1000);

    }
  },
  mounted(){
    //make sure all images are loaded before hiding the loader
    $(window).bind("load", () => {
      this.hideload();
    });
  },
  metaInfo: {
    title: "Danny Gibas", // set a main global title
    titleTemplate: "%s - Welcome", // set your default global subtitle
    htmlAttrs: {
      lang: "en",
      amp: undefined // "amp" has no value
    },
    link: [
      { rel: "icon", href: "", type: "image/x-icon" },
      {
        rel: "apple-touch-icon",
        sizes: "57x57",
        href: "/dist/apple-icon-57x57.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "72x72",
        href: "/dist/apple-icon-72x72.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "114x114",
        href: "/dist/apple-icon-114x114.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "144x144",
        href: "/dist/apple-icon-144x144.png"
      }
    ],
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"
      },
      { equiv: "x-ua-compatible", content: "ie=edge" },
      {
        property: "og:image",
        content:
          ""
      },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Danny Gibas - Front End Engineer" },
      {
        property: "og:description",
        content:
          "Portfolio."
      },
      { property: "og:url", content: "" },
      { property: "og:site_name", content: "Danny Gibas - Front End Engineer" },
      { property: "og:locale", content: "en_US" }
    ]
  }
};
</script>

<style lang="scss">

$brand-primary:         #fc5356 !default;
$color-white:			#fff   !default;

@font-face {
    font-family: 'proxima_novablack';
    src: url('./assets/fonts/pxoxima-webfont.woff2') format('woff2'),
         url('./assets/fonts/pxoxima-webfont.woff') format('woff'),
         url('./assets/fonts/pxoxima-webfont.ttf') format('truetype'),
         url('./assets/fonts/pxoxima-webfont.svg#proxima_novablack') format('svg');
    font-weight: normal;
    font-style: normal;

}

@font-face {
  font-family: "AvenirLTStdLight";
  src: url("./assets/fonts/AvenirLTStdLight.eot");
  src: url("./assets/fonts/AvenirLTStdLight.eot") format("embedded-opentype"),
    url("./assets/fonts/AvenirLTStdLight.woff2") format("woff2"),
    url("./assets/fonts/AvenirLTStdLight.woff") format("woff"),
    url("./assets/fonts/AvenirLTStdLight.ttf") format("truetype"),
    url("./assets/fonts/AvenirLTStdLight.svg#AvenirLTStdLight") format("svg");
}

@font-face {
  font-family: "AvenirLTStdBook";
  src: url("./assets/fonts/AvenirLTStdBook.eot");
  src: url("./assets/fonts/AvenirLTStdBook.eot") format("embedded-opentype"),
    url("./assets/fonts/AvenirLTStdBook.woff2") format("woff2"),
    url("./assets/fonts/AvenirLTStdBook.woff") format("woff"),
    url("./assets/fonts/AvenirLTStdBook.ttf") format("truetype"),
    url("./assets/fonts/AvenirLTStdBook.svg#AvenirLTStdBook") format("svg");
}

@font-face {
  font-family: "AvenirLTStdMedium";
  src: url("./assets/fonts/AvenirLTStdMedium.eot");
  src: url("./assets/fonts/AvenirLTStdMedium.eot") format("embedded-opentype"),
    url("./assets/fonts/AvenirLTStdMedium.woff2") format("woff2"),
    url("./assets/fonts/AvenirLTStdMedium.woff") format("woff"),
    url("./assets/fonts/AvenirLTStdMedium.ttf") format("truetype"),
    url("./assets/fonts/AvenirLTStdMedium.svg#AvenirLTStdMedium") format("svg");
}

@font-face {
  font-family: "AvenirLTStdBlack";
  src: url("./assets/fonts/AvenirLTStdBlack.eot");
  src: url("./assets/fonts/AvenirLTStdBlack.eot") format("embedded-opentype"),
    url("./assets/fonts/AvenirLTStdBlack.woff2") format("woff2"),
    url("./assets/fonts/AvenirLTStdBlack.woff") format("woff"),
    url("./assets/fonts/AvenirLTStdBlack.ttf") format("truetype"),
    url("./assets/fonts/AvenirLTStdBlack.svg#AvenirLTStdBlack") format("svg");
}

html{
  -webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

/* WebKit, Blink, Edge */
.form-control::-webkit-input-placeholder { color: black }  
/* Mozilla Firefox 4 to 18 */
.form-control:-moz-placeholder { color: black }  
/* Mozilla Firefox 19+ */
.form-control::-moz-placeholder { color: black }  
/* Internet Explorer 10-11 */
.form-control:-ms-input-placeholder { color: black }  
 /* Microsoft Edge */
.form-control::-ms-input-placeholder { color: black } 

#imagecache{
  display:none !important;
  img{
    display:none !important;
  }
}

*:focus{
  outline: none;
  outline-style: none
}

select.form-control.wide:not([multiple]), select.form-control:not([multiple]) {
  -webkit-appearance: none;
  -moz-appearance: none;
  background-position: 95% 50%;
  background-repeat: no-repeat;
  padding: .5em 1em .5em .5em;
  padding-left:0;
  background-size:8px;
}

select.form-control:not([size]):not([multiple]) {
	height: calc(2.25rem + 15px);
	color:black;
  font-weight:400;
}

@media only screen and (max-width: 768px) {
    .form-control {
		  margin-bottom:10px;
	}
}

.field-wrapper{
  position:relative;
}

label{
  position:absolute;
  top:7px;
  margin-top:0;
  pointer-events: none;
  -webkit-transition:  all .2s ease-in-out;
  transition: all .2s ease-in-out;
  font-size:16px;
  color:#666;
  font-family: "AvenirLTStdMedium";
}
textarea{
  width:100%;
  height:46px !important;
  line-height:1em;
  resize: none;
}

.form-control, textarea{
  padding-top:10px 0 0 0 !important;
  font-size:22px;
  border:none;
	border-bottom: 1px solid grey;
	background: white;
	height:auto;
	color:#222;
	font-weight:400;
	border-radius: 0;
	box-shadow: none;
	margin-bottom:25px;
	padding-left:0;
  padding-bottom:0;
  font-family: "AvenirLTStdBook";
}
.form-control:focus, textarea:focus{
  color:#222;
}

.form-control:focus{
	border-bottom: 1px solid #fb2662;
  -webkit-box-shadow: none;
  box-shadow: none;
}

#btnSubmit{
	margin-top:30px;
}

.openup{
  margin-top:-22px;
  font-size: 14px;
}
.openupmore{
  margin-top:-37px;
  font-size: 14px;
}

.full-height{
    display:flex;
    align-items: stretch;
    height:100%;
}

.background {
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 200;
}

.accent-dot {
    height: 6px;
    width: 6px;
    margin: 0 auto 30px auto;
    background-color: $brand-primary;
}

.bg-light {
    background-color: $color-white !important;
}
.navlist{
   -webkit-order: 0;
    -ms-flex-order: 0;
    order: 0;
    -webkit-flex: 0 1 auto;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    -webkit-align-self: center;
    -ms-flex-item-align: center;
    align-self: center;
}
.btn-secondary{
  border-radius: 0;
  background-color:#222;
  border:none;
  padding:8px 40px;
  margin-top:15px;
}

.btn-secondary:hover,.btn-secondary:focus{
  background-color:#fb2662;
  transition:0s;
}
.btn-secondary:not(:disabled):not(.disabled):active:focus, .btn-secondary:not(:disabled):not(.disabled).active:focus, .show > .btn-secondary.dropdown-toggle:focus{
  box-shadow:none;
}

.mfp-close{
  opacity:1;
}
.mfp-close:hover, .mfp-close:focus{
  color:#fb2662;
}

.nav-wrap{
    position:absolute;
    bottom:20px;
    left:0;
    width:100vw;
    height:80px;
    background:transparent;
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
    -webkit-align-content: center;
    -ms-flex-line-pack: center;
    align-content: center;
    -webkit-align-items: flex-start;
    -ms-flex-align: start;
    align-items: flex-start;
}


img.responsive {
    width: 100%;
    height: auto;
    padding: 2px !important;
}

*:focus {
    outline: none !important;
}

.load--wrapper{
  height:100vh;
  width:100vw;
  background:transparent;
  position:fixed;
  top:0;
  left:0;
  transition: height .5s ease-out .4s;
  z-index:1001;
  &.hide{
        height:0;
      }
    .white--overlay{
      height:100vh;
      width:100vw;
      background:white;
      position:fixed;
      bottom:0;
      left:0;
      z-index:1002;
      transition: height .5s ease-out .4s;
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
      img{
        display:block;
         -ms-flex-order: 0;
        order: 0;
        -webkit-flex: 0 1 auto;
        -ms-flex: 0 1 auto;
        flex: 0 1 auto;
        -webkit-align-self: auto;
        -ms-flex-item-align: auto;
        align-self: auto;
        &.hide{
          display:none;
        }
      }
      &.hide{
        height:0;
      }
    }
}

      @media (max-width: 767px){
        img.mfp-img{
          max-width:100%;
        }
    }

</style>
