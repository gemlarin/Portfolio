  <template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: "app",

  data() {
    return {
   
    };
  },
  components: {

  },
  mounted(){
      var self = this;
      //fix to ensure page loads at top on iOS
      setTimeout(function(){ 
        if(window.location.hash){
          self.$scrollTo(window.location.hash);
        }else{
          window.scrollTo(0,0);
        }

    }, 1000);
  },
  methods: {
  
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

img.responsive {
    width: 100%;
    height: auto;
    padding: 2px !important;
}

*:focus {
    outline: none !important;
}




</style>
