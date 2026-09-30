<template>
    <div class="container" id="project-two">
        <div class="row">
            <div class="col-12 col-sm-12 col-md-12 col-lg-8">
                <div
                    v-scroll-reveal="{
                        delay: 250,
                        origin: 'left',
                        duration: 500,
                        easing: 'ease-out',
                    }"
                >
                    <detail-image
                        :src="activeImage"
                        alt="Cairn National Parks travel log app preview"
                        enlarge-label="Enlarge Cairn preview"
                        button-class="preview--zoom popup-link-2"
                        img-class="preview--img"
                    />
                </div>
            </div>
            <div class="col-12 col-sm-12 col-md-12 col-lg-4 text-container">
                <h2>Cairn</h2>
                <h5>Role: Designer &amp; Developer</h5>
                <p>
                    Cairn is a personal National Parks travel log. Search the
                    NPS catalog, mark places you have visited, and save notes
                    for each site. Built with Vue 3 against the National Park
                    Service API, with Supabase email auth and a per-user visits
                    database so your log follows you across sessions.
                </p>
                <p class="outcome">
                    Outcomes: Lets you search parks, mark where you’ve been, and
                    keep notes that stick across visits.
                </p>

                <button
                    type="button"
                    class="cta-link"
                    @click="$router.push('/project-two-details')"
                >
                    view project<arrow-right />
                </button>
                <a
                    href="https://cairn-gray.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    >live app<arrow-right /></a
                >
                <hr />
                <div class="technology">
                    <span class="tech-tip" data-tip="VueJS">
                        <img
                            src="./../../../assets/logos/vuejs.svg"
                            alt="Vue.js"
                        />
                    </span>
                    <span class="tech-tip" data-tip="ES6 / TypeScript">
                        <img
                            src="./../../../assets/logos/es6.svg"
                            alt="ES6 / TypeScript"
                        />
                    </span>
                    <span class="tech-tip" data-tip="Vercel">
                        <img
                            src="./../../../assets/logos/vercel.svg"
                            alt="Vercel"
                        />
                    </span>
                    <span class="tech-tip" data-tip="Supabase">
                        <img
                            src="./../../../assets/logos/supabase.svg"
                            alt="Supabase"
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
import projectOneImg from './../../../assets/project-two.webp'
import ArrowRight from './../../../components/ArrowRight.vue'
import DetailImage from './../DetailImage.vue'
export default {
    name: 'ProjectTwo',
    components: { DetailImage, ArrowRight },
    data() {
        return {
            activeImage: projectOneImg,
            myImage: projectOneImg,
        }
    },
    mounted: function () {
        $('.popup-link-2').magnificPopup({
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
        margin-right: 12px;
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
    sup {
        position: relative;
        top: -4px;
    }
    .text-container {
        padding-left: 70px;
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
    .technology img.logo-figma {
        width: auto;
        height: 21px;
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
        .text-container {
            padding-left: 15px;
        }
        h2 {
            margin-top: 10px;
        }
    }
}
</style>
