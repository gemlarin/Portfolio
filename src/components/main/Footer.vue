 <template>
<footer>
  <div class="container">
    <div class="row text-center">
      <div class="footer--logo-container text-center">
          <a href="#main">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
              viewBox="0 0 49.612 50" style="enable-background:new 0 0 49.612 50;" xml:space="preserve">
           <path class="zst" d="M49.461,16.105c0-8.985-7.038-16.023-15.874-16.023H16.288c-0.95,0-1.72,0.77-1.72,1.72v12.881H1.8
             c-0.95,0-1.72,0.77-1.72,1.72v17.448c0,8.985,7.038,16.023,15.874,16.023h17.299c0.95,0,1.72-0.77,1.72-1.72V35.273h12.769
             c0.95,0,1.72-0.77,1.72-1.72V16.105z M44.369,30.238l-14.233,0.011H29.88v0L19.66,30.257v-5.498h-5.092v8.681
             c0,1.013,0.821,1.834,1.834,1.834H29.88v9.659c0,0-3.594,0-13.852,0c-7.937,0-10.857-7.095-10.857-10.614c0-3.519,0-14.601,0-14.601
             l9.397-0.007v0.003h5.092v-0.007l10.221-0.008v5.504h5.092v-8.97c0-0.856-0.694-1.551-1.551-1.551H19.66V5.023c0,0,3.594,0,13.852,0
             c7.937,0,10.857,7.095,10.857,10.614C44.369,19.156,44.369,30.238,44.369,30.238z"/>
           </svg>
          </a>
      </div>
      <div class="col-md-12 text-center">
             <p>&copy; 2018 CodeLocomotive.</p>
             <p>Codelocomotive is Danny Gibas, designer, developer.</p>
        </div>
    </div>
  </div>
</footer>
</template>

<script>
    export default {
        name: '404',
        data () {
            return {

            }
        },
        created(){
           
        }
    }
</script>
<style scoped lang="scss">
  footer {
    margin-top:400px;
    background-color: #111;
    position: relative;
    padding-top: 60px;
    padding-bottom: 60px;
    .zst{
        fill:#5c5c5c;
    }
    svg {
        height: 50px;
        width: auto;
        margin-top: 30px;
        margin-bottom: 20px;
    }
    ul {
        margin-top: 60px;
        padding-left: 0;
        text-decoration: none;
        margin-bottom: 5px;
        li {
            display: inline;
            margin-right: 15px;
        }
        .fa {
            color: #666666;
            font-size: 32px;
        }
    }
    .footer--logo-container {
        display: inline;
        margin: 0 auto;
    }
    #to-top {
        text-align: right;
        position: relative;
        img {
            transform: rotate(-90deg);
            position: absolute;
            bottom: 30px;
            cursor: pointer;
            opacity:.4;
        }
        img:hover {
            opacity:.5;
        }
    }
    h1 {
        font-family: "AvenirLTStdMedium";
        font-size: 30px;
    }
    p {
        font-size: 14px;
        color: #757575;
        margin-bottom: 5px;
    }
}

</style>
