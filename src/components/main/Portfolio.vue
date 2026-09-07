<template>
    <div class="wrap dialog">
        <h2 class="animated-alt">Selected Works</h2>
    </div>
</template>

<script>
import './../../assets/sect-bg1.webp'
import './../../assets/backmask.webp'

export default {
    name: 'Portfolio',
    data() {
        return {
            animatelock: false,
            lastScrollTop: 0,
            windowheight: 0,
            direction: '',
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll)
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll)
    },
    methods: {
        handleScroll() {
            var st = window.scrollY
            if (st > this.lastScrollTop) {
                this.direction = 'down'
            } else {
                this.direction = 'up'
            }
            this.lastScrollTop = st

            if (
                window.scrollY > $(window).height() * 1.3 &&
                this.direction == 'down'
            ) {
                if (!this.animatelock) {
                    this.windowheight = $(window).height()
                    this.animatelock = true
                    $('h2.animated-alt').addClass('animate')
                }
            }

            if (
                window.scrollY < this.windowheight * 1.3 &&
                this.direction == 'up'
            ) {
                if (this.animatelock) {
                    this.animatelock = false
                    $('h2.animated-alt').removeClass('animate')
                }
            }
        },
    },
}
</script>
<style scoped lang="scss">
.wrap.dialog {
    height: 280px;
    width: 100vw;
    position: relative;
    background: url('./../../assets/sect-bg1.webp') no-repeat center center
        fixed;
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

    h2.animated-alt {
        font-family: 'proxima_novablack';

        -webkit-order: 0;
        -ms-flex-order: 0;
        order: 0;
        -webkit-flex: 0 1 auto;
        -ms-flex: 0 1 auto;
        flex: 0 1 auto;
        -webkit-align-self: auto;
        -ms-flex-item-align: auto;
        align-self: auto;
        z-index: 302;
        height: 50px;
        font-size: 50px;
        background-image: url(./../../assets/backmask.webp);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        background-size: 500px 900px;
        background-repeat: no-repeat;
        background-position: 0 -700px;
        transition: background-position 4s;
        &.animate {
            background-position: 0 0;
        }
    }
}

@media (max-width: 768px) {
    .wrap.dialog {
        background-attachment: initial;
        height: 300px;

        h2.animated-alt {
            color: transparent;
            font-size: clamp(34px, 10.3vw, 51px);
            height: auto;
            line-height: 1.1;
            white-space: nowrap;
            -webkit-background-clip: text;
            background-clip: text;
        }
    }
}

@media (max-width: 499px) {
    .wrap.dialog h2.animated-alt {
        font-size: clamp(29px, 9.1vw, 39px);
    }
}
.col-12 {
    height: 1200px;
}
</style>
