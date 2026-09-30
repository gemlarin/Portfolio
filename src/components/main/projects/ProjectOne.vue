<template>
    <div class="container" id="project-one">
        <div class="row">
            <div
                class="col-12 col-sm-12 col-md-12 col-lg-4 order-2 order-sm-2 order-md-2 order-lg-1 text-container"
            >
                <h2>The Long Way Out</h2>
                <h5>Role: Designer</h5>
                <p>
                    Marketing site design for The Long Way Out Adventure
                    Company — a booking-forward brand for hiking, coastal
                    trails, and overnight trips. Bold typography, orange CTAs,
                    and destination photography push discovery from hero search
                    through featured packages and social proof.
                </p>
                <p class="outcome">
                    Outcomes: Gets people from “where should we go?” to booking
                    a trip without getting lost in the site.
                </p>

                <button
                    type="button"
                    class="cta-link"
                    @click="$router.push('/project-one-details')"
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
                        alt="The Long Way Out Adventure Company website design preview"
                        enlarge-label="Enlarge The Long Way Out preview"
                        button-class="preview--zoom popup-link"
                        img-class="preview--img"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import projectOneImg from './../../../assets/project-one.webp'
import DetailImage from './../DetailImage.vue'
export default {
    name: 'ProjectOne',
    components: { DetailImage },
    data() {
        return {
            activeImage: projectOneImg,
            myImage: projectOneImg,
        }
    },
    mounted: function () {
        $('.popup-link').magnificPopup({
            items: {
                src: projectOneImg,
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
        font-size: 1.5625rem;
        margin-top: 40px;
        line-height: 1em;
    }
    h5 {
        font-family: 'AvenirLTStdLight';
        color: #212529;
        font-size: 0.75rem;
        margin-top: 5px;
    }
    .outcome {
        font-family: 'AvenirLTStdLight';
        font-size: 0.875rem;
        color: #212529;
        margin: 6px 0 18px;
        line-height: 1.4;
    }
    p {
        font-size: 0.875rem;
    }
    hr {
        border: 0;
        border-bottom: 1px dashed var(--color-border);
        margin: 16px 0;
    }
    a,
    button.cta-link {
        color: var(--color-accent);
        font-size: 0.875rem;
        margin-top: 10px;
        margin-right: 12px;
        display: inline-block;
        border-top: 3px solid var(--color-accent);
        border-left: 3px solid var(--color-accent);
        padding: 5px 12px;
        text-decoration: none;
        background: none;
        font: inherit;
        cursor: pointer;
        text-align: left;
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
            margin-top: 20px;
        }
    }
}
</style>
