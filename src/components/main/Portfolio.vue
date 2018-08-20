
<template>

    <div class="wrap dialog">

                    <h2>Selected Works</h2>
                    
 
<!--<p v-scroll-reveal.reset="{ delay: 250, origin:'bottom', }">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>-->            
       
    </div>

</template>

<script>
import './../../assets/sect-bg1.jpg'

    export default {
        name: 'Portfolio',
        data () {
            return {

            }
        },
        created(){
           
        }
    }
</script>
<style scoped lang="scss">

  .wrap.dialog{
        height:500px;
        width:100vw;
        background: url('./../../assets/sect-bg1.jpg') no-repeat center center fixed;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover; 
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
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
        h2{
            font-family: 'proxima_novablack';
            color:#fff;
            -webkit-order: 0;
            -ms-flex-order: 0;
            order: 0;
            -webkit-flex: 0 1 auto;
            -ms-flex: 0 1 auto;
            flex: 0 1 auto;
            -webkit-align-self: auto;
            -ms-flex-item-align: auto;
            align-self: auto;
            z-index:302;
            height:50px;
            font-size:50px;
        }
  }
.col-12{
    height:1200px;
}

</style>