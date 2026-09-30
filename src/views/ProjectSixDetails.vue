<template>
    <div class="container" id="project-six-details">
        <button
            type="button"
            class="close-control"
            aria-label="Close project details"
            @click="$router.push({ path: '/', hash: '#project-six' })"
        >
            <span class="mfp-close" aria-hidden="true">×</span>
        </button>
        <div class="row first">
            <div class="col-12 col-sm-12 col-md-12 col-lg-8">
                <detail-image
                    :src="imageOne"
                    eager
                    alt="Refuah Health Center homepage design"
                    img-class="preview--img"
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
                    :to="{ path: '/', hash: '#project-six' }"
                    class="internal"
                    >back to portfolio <arrow-right /></router-link
                >
            </div>
        </div>
    </div>
</template>

<script>
import imageOne from './../assets/p6/p6-1.jpg'
import ArrowRight from './../components/ArrowRight.vue'
import DetailImage from './../components/main/DetailImage.vue'

export default {
    name: 'ProjectSixDetails',
    components: { DetailImage, ArrowRight },
    data() {
        return {
            imageOne,
        }
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
        margin-top: 0px;
        line-height: 1em;
    }
    h3 {
        font-family: 'proxima_novablack';
        font-size: var(--font-h3);
        color: var(--color-ink);
        margin-bottom: 0.75rem;
    }
    h5 {
        font-family: 'AvenirLTStdLight';
        color: var(--color-ink);
        font-size: var(--font-h5);
        margin-top: 5px;
        margin-bottom: 0.75rem;
    }
    p {
        font-size: var(--font-body);
    }
    a.internal {
        color: var(--color-accent);
        font-size: var(--font-button);
        border-top: 3px solid var(--color-accent);
        border-left: 3px solid var(--color-accent);
        padding: 5px 12px;
        text-decoration: none;
        margin-top: 15px;
        display: inline-flex;
        align-items: center;
        &:hover {
            padding-left: 20px;
        }
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
            font-size: var(--font-body);
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
    }
}
</style>
