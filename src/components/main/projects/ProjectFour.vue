
<template>
<div class="container">
    <div class="row">
        <div class="col-12 col-sm-12 col-md-12 col-lg-4 order-2 order-sm-2 order-md-2 order-lg-1 text-container">
            <h2>The Silver Plume</h2>
            <h5>Role: Designer & Devloper</h5>
            <p>The Silver Plume is a text based choose your adventure game with a simple battle engine, mapping, journaling and inventory. At this time, the game is in very early alpha. The core game engine is complete, but the story is still under development. The game is being built on the Vue.js framework to take advantage of two primary features. Global state management for game saves, and the SPA architecture for a seamless experience.</p>
            <a href="https://codelocomotive.com/game/" target="_blank">view game (alpha) <span>&rarr;</span></a>
            <hr />
            <div class="technology">
            <img src="./../../../assets/logos/vuejs.svg" v-b-tooltip.hover title="VueJS"/>
            <img src="./../../../assets/logos/bootstrap.svg" v-b-tooltip.hover title="Bootstrap"/>
            <img style="width:35px;" src="./../../../assets/logos/sass.svg" v-b-tooltip.hover title="SASS"/>
            <img src="./../../../assets/logos/webpack.svg" v-b-tooltip.hover title="Webpack"/>
            </div>
        </div>
        <div class="col-12 col-sm-12 col-md-12 col-lg-8 order-1 order-sm-1 order-md-1 order-lg-2">
             <img v-scroll-reveal="{ delay: 250, origin:'right', duration: 500, easing:'ease-out'}" :src="activeImage" @mouseover="activeImage = otherImage" @mouseout="activeImage = myImage" class="preview--img img-fluid popup-link-4">
        </div>
    </div>
</div>

</template>

<script>
    import './../../../assets/project-four.jpg'
    import './../../../assets/project-four-hover.jpg'
    export default {
        name: 'ProjectFour',
        data () {
            return {
                activeImage: './dist/project-four.jpg',
                myImage: './dist/project-four.jpg',
                otherImage: './dist/project-four-hover.jpg'
            }
        },
        mounted: function(){
            $('.popup-link-4').magnificPopup({
                items: {
                src: './dist/project-four-hover.jpg'
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
            margin-top:100px;
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
                margin-top:30px;
            }
        }
    }
</style>