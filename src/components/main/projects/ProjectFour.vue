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

                <button
                    type="button"
                    class="cta-link"
                    @click="$router.push('/project-four-details')"
                >
                    view project<span aria-hidden="true">&rarr;</span>
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
import DetailImage from './../DetailImage.vue'
export default {
    name: 'ProjectFour',
    components: { DetailImage },
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
        font-size: 14px;
        margin-top: 10px;
        display: inline-block;
        border-top: 3px solid #fb2662;
        border-left: 3px solid #fb2662;
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
            margin-top: 30px;
        }
    }
}
</style>
