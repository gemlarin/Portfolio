<template>
    <div class="container" id="project-six">
        <div class="row">
            <div class="col-12 col-sm-12 col-md-12 col-lg-8 image-container">
                <div
                    v-scroll-reveal="{ delay: 250, origin:'left', duration: 500, easing:'ease-out'}"
                >
                    <detail-image
                        :src="activeImage"
                        alt="Refuah Health Center website preview"
                        enlarge-label="Enlarge Refuah Health Center preview"
                        button-class="preview--zoom popup-link-6"
                        img-class="preview--img"
                    />
                </div>
            </div>
            <div class="col-12 col-sm-12 col-md-12 col-lg-4 text-container">
                <h2>Refuah Health Center</h2>
                <h5>Role: Designer</h5>
                <p>Refuah Health Center was a freelance design project that was sub-contracted through a design agency. Deliverables were to include mocks and all necessary assets and had a time line of 3 weeks.</p>
                <p class="outcome">
                    Outcomes: Full set of mocks and assets, turned around in
                    three weeks.
                </p>
                <button
                    type="button"
                    class="cta-link"
                    @click="$router.push('/project-six-details')"
                >
                    view project<span aria-hidden="true">&rarr;</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import projectSixImg from './../../../assets/project-six.webp'
import DetailImage from './../DetailImage.vue'
export default {
    name: 'ProjectSix',
    components: { DetailImage },
    data() {
        return {
            activeImage: projectSixImg,
            myImage: projectSixImg,
        }
    },
    mounted: function () {
        $('.popup-link-6').magnificPopup({
            items: {
                src: projectSixImg,
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
        color: var(--color-accent);
        font-size: 14px;
        margin-top: 10px;
        display: inline-block;
        border-top: 3px solid var(--color-accent);
        border-left: 3px solid var(--color-accent);
        padding: 5px 12px;
        text-decoration: none;
        &:hover {
            padding-left: 20px;
        }
    }
    sup {
        position: relative;
        top: -4px;
    }
    .image-container {
        text-align: right;
    }
    .text-container {
        padding-left: 70px;
    }
    img {
        cursor: pointer;
        display: inline-block;
        margin-left: auto;
    }
    .technology img {
        width: 25px;
        display: inline-block;
        margin-right: 10px;
    }
}
@media (max-width: 991px) {
    .container {
        .image-container {
            text-align: center;
        }
        .text-container {
            padding-left: 15px;
        }
    }
}

@media (max-width: 767px) {
    .container {
        .text-container {
            padding-left: 15px;
        }
        h2 {
            margin-top: 20px;
        }
    }
}
</style>
