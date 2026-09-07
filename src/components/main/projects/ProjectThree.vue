<template>
    <div class="container" id="project-three">
        <div class="row">
            <div class="col-12 col-sm-12 col-md-12 col-lg-8">
                <div
                    v-scroll-reveal="{ delay: 250, origin:'left', duration: 500, easing:'ease-out'}"
                >
                    <button
                        type="button"
                        class="preview--zoom popup-link-3"
                        aria-label="Enlarge Project Canary preview"
                    >
                        <img
                            :src="activeImage"
                            loading="lazy"
                            decoding="async"
                            class="preview--img img-fluid"
                            alt="Project Canary workorder app preview"
                        />
                    </button>
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
                    @click="$router.push('/project-three-details')"
                >
                    view project<span aria-hidden="true">&rarr;</span>
                </button>
                <hr />
                <div class="technology">
                    <img
                        src="./../../../assets/logos/vuejs.svg"
                        v-b-tooltip.hover
                        title="VueJS"
                        alt="Vue.js"
                    />
                    <img
                        src="./../../../assets/logos/bootstrap.svg"
                        v-b-tooltip.hover
                        title="Bootstrap"
                        alt="Bootstrap"
                    />
                    <img
                        style="width:35px;"
                        src="./../../../assets/logos/sass.svg"
                        v-b-tooltip.hover
                        title="SASS"
                        alt="Sass"
                    />
                    <img
                        src="./../../../assets/logos/webpack.svg"
                        v-b-tooltip.hover
                        title="Webpack"
                        alt="Webpack"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import projectThreeImg from './../../../assets/project-three.webp'
export default {
    name: 'ProjectThree',
    data() {
        return {
            activeImage: projectThreeImg,
            myImage: projectThreeImg,
        }
    },
    mounted: function () {
        $('.popup-link-3').magnificPopup({
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
