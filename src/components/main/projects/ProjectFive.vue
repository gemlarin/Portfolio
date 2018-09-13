<template>
<div class="container">
    <div class="row">
        <div class="col-12 col-sm-12 col-md-12 col-lg-8">
            <img v-scroll-reveal="{ delay: 250, origin:'left', duration: 500, easing:'ease-out'}" :src="activeImage" @mouseover="activeImage = otherImage" @mouseout="activeImage = myImage" class="preview--img img-fluid popup-link-5">
        </div>
        <div class="col-12 col-sm-12 col-md-12 col-lg-4 text-container">
            <h2>CEC e-Brochure</h2>
            <h5>Role: Developer</h5>
            <p>Deploying sales reps into the field to sell a complicated product is a challenge without good tools. CEC needed a way to put an electronic brochure into the hands of the sales reps that could be used to interactively describe the product. The brochure would be deployed on the iPad, but would have no network connectivity, so it was treated as a faux PWA - caching it locally and running it in App mode.</p>
            <a href="https://cleanenergyco.com/salestool/ny" target="_blank">view app <span>&rarr;</span></a>
            <hr />
            <div class="technology">
            <img src="./../../../assets/logos/bootstrap.svg" v-b-tooltip.hover title="Bootstrap"/>
            <img style="width:35px;" src="./../../../assets/logos/sass.svg" v-b-tooltip.hover title="SASS"/>
            </div>
        </div>
    </div>
</div>

</template>

<script>
    import './../../../assets/project-five.jpg'
    import './../../../assets/project-five-hover.jpg'
    export default {
        name: 'ProjectFive',
        data () {
            return {
                activeImage: './dist/project-five.jpg',
                myImage: './dist/project-five.jpg',
                otherImage: './dist/project-five-hover.jpg'
            }
        },
        mounted: function(){
            $('.popup-link-5').magnificPopup({
                items: {
                src: './dist/project-five-hover.jpg'
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
        .technology img{
            width:25px;
            display:inline-block;
            margin-right:10px;
        }
   
    }
    @media (max-width: 991px){
        .container{
            .text-container{
                padding-left:15px;
            }
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