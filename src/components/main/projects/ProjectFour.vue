<template>
    <div class="container" id="project-four">
        <div class="row">
            <div
                class="col-12 col-sm-12 col-md-12 col-lg-4 order-2 order-sm-2 order-md-2 order-lg-1 text-container"
            >
                <h2>Princeton Nassau Pediatrics</h2>
                <h5>Role: Designer</h5>
                <p>Princeton Nassau Pediatrics requested an update to their site design. The primary needs were a way to quickly funnel visitors to the appropriate sections of the site and a design that "was more fun and attactive than the pediatrics office down the road." This design received an "Outstanding Website" award in the 2015 Web Marketing Associations Web Award competition.</p>
                <a href="https://princetonnassaupediatrics.com/" target="_blank">visit site <span>&rarr;</span></a>
            </div>
            <div
                class="col-12 col-sm-12 col-md-12 col-lg-8 order-1 order-sm-1 order-md-1 order-lg-2"
            >
                <img
                    v-scroll-reveal="{ delay: 250, origin:'right', duration: 500, easing:'ease-out'}"
                    :src="activeImage"
                    loading="lazy"
                    decoding="async"
                    class="preview--img img-fluid popup-link-4"
                />
            </div>
        </div>
    </div>
</template>

<script>
import projectFourImg from './../../../assets/project-four.webp'
export default {
    name: 'ProjectFour',
    data() {
        return {
            activeImage: projectFourImg,
            myImage: projectFourImg,
        }
    },
    mounted: function () {
        $('.popup-link-4').magnificPopup({
            items: {
                src: projectFourImg,
            },
            type: 'image',
            closeOnContentClick: true,
        })
    },
}
</script>
<style scoped lang="scss">
.container {
    margin-top: 160px;
    font-family: 'AvenirLTStdBook';
    h2 {
        font-family: 'proxima_novablack';
        color: #212529;
        font-size: 25px;
        margin-bottom: 0;
        margin-top: 40px;
        line-height: 1em;
    }
    h5 {
        font-family: 'AvenirLTStdLight';
        color: #212529;
        font-size: 12px;
        margin-top: 5px;
    }
    p {
        font-size: 14px;
    }
    a {
        color: #fb2662;
        margin-top: 10px;
        display: inline-block;
        font-size: 14px;
        border-top: 3px solid #fb2662;
        border-left: 3px solid #fb2662;
        padding: 5px 12px;
        text-decoration: none;
        &:hover {
            padding-left: 20px;
        }
    }
    .text-container {
        padding-right: 70px;
    }
    img {
        cursor: pointer;
    }
}
@media (max-width: 991px) {
    .container {
        margin-top: 100px;
        .text-container {
            padding-left: 15px;
            padding-right: 15px;
        }
    }
}
@media (max-width: 767px) {
    .container {
        .text-container {
            padding-left: 15px;
        }
        h2 {
            margin-top: 30px;
        }
    }
}
</style>
