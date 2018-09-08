<template>
<div class="container">
    <div class="row">
        <div class="col-12 col-sm-12 col-md-8">
            <img v-scroll-reveal="{ delay: 250, origin:'left', duration: 500, easing:'ease-out'}" :src="activeImage" @mouseover="activeImage = otherImage" @mouseout="activeImage = myImage" class="preview--img img-fluid popup-link-3">
        </div>
        <div class="col-12 col-sm-12 col-md-4 text-container">
            <h2>CEC Project Locator</h2>
            <h5>Role: Devloper</h5>
            <p>CEC has a vast portfolio of energy projects through the US and needed a way for potential customers and investors to locate projects in their market. The previous locator was built on a legacy system and extrememly slow to load. Utilizing their corporate API along with Leaflet.js and Mapbox I developed an updated locator that added several features that the pervious version lacked, including a map interface and location/utility filtering.</p>
            <a href="https://cleanenergyco.com/projects/" target="_blank">visit site</a>
        </div>
    </div>
</div>

</template>

<script>
    import './../../../assets/project-three.jpg'
    import './../../../assets/project-three-hover.jpg'
    export default {
        name: 'ProjectThree',
        data () {
            return {
                activeImage: './dist/project-three.jpg',
                myImage: './dist/project-three.jpg',
                otherImage: './dist/project-three-hover.jpg'
            }
        },
        mounted: function(){
            $('.popup-link-3').magnificPopup({
                items: {
                src: './dist/project-three-hover.jpg'
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
            margin-top:70px;
            .text-container{
                padding-left:15px;
            }
            h2{
                margin-top:30px;
            }
        }
    }
</style>