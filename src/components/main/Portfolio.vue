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
        font-size: var(--font-page-title);
        background-image: url(./../../assets/backmask.webp);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        background-size: 500px 900px;
        background-repeat: no-repeat;
        background-position: 0 0;
    }
}

@media (max-width: 768px) {
    .wrap.dialog {
        background-attachment: initial;
        height: 280px;

        h2.animated-alt {
            color: transparent;
            font-size: var(--text-portfolio-fluid);
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
        font-size: var(--text-portfolio-fluid-sm);
    }
}
.col-12 {
    height: 1200px;
}
</style>
