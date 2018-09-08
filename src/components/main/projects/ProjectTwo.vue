
<template>
<div class="container">
    <div class="row">
        <div class="col-12 col-sm-12 col-md-4 order-2 order-sm-2 order-md-1 text-container">
            <h2>Princeton Nassau Pediatrics</h2>
            <h5>Role: Designer</h5>
            <p>Princeton Nassau Pediatrics requested an update to their site design. The primary needs were a way to quickly funnel visitors to the appropriate sections of the site and a design that "was more fun and attactive than the pediatrics office down the road." This design received an "Outstanding Website" award in the 2015 Web Marketing Associations Web Award competition.</p>
            <a href="https://princetonnassaupediatrics.com/" target="_blank">visit site</a>
        </div>
        <div class="col-12 col-sm-12 col-md-8 order-1 order-sm-1 order-md-2">
             <img v-scroll-reveal="{ delay: 250, origin:'right', duration: 500, easing:'ease-out'}" :src="activeImage" @mouseover="activeImage = otherImage" @mouseout="activeImage = myImage" class="preview--img img-fluid popup-link-2">
        </div>
    </div>
</div>

</template>

<script>
    import './../../../assets/project-two.jpg'
    import './../../../assets/project-two-hover.jpg'
    export default {
        name: 'ProjectTwo',
        data () {
            return {
                activeImage: './dist/project-two.jpg',
                myImage: './dist/project-two.jpg',
                otherImage: './dist/project-two-hover.jpg'
            }
        },
        mounted: function(){
            $('.popup-link-2').magnificPopup({
                items: {
                src: './dist/project-two-hover.jpg'
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