
<template>
<div class="container">
    <div class="row">
        <div class="col-12 col-sm-12 col-md-4 order-2 order-sm-2 order-md-1 text-container">
            <h2>CEC e-Brochure</h2>
            <h5>Role: Developer</h5>
            <p>Aenean eu congue dolor, in dapibus urna. Cras vitae erat vel lectus maximus consectetur. Nam tincidunt vel urna sit amet aliquam. Aenean sapien elit, facilisis sed nibh id, tempor accumsan diam. Integer a porta sapien. Mauris hendrerit nisl ac dui volutpat, id lobortis eros elementum.</p>
            <a href="#" target="_blank">visit site</a>
        </div>
        <div class="col-12 col-sm-12 col-md-8 order-1 order-sm-1 order-md-2">
             <img v-scroll-reveal="{ delay: 250, origin:'right', duration: 500, easing:'ease-out'}" :src="activeImage" @mouseover="activeImage = otherImage" @mouseout="activeImage = myImage" class="preview--img img-fluid popup-link-6">
        </div>
    </div>
</div>

</template>

<script>


    export default {
        name: 'ProjectSix',
        data () {
            return {
                activeImage: './dist/project-six.jpg',
                myImage: './dist/project-six.jpg',
                otherImage: './dist/project-six.jpg'
            }
        },
        mounted: function(){
            $('.popup-link-6').magnificPopup({
                items: {
                src: './dist/project-six.jpg'
                },
                type: 'image',
                closeOnContentClick: true
            });
        }
    }
</script>
<style scoped lang="scss">
    
    .container{
        margin-top:160px;
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
            padding-right:70px;
        }
        img{
            cursor: pointer;
        }
    }
    @media (max-width: 767px){
        .container{
            margin-top:60px;
            .text-container{
                padding-left:15px;
            }
            h2{
                margin-top:30px;
            }
        }
    }
</style>