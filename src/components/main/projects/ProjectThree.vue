<template>
    <div class="container" id="project-three">
        <div class="row">
            <div
                class="col-12 col-sm-12 col-md-12 col-lg-4 order-2 order-sm-2 order-md-2 order-lg-1 text-container"
            >
                <h2>SpecForge</h2>
                <h5>Role: Designer &amp; Developer (In Progress)</h5>
                <p>
                    SpecForge is an open-spec, spec-driven workspace: you write
                    the fences (interfaces, non-goals, import boundaries, a11y
                    constraints), then AI drafts the interior artifacts. Early
                    UX mocks for the landing experience — design still in
                    progress.
                </p>
                <p class="outcome">
                    Outcomes: You write the fences first; AI fills in the
                    middle. Still early UX.
                </p>

                <button
                    type="button"
                    class="cta-link"
                    @click="$router.push('/project-three-details')"
                >
                    view project<span aria-hidden="true">&rarr;</span>
                </button>
                <hr />
                <div class="technology">
                    <span class="tech-tip" data-tip="Figma">
                        <img
                            class="logo-figma"
                            src="./../../../assets/logos/figma.svg"
                            alt="Figma"
                        />
                    </span>
                </div>
            </div>
            <div
                class="col-12 col-sm-12 col-md-12 col-lg-8 order-1 order-sm-1 order-md-1 order-lg-2"
            >
                <div
                    v-scroll-reveal="{
                        delay: 250,
                        origin: 'right',
                        duration: 500,
                        easing: 'ease-out',
                    }"
                >
                    <detail-image
                        :src="activeImage"
                        alt="SpecForge landing page preview"
                        enlarge-label="Enlarge SpecForge preview"
                        button-class="preview--zoom popup-link-3"
                        img-class="preview--img"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import projectTwoImg from './../../../assets/project-three.webp'
import DetailImage from './../DetailImage.vue'
export default {
    name: 'ProjectThree',
    components: { DetailImage },
    data() {
        return {
            activeImage: projectTwoImg,
        }
    },
    mounted() {
        $('.popup-link-3').magnificPopup({
            items: {
                src: projectTwoImg,
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
    a {
        color: #fb2662;
        font-size: 14px;
        border-top: 3px solid #fb2662;
        border-left: 3px solid #fb2662;
        padding: 5px 12px;
        text-decoration: none;
        display: inline-block;
        margin-top: 10px;
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
        width: 22px;
        display: inline-block;
        margin-right: 10px;
        cursor: default;
    }
    .technology img.logo-figma {
        width: auto;
        height: 21px;
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
