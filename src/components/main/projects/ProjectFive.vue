<template>
    <div class="container" id="project-five">
        <div class="row">
            <div
                class="col-12 col-sm-12 col-md-12 col-lg-4 order-2 order-sm-2 order-md-2 order-lg-1 text-container"
            >
                <h2>Princeton Nassau Pediatrics</h2>
                <h5>Role: Designer</h5>
                <p>Princeton Nassau Pediatrics requested an update to their site design. The primary needs were a way to quickly funnel visitors to the appropriate sections of the site and a design that "was more fun and attactive than the pediatrics office down the road." This design received an "Outstanding Website" award in the 2015 Web Marketing Associations Web Award competition.</p>
                <p class="outcome">
                    Outcomes: Funnel parents to the right info fast — and it won
                    a 2015 WebAward.
                </p>
                <button
                    type="button"
                    class="cta-link"
                    @click="$router.push('/project-five-details')"
                >
                    view project<span aria-hidden="true">&rarr;</span>
                </button>
                <a
                    href="https://princetonnassaupediatrics.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    >visit site <span aria-hidden="true">&rarr;</span></a
                >
                <hr />
                <div class="technology">
                    <span class="tech-tip" data-tip="Adobe Photoshop">
                        <img
                            src="./../../../assets/logos/photoshop.svg"
                            alt="Adobe Photoshop"
                        />
                    </span>
                    <span class="tech-tip" data-tip="WordPress">
                        <img
                            src="./../../../assets/logos/wordpress.svg"
                            alt="WordPress"
                        />
                    </span>
                </div>
            </div>
            <div
                class="col-12 col-sm-12 col-md-12 col-lg-8 order-1 order-sm-1 order-md-1 order-lg-2"
            >
                <div
                    v-scroll-reveal="{ delay: 250, origin:'right', duration: 500, easing:'ease-out'}"
                >
                    <detail-image
                        :src="activeImage"
                        alt="Princeton Nassau Pediatrics website preview"
                        enlarge-label="Enlarge Princeton Nassau Pediatrics preview"
                        button-class="preview--zoom popup-link-5"
                        img-class="preview--img"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import projectFourImg from './../../../assets/project-five.webp'
import DetailImage from './../DetailImage.vue'
export default {
    name: 'ProjectFive',
    components: { DetailImage },
    data() {
        return {
            activeImage: projectFourImg,
            myImage: projectFourImg,
        }
    },
    mounted: function () {
        $('.popup-link-5').magnificPopup({
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
    .outcome {
        font-family: 'AvenirLTStdLight';
        font-size: 14px;
        color: #212529;
        margin: 6px 0 18px;
        line-height: 1.4;
    }
    p {
        font-size: 14px;
    }
    hr {
        border: 0;
        border-bottom: 1px dashed #dbdbdb;
        margin: 16px 0;
    }
    a,
    button.cta-link {
        color: #fb2662;
        margin-top: 10px;
        margin-right: 12px;
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
    .technology img {
        width: 25px;
        display: inline-block;
        margin-right: 10px;
        cursor: default;
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
