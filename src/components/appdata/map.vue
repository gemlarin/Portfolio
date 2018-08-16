

<template>
    <div class="container">
        <div class="row">
            <div class="col-12 no-padding-left">
                <div class="map-wrap">
                   <div id="map"></div>
                   <div class="button --temp" @click="nextImage">NEXT</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { searchBus } from './../../main.js';
    import { itemBus } from './../../main.js';
    import { slayBus } from './../../main.js';
    import './../../assets/overlandmap_p10.png';
    import './../../assets/overlandmap_p11.png';
    import './../../assets/overlandmap_p12.png';
    import './../../assets/overlandmap_catscratchin.png'

    export default {
        name: 'mapview',
    
       
        data () {
            return {
               isHiddenDoorFound:true,
               counter:1,
               mapToUse:'',
               registeredMaps:[
                   
               ]
            }
        },
        computed:{
      
        },
        mounted(){
            this.mapToUse = this.$store.state.currentOverlandMap;
            this.showMap(this.mapToUse);
        },
    
        methods:{

            showMap(mapid){
                var concatpath ="url('/dist/" + mapid + "')";
                var element = document.getElementById('map');
                element.style.backgroundImage = concatpath;
            },

            nextImage(){
           
                //counter
                this.counter = this.counter + 1;
                var concatpath = "url('dist/overlandmap_p10.png')"
                var concatpath ="url('/dist/overlandmap_p1" + this.counter + ".png')";
                var element = document.getElementById('map');
                element.style.backgroundImage = concatpath;
                console.log(concatpath)
            },
            //hide hidden doors
            hideHiddenDoor(div) {
                var element = document.getElementById(div);
                // Instead of .addClass("newclass")
                element.setAttribute("class", "doorHidden");
            },
            //show hidden doors
            showHiddenDoor(div) {
                var element = document.getElementById(div);
                // Instead of .addClass("newclass")
                element.removeAttribute("class", "doorHidden");
            },
            closeDoor(div) {
                 var door = document.getElementById("door_horizontal_p11"); 
                door.style.fill="black";
            },
             openDoor(div) {
                var door = document.getElementById("door_horizontal_p11"); 
                door.style.fill="white";
            }

            
        }
    }

</script>
<style scoped>
    .st0{fill:#FFFFFF;stroke:#000000;stroke-miterlimit:10};
    #scaling-svg-container {
    position: relative; 
    height: 0; 
    width: 100%; 
    padding: 0;
    padding-bottom: 100%; 
    /* override this inline for aspect ratio other than square */
    }
    #scaling-svg {
        position: absolute;
        max-height:660px ;
        width:auto;
        left: 0; 
        top: 0;
        }

    .no-padding-left{
        padding-left:0;
    }
   .active-room{
       fill:rgb(204, 241, 135);
       stroke:black;
   }
 
    #p_11{
        fill:white;
    }

    #p_11:hover{
        fill:rgb(230, 200, 102);
        stroke:black;
    }

    .map-wrap{
        display: flex; 
        min-height:636px;
        margin-top:10px;
    }

    #map{
        background: url('./../../assets/overlandmap_p11.png') no-repeat center center; 
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        flex: 1;
    }


    .button.--temp{
        position:absolute;
        top:20px;
        left:30px;
        color:white;
        background-color:#111;
        cursor: pointer;
    }

    /*doors*/

    #secretdoor_p12{
        display:initial;
    }

    .doorHidden{
        display:none !important;
    }
    .doorShown{
        display:initial !important;
    }
    .doorClosed{
        fill:black;
    }

    .doorOpen{
         fill:red;
        stroke:red;
    }

</style>