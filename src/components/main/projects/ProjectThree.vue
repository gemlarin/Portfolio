
<template>
<div class="container">
    <div class="row">
        <div class="col-12 col-sm-12 col-md-8">
            <img v-scroll-reveal="{ delay: 250, origin:'left', duration: 500, easing:'ease-out'}" :src="activeImage" @mouseover="activeImage = otherImage" @mouseout="activeImage = myImage" class="preview--img img-fluid">
        </div>
        <div class="col-12 col-sm-12 col-md-4 text-container">
            <h2>CEC Project Locator</h2>
            <h5>landing page</h5>
            <p>Aenean eu congue dolor, in dapibus urna. Cras vitae erat vel lectus maximus consectetur. Nam tincidunt vel urna sit amet aliquam. Aenean sapien elit, facilisis sed nibh id, tempor accumsan diam. Integer a porta sapien. Mauris hendrerit nisl ac dui volutpat, id lobortis eros elementum.</p>
            <a href="#" target="_blank">visit site</a>
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
        components: {
        
        },
        methods:{
           
        },
        created(){
           
        },
        mounted(){
                 
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