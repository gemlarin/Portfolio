<template>
<div class="container">
    <div class="row">
        <div class="col-12 col-sm-12 col-md-8">
            <img v-scroll-reveal="{ delay: 250, origin:'left', duration: 500, easing:'ease-out'}" :src="activeImage" @mouseover="activeImage = otherImage" @mouseout="activeImage = myImage" class="preview--img img-fluid popup-link-5">
        </div>
        <div class="col-12 col-sm-12 col-md-4 text-container">
            <h2>CEC Corporate Website</h2>
            <h5>Role: Devloper</h5>
            <p>Aenean eu congue dolor, in dapibus urna. Cras vitae erat vel lectus maximus consectetur. Nam tincidunt vel urna sit amet aliquam. Aenean sapien elit, facilisis sed nibh id, tempor accumsan diam. Integer a porta sapien. Mauris hendrerit nisl ac dui volutpat, id lobortis eros elementum.</p>
            <a href="#" target="_blank">visit site</a>
        </div>
    </div>
</div>

</template>

<script>
    import './../../../assets/project-five.jpg'
    import './../../../assets/project-five.jpg'
    export default {
        name: 'ProjectFive',
        data () {
            return {
                activeImage: './dist/project-five.jpg',
                myImage: './dist/project-five.jpg',
                otherImage: './dist/project-five.jpg'
            }
        },
        mounted: function(){
            $('.popup-link-5').magnificPopup({
                items: {
                src: './dist/project-five.jpg'
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