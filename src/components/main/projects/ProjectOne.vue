<template>
<div class="container">
    <div class="row">
        <div class="col-12 col-sm-12 col-md-8">
            <img v-scroll-reveal="{ delay: 250, origin:'left', duration: 500, easing:'ease-out'}" :src="activeImage" @mouseover="activeImage = otherImage" @mouseout="activeImage = myImage" class="preview--img img-fluid popup-link">
        </div>
        <div class="col-12 col-sm-12 col-md-4 text-container">
            <h2>RooflessSolar<sup>&trade;</sup></h2>
            <h5>Role: Devloper</h5>
            <p>Clean Energy Collective was moving into the New York energy market and required a landing page that would capture the visitors zip code to check their load zone. The zip code would be cross checked against a coverage list defined in their corporate API. The results would determine which lead form the user would be presented. This site was built on the Vue.js framework as part of a swappable component landing page architecture.</p>
            <a href="https://cleanenergyco.com/rooflesssolar/ny/" target="_blank">visit site</a>
        </div>
    </div>
</div>

</template>

<script>
    import './../../../assets/project-one.jpg'
    import './../../../assets/project-one-hover.jpg'
    export default {
        name: 'ProjectOne',
        data () {
            return {
                activeImage: './dist/project-one.jpg',
                myImage: './dist/project-one.jpg',
                otherImage: './dist/project-one-hover.jpg'
            }
        },
        mounted: function(){
            $('.popup-link').magnificPopup({
                items: {
                src: './dist/project-one-hover.jpg'
                },
                type: 'image',
                closeOnContentClick: true
            });
        }
    }
</script>
<style scoped lang="scss">
    
    .container{
        margin-top:130px;
        font-family: "AvenirLTStdBook";
        h2{
            font-family: 'proxima_novablack';
            color:#212529;
            font-size:25px;
            margin-bottom:0;
            margin-top:40px;
            line-height:1em;
        }
        h5{
            font-family: "AvenirLTStdLight";
            color:#212529;
            font-size:12px;
            margin-top:5px;
        }
        p{
            font-size:14px;
        }
        a{
            color:#fb2662;
            font-size:14px;
        }
        sup{
            position:relative;
            top:-4px;
        }
        .text-container{
            padding-left:70px;
        }
        img{
            cursor:pointer;
            
        }
    }

    @media (max-width: 767px){
        .container{
            .text-container{
                padding-left:15px;
            }
            h2{
                margin-top:20px;
            }
        }
    }
</style>