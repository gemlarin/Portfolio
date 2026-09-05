<template>
    <div class="container" id="project-five-details">
        <router-link
            class="nav-link"
            :to="{ path: '/', hash: '#project-five' }"
        >
            <button title="Close (Esc)" type="button" class="mfp-close">
                ×
            </button>
        </router-link>
        <div class="row first">
            <div class="col-12 col-sm-12 col-md-12 col-lg-8">
                <detail-image
                    :src="imageOne"
                    eager
                    img-class="preview--img popup-link"
                />
            </div>
            <div class="col-12 col-sm-12 col-md-12 col-lg-4 text-container">
                <h2>Refuah Health Center</h2>
                <h5>Role: Designer</h5>
                <p>
                    Refuah Health Center was a freelance design project that was
                    sub-contracted through a design agency. Deliverables were to
                    include mocks and all necessary assets and had a timeline of
                    3 weeks during which there were to be several review and
                    feedback sessions.
                </p>
                <p>
                    The clients previous site was not adequately serving their
                    needs and lacked several important features including, a
                    physician locator, patient portal, and a news feed. These
                    features needed to be integrated into the new design.
                </p>
                <p>
                    Keywords provided by the client to guide the design
                    aesthetic included, "modern", "welcoming", "professional",
                    and "unique".
                </p>
                <p>
                    This image reflects the final home page comps presented to
                    and approved by the client.
                </p>
                <router-link
                    :to="{ path: '/', hash: '#project-five' }"
                    class="internal"
                    >back to portfolio &rarr;</router-link
                >
            </div>
        </div>
    </div>
</template>

<script>
import imageOne from './../assets/p5/p5-1.jpg'
import projectFiveImg from './../assets/project-five.webp'
import DetailImage from './../components/main/DetailImage.vue'

export default {
    name: 'ProjectFiveDetails',
    components: { DetailImage },
    data() {
        return {
            imageOne,
        }
    },
    mounted: function () {
        $('.popup-link').magnificPopup({
            items: {
                src: projectFiveImg,
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
        margin-top: 0px;
        line-height: 1em;
    }
    h4 {
        font-family: 'proxima_novablack';
        font-size: 20px;
        color: #616161;
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
    a.internal {
        color: #fb2662;
        font-size: 14px;
        border-top: 3px solid #fb2662;
        border-left: 3px solid #fb2662;
        padding: 5px 12px;
        text-decoration: none;
        margin-top: 15px;
        display: inline-block;
        &:hover {
            padding-left: 20px;
        }
    }
    .nav-link {
        position: fixed;
        right: 0;
        top: 0;
        z-index: 1100;
    }
    .mfp-close {
        font-size: 50px;
        right: 10px;
        top: 10px;
        position: relative;
        z-index: 1101;
    }
    .row {
        margin-bottom: 100px;
    }
    .row:not(.first) {
        padding-top: 30px;
    }
    sup {
        position: relative;
        top: -4px;
    }
    .text-container {
        padding-left: 70px;
    }
    .technology img {
        width: 25px;
        display: inline-block;
        margin-right: 10px;
    }
    ul {
        li {
            font-size: 14px;
        }
    }
}
@media (max-width: 991px) {
    .container {
        .text-container {
            padding-left: 15px;
        }
    }
}

@media (max-width: 767px) {
    .container {
        .row {
            margin-bottom: 50px;
        }
        .text-container {
            padding-left: 15px;
        }
        h2 {
            margin-top: 20px;
        }
        .mfp-close {
            right: -10px;
            top: 0;
        }
    }
}
</style>
