<template>
    <div class="container" id="project-five-details">
        <button
            type="button"
            class="close-control"
            aria-label="Close project details"
            @click="$router.push({ path: '/', hash: '#project-five' })"
        >
            <span class="mfp-close" aria-hidden="true">×</span>
        </button>
        <div class="row first">
            <div class="col-12 col-sm-12 col-md-12 col-lg-8">
                <detail-image
                    :src="imageOne"
                    eager
                    alt="Princeton Nassau Pediatrics homepage with hero and service shortcuts"
                    img-class="preview--img"
                />
            </div>
            <div class="col-12 col-sm-12 col-md-12 col-lg-4 text-container">
                <h2>Princeton Nassau Pediatrics</h2>
                <h5>Role: Designer</h5>
                <p>
                    Princeton Nassau Pediatrics needed a warmer, clearer web
                    presence that funnels parents to the right task fast —
                    portal access, bill pay, locations, and clinical resources —
                    while feeling more approachable than competing practices.
                </p>
                <p>
                    The homepage pairs playful photography with color-blocked
                    shortcuts for Online Services, Pediatric Advisor, and Find a
                    Provider, plus a news strip for practice updates. The design
                    earned an Outstanding Website award in the 2015 Web Marketing
                    Association WebAwards.
                </p>
                <button
                    type="button"
                    class="internal"
                    @click="$router.push({ hash: '#part2' })"
                >
                    more &darr;
                </button>
            </div>
        </div>
        <div class="row" id="part2">
            <div class="col-12 col-sm-12 col-md-12 col-lg-8">
                <detail-image
                    :src="imageTwo"
                    alt="Princeton Nassau Pediatrics locations mega-menu and welcome hero"
                    img-class="preview--img"
                />
            </div>
            <div class="col-12 col-sm-12 col-md-12 col-lg-4 text-container">
                <h4>Locations &amp; wayfinding</h4>
                <p>
                    With multiple New Jersey offices, navigation had to surface
                    locations without burying primary actions. A locations
                    mega-menu lists each office beside quick links for
                    directions, telehealth, mailing list, and pre-visit prep.
                </p>
                <p>
                    Utility buttons for Patient Portal, Pay Your Bill, and Join
                    Our Mailing List stay fixed in the chrome so transactional
                    tasks never compete with storytelling in the hero.
                </p>
                <button
                    type="button"
                    class="internal"
                    @click="$router.push({ hash: '#part3' })"
                >
                    more &darr;
                </button>
            </div>
        </div>
        <div class="row" id="part3">
            <div class="col-12 col-sm-12 col-md-12 col-lg-8">
                <detail-image
                    :src="imageThree"
                    alt="Princeton Nassau Pediatrics locations page with map"
                    img-class="preview--img"
                />
            </div>
            <div class="col-12 col-sm-12 col-md-12 col-lg-4 text-container">
                <h4>Locations page</h4>
                <p>
                    The dedicated locations view combines parking and after-hours
                    guidance with a multi-office map, while sticky side actions
                    keep Find a Provider and Pediatric Advisor one click away.
                </p>
                <p>
                    An “Expecting?” callout registers families for open-house
                    visits — a small conversion path for new patients without
                    cluttering the map.
                </p>
                <button
                    type="button"
                    class="internal"
                    @click="$router.push({ hash: '#part4' })"
                >
                    more &darr;
                </button>
            </div>
        </div>
        <div class="row" id="part4">
            <div class="col-12 col-sm-12 col-md-12 col-lg-8">
                <detail-image
                    :src="imageFour"
                    alt="Princeton Nassau Pediatrics mobile homepage"
                    img-class="preview--img mobile-shot"
                />
            </div>
            <div class="col-12 col-sm-12 col-md-12 col-lg-4 text-container">
                <h4>Mobile homepage</h4>
                <p>
                    On small screens the logo leads, then the three utility
                    actions stack full-width before the welcome copy and Learn
                    More CTA. Service blocks collapse into a vertical stack so
                    Online Services, Pediatric Advisor, and Find a Provider stay
                    thumb-reachable.
                </p>
                <button
                    type="button"
                    class="internal"
                    @click="$router.push({ hash: '#part5' })"
                >
                    more &darr;
                </button>
            </div>
        </div>
        <div class="row" id="part5">
            <div class="col-12 col-sm-12 col-md-12 col-lg-8">
                <detail-image
                    :src="imageFive"
                    alt="Princeton Nassau Pediatrics mobile parent resources page"
                    img-class="preview--img mobile-shot"
                />
            </div>
            <div class="col-12 col-sm-12 col-md-12 col-lg-4 text-container">
                <h4>Parent resources</h4>
                <p>
                    Parent Resources answers the questions families ask most —
                    well visits, dosing, vaccines — in a calm, readable layout
                    with the same portal and billing shortcuts always on hand.
                </p>
                <a
                    href="https://princetonnassaupediatrics.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="internal"
                    >visit site &rarr;</a
                >
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
import imageOne from './../assets/p5/p5-1.webp'
import imageTwo from './../assets/p5/p5-2.webp'
import imageThree from './../assets/p5/p5-3.webp'
import imageFour from './../assets/p5/p5-4.webp'
import imageFive from './../assets/p5/p5-5.webp'
import DetailImage from './../components/main/DetailImage.vue'

export default {
    name: 'ProjectFiveDetails',
    components: { DetailImage },
    data() {
        return {
            imageOne,
            imageTwo,
            imageThree,
            imageFour,
            imageFive,
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
        color: #212529;
        font-size: 1.5625rem;
        margin-top: 0px;
        line-height: 1em;
    }
    h4 {
        font-family: 'proxima_novablack';
        font-size: 1.25rem;
        color: #212529;
    }
    h5 {
        font-family: 'AvenirLTStdLight';
        color: #212529;
        font-size: 0.75rem;
        margin-top: 5px;
    }
    p {
        font-size: 0.875rem;
    }
    button.internal {
        background: none;
        border: 0;
        font: inherit;
        cursor: pointer;
        text-align: left;
        outline: none;
        -webkit-tap-highlight-color: transparent;
        appearance: none;
    }
    a.internal,
    button.internal {
        color: var(--color-accent);
        font-size: 0.875rem;
        border-top: 3px solid var(--color-accent);
        border-left: 3px solid var(--color-accent);
        padding: 5px 12px;
        text-decoration: none;
        margin-top: 15px;
        margin-right: 12px;
        display: inline-block;
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
    .text-container {
        padding-left: 70px;
    }
    ::v-deep .detail-image:has(.mobile-shot) {
        width: 50%;
        margin-left: auto;
        min-height: 0;
        background: transparent;
    }
}
@media (max-width: 991px) {
    .container {
        .text-container {
            padding-left: 15px;
        }
        ::v-deep .detail-image:has(.mobile-shot) {
            width: 100%;
        }
    }
}
</style>
