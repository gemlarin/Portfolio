<template>
    <div class="container" id="project-three-details">
        <button
            type="button"
            class="close-control"
            aria-label="Close project details"
            @click="$router.push({ path: '/', hash: '#project-three' })"
        >
            <span class="mfp-close" aria-hidden="true">×</span>
        </button>
        <div class="row first">
            <div class="col-12 col-lg-8 text-container text-container--intro">
                <h2>SpecForge</h2>
                <h5>Role: Designer &amp; Developer (in progress)</h5>
                <p>
                    SpecForge is an open-spec, spec-driven workspace built
                    around a simple thesis: AI is fast at filling in a shape and
                    bad at deciding the shape. Traditonally engineers work
                    inside the IDE when writing the SDD artifacts with no way to
                    manage individual project status or engineering flow.
                    SpecForre aims to resolve that deficiency by providing a
                    workspace that allows engineers to manage their projects and
                    track their progress.
                </p>
                <p>
                    This case study is a <strong>work in progress</strong>. The
                    screens below are early UX mocks for the landing experience;
                    not every view is designed yet. The product will ship as a
                    React / Next.js app with structured LLM generation after the
                    design is complete.
                </p>
                <button type="button" class="internal" @click="$router.push({ hash: '#part2' })">more &darr;</button>
            </div>
        </div>
        <div class="row" id="part2">
            <div class="col-12 col-sm-12 col-md-12 col-lg-8">
                <detail-image
                    :src="imageOne"
                    alt="SpecForge wireframes for the landing experience"
                    img-class="preview--img wireframe-shot"
                />
            </div>
            <div class="col-12 col-sm-12 col-md-12 col-lg-4 text-container">
                <h4>Wireframes</h4>
                <p>
                    Before high-fidelity mocks, the IA had to answer one
                    question: how does a first-time visitor understand SpecForge
                    in under a minute without an empty prompt box? The
                    wireframes map an example path so that users have a clear
                    path to the product.
                </p>
                <p>
                    Early frames also explored how “Open seeded example” and
                    “How it works” split primary action from education, and
                    where fences vs. generated artifacts would live once the
                    user is inside a project.
                </p>
                <button type="button" class="internal" @click="$router.push({ hash: '#part3' })">more &darr;</button>
            </div>
        </div>
        <div class="row" id="part3">
            <div class="col-12 col-sm-12 col-md-12 col-lg-8">
                <detail-image
                    :src="imageTwo"
                    alt="SpecForge mobile landing for first-time visitors"
                    img-class="preview--img mobile-shot"
                />
            </div>
            <div class="col-12 col-sm-12 col-md-12 col-lg-4 text-container">
                <h4>Mobile — first-time visitor</h4>
                <p>
                    The first-run mobile landing leads with the SpecForge mark
                    and a one-line promise, then two clear actions: open the
                    seeded example or learn the flow. No login wall on first
                    page — new usersshould see the product overview immediately.
                </p>
                <p>
                    Typography and spacing are tuned for thumb reach: primary
                    CTA stays above the fold, secondary stays visible without
                    competing. This state assumes the guest has never opened a
                    project.
                </p>
                <button type="button" class="internal" @click="$router.push({ hash: '#part4' })">more &darr;</button>
            </div>
        </div>
        <div class="row" id="part4">
            <div class="col-12 col-sm-12 col-md-12 col-lg-8">
                <detail-image
                    :src="imageThree"
                    alt="SpecForge mobile landing for return visitors"
                    img-class="preview--img mobile-shot"
                />
            </div>
            <div class="col-12 col-sm-12 col-md-12 col-lg-4 text-container">
                <h4>Mobile — return visitor</h4>
                <p>
                    Return visitors skip the “what is this?” overview. The
                    mobile return state tilts toward continuing work: recent or
                    seeded project context stays available, while the same CTA
                    language still supports opening the example if they want a
                    clean demo path for an interview walkthrough.
                </p>
                <p>
                    Keeping first-time and return layouts in the same visual
                    system matters so the product feels like one app across
                    sessions, not a marketing page bolted onto an editor.
                </p>
                <button type="button" class="internal" @click="$router.push({ hash: '#part5' })">more &darr;</button>
            </div>
        </div>
        <div class="row" id="part5">
            <div class="col-12 col-sm-12 col-md-12 col-lg-8">
                <detail-image
                    :src="imageFour"
                    alt="SpecForge desktop landing for return visitors"
                    img-class="preview--img"
                />
            </div>
            <div class="col-12 col-sm-12 col-md-12 col-lg-4 text-container">
                <h4>Desktop — return visitor</h4>
                <p>
                    The desktop return landing gives the brand room to breathe
                    while keeping the dual CTAs as the only decisions on the
                    page. Wide layout is reserved for hierarchy and atmosphere —
                    not a dashboard of unfinished features.
                </p>
                <p>
                    Still on the board for later mocks: in-project fence editor,
                    generated markdown artifacts (pretty-printed), Drift Watch,
                    and gated live-AI generate for demo accounts. Public guests
                    will see a seeded / precomputed run so the portfolio stays
                    readable without burning LLM tokens.
                </p>
                <p>Planned stack (build phase):</p>
                <ul>
                    <li>React + TypeScript</li>
                    <li>Next.js</li>
                    <li>Vercel AI SDK (structured output)</li>
                    <li>Markdown artifacts + rendered preview</li>
                </ul>
                <router-link
                    :to="{ path: '/', hash: '#project-three' }"
                    class="internal"
                    >back to portfolio &rarr;</router-link
                >
            </div>
        </div>
    </div>
</template>

<script>
import imageOne from './../assets/p3/p3-1.webp'
import imageTwo from './../assets/p3/p3-2.webp'
import imageThree from './../assets/p3/p3-3.webp'
import imageFour from './../assets/p3/p3-4.webp'
import DetailImage from './../components/main/DetailImage.vue'

export default {
    name: 'ProjectThreeDetails',
    components: { DetailImage },
    data() {
        return {
            imageOne,
            imageTwo,
            imageThree,
            imageFour,
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
        -moz-appearance: none;
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
    .text-container--intro {
        padding-left: 15px;
        max-width: 720px;
    }
    ul {
        li {
            font-size: 0.875rem;
        }
    }
    ::v-deep .detail-image:has(.wireframe-shot) {
        background: var(--color-background);
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
