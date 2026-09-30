<template>
    <div class="container" id="project-one-details">
        <button
            type="button"
            class="close-control"
            aria-label="Close project details"
            @click="$router.push({ path: '/', hash: '#project-one' })"
        >
            <span class="mfp-close" aria-hidden="true">×</span>
        </button>
        <div class="row first">
            <div class="col-12 col-sm-12 col-md-12 col-lg-8">
                <detail-image
                    :src="imageOne"
                    eager
                    alt="The Long Way Out Adventure Company desktop and mobile landing design"
                    img-class="preview--img"
                />
            </div>
            <div class="col-12 col-sm-12 col-md-12 col-lg-4 text-container">
                <h2>The Long Way Out</h2>
                <h5>Role: Designer</h5>
                <p>
                    The Long Way Out Adventure Company is a conceptual marketing
                    and booking experience for travelers who want curated
                    outdoor trips: alpine rides, waterfall hikes, coastal
                    trails, and overnight camps — without digging through a
                    cluttered catalog.
                </p>
                <p>
                    The design leads with a cinematic hero, trust stats, and a
                    compact “Find Adventure” search widget, then moves into
                    package cards, a four-step booking story, testimonials, and
                    a mailing-list close. Orange primary actions and high-impact
                    photography keep the brand energetic and easy to scan on
                    both desktop and mobile.
                </p>
                <p>
                    This comps set focuses on visual direction and conversion
                    flow ahead of the build. Implementation is still ahead; the
                    portfolio captures the design system and key screens as
                    shipped in Figma.
                </p>
                <router-link
                    :to="{ path: '/', hash: '#project-one' }"
                    class="internal"
                    >back to portfolio &rarr;</router-link
                >
            </div>
        </div>
    </div>
</template>

<script>
import imageOne from './../assets/p1/p1-1.webp'
import DetailImage from './../components/main/DetailImage.vue'

export default {
    name: 'ProjectOneDetails',
    components: { DetailImage },
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
        font-size: 1.5625rem;
        margin-top: 0px;
        line-height: 1em;
    }
    h5 {
        font-family: 'AvenirLTStdLight';
        color: var(--color-ink);
        font-size: 0.75rem;
        margin-top: 5px;
    }
    p {
        font-size: 0.875rem;
    }
    a.internal {
        color: var(--color-accent);
        font-size: 0.875rem;
        border-top: 3px solid var(--color-accent);
        border-left: 3px solid var(--color-accent);
        padding: 5px 12px;
        text-decoration: none;
        margin-top: 15px;
        display: inline-block;
        &:hover {
            padding-left: 20px;
        }
    }
    .row {
        margin-bottom: 100px;
    }
    .text-container {
        padding-left: 70px;
    }
}
@media (max-width: 991px) {
    .container {
        .text-container {
            padding-left: 15px;
        }
    }
}
</style>
