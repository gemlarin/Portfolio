<template>
    <div class="container" id="project-four">
        <div class="row">
            <div class="col-12 col-sm-12 col-md-12 col-lg-8">
                <div
                    v-scroll-reveal="{ delay: 250, origin:'left', duration: 500, easing:'ease-out'}"
                >
                    <detail-image
                        :src="activeImage"
                        alt="Project Canary workorder app preview"
                        enlarge-label="Enlarge Project Canary preview"
                        button-class="preview--zoom popup-link-4"
                        img-class="preview--img"
                    />
                </div>
            </div>
            <div class="col-12 col-sm-12 col-md-12 col-lg-4 text-container">
                <h2>Project Canary</h2>
                <h5>Role: UI and Development</h5>
                <p>
                    Canary is an experimental and internal facing workorder and build system
                    for initial deployment of 5G Neutral Host Gateways in the field. The
                    wireless research team required a cloud application that mocked out a
                    workorder creation and execution tool for the purposes of demonstration
                    and systems integration testing. This project required deep coordination
                    with both hardware and software engineering staff to establish the
                    requirements and execution flows.
                </p>
                <p class="outcome">
                    Outcomes: Helped the wireless team demo field workorders for
                    5G gateway installs without real hardware in the way.
                </p>

                <button
                    type="button"
                    class="cta-link"
                    @click="$router.push('/project-four-details')"
                >
                    view project<arrow-right />
                </button>
                <hr />
                <div class="technology">
                    <span class="tech-tip" data-tip="VueJS">
                        <img
                            src="./../../../assets/logos/vuejs.svg"
                            alt="Vue.js"
                        />
                    </span>
                    <span class="tech-tip" data-tip="Bootstrap">
                        <img
                            src="./../../../assets/logos/bootstrap.svg"
                            alt="Bootstrap"
                        />
                    </span>
                    <span class="tech-tip" data-tip="SASS">
                        <img
                            style="width:35px;"
                            src="./../../../assets/logos/sass.svg"
                            alt="Sass"
                        />
                    </span>
                    <span class="tech-tip" data-tip="Webpack">
                        <img
                            src="./../../../assets/logos/webpack.svg"
                            alt="Webpack"
                        />
                    </span>
                    <span class="tech-tip" data-tip="Figma">
                        <img
                            class="logo-figma"
                            src="./../../../assets/logos/figma.svg"
                            alt="Figma"
                        />
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import projectThreeImg from './../../../assets/project-four.webp'
import ArrowRight from './../../../components/ArrowRight.vue'
import DetailImage from './../DetailImage.vue'
export default {
    name: 'ProjectFour',
    components: { DetailImage, ArrowRight },
    data() {
        return {
            activeImage: projectThreeImg,
            myImage: projectThreeImg,
        }
    },
    mounted: function () {
        $('.popup-link-4').magnificPopup({
            items: {
                src: projectThreeImg,
            },
            type: 'image',
            closeOnContentClick: true,
        })
    },
}
</script>
<style scoped lang="scss">
.container {
    margin-top: 130px;
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
    a {
        color: var(--color-accent);
        font-size: var(--font-button);
        margin-top: 15px;
        display: inline-flex;
        align-items: center;
        border-top: 3px solid var(--color-accent);
        border-left: 3px solid var(--color-accent);
        padding: 5px 12px;
        text-decoration: none;
        &:hover {
            padding-left: 20px;
        }
    }
    .text-container {
        padding-left: 70px;
    }
    img {
        cursor: pointer;
    }
    .technology img {
        width: 40px;
        display: inline-block;
        padding-right: 10px;
        cursor: default;
    }
    .technology img.logo-figma {
        width: auto;
        height: 21px;
        padding-right: 10px;
    }
}
@media (max-width: 991px) {
    .container {
        margin-top: 100px;
        .text-container {
            padding-left: 15px;
        }
    }
}

@media (max-width: 767px) {
    .container {
        margin-top: 100px;
        .text-container {
            padding-left: 15px;
        }
        h2 {
            margin-top: 10px;
        }
    }
}
</style>
