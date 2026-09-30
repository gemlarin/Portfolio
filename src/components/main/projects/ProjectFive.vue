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
                    view project<arrow-right />
                </button>
                <a
                    href="https://princetonnassaupediatrics.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    >visit site <arrow-right /></a
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
import ArrowRight from './../../../components/ArrowRight.vue'
import DetailImage from './../DetailImage.vue'
export default {
    name: 'ProjectFive',
    components: { DetailImage, ArrowRight },
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
        color: var(--color-ink);
        font-size: var(--font-h2);
        line-height: 1em;
    }
    h5 {
        font-family: 'AvenirLTStdLight';
        color: var(--color-ink);
        font-size: var(--font-h5);
        margin-top: 5px;
        margin-bottom: 0.75rem;
    }
    .outcome {
        font-family: 'AvenirLTStdLight';
        font-size: var(--font-body);
        color: var(--color-ink);
        margin: 6px 0 18px;
        line-height: 1.4;
    }
    p {
        font-size: var(--font-body);
    }
    hr {
        border: 0;
        border-bottom: 1px dashed var(--color-border);
        margin: 16px 0;
    }
    a,
    button.cta-link {
        color: var(--color-accent);
        margin-top: 15px;
        margin-right: 12px;
        display: inline-flex;
        align-items: center;
        font-size: var(--font-button);
        border-top: 3px solid var(--color-accent);
        border-left: 3px solid var(--color-accent);
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
            margin-top: 10px;
        }
    }
}
</style>
