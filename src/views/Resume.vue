<template>
    <div>
        <div class="nav-wrap nav-wrap--solid">
            <navi :activepage="page"></navi>
        </div>
        <div class="wrap--stack">
            <button
                type="button"
                class="close-control"
                aria-label="Close résumé (Escape)"
                @click="closePage"
            >
                <span class="mfp-close" aria-hidden="true">×</span>
            </button>
            <div class="wrap--centering">
                <h2>Experience</h2>
                <p>Aspenware, Senior Front End Developer</p>
                <p>Parkifi, Software Engineer II</p>
                <p>Clean Energy Collective, Web Developer</p>
                <p>Practis Inc, Web Designer / Project Manager</p>
                <h2>Education</h2>
                <p>BFA New Media Design & Development, RIT</p>
                <p>AAS Visual Communication Technologies, MCC</p>
                <p class="resume-cta">
                    <a
                        class="cta-link"
                        href="/danny_gibas_resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        >Full Résumé</a
                    >
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import Nav from './../components/main/navs/IntroNav.vue'
import escapeClose from './../mixins/escapeClose'
export default {
    name: 'resume',
    mixins: [escapeClose],
    data() {
        return {
            page: 'resume',
        }
    },
    created() {},
    components: {
        Navi: Nav,
    },
    methods: {
        closePage() {
            this.$router.push({ path: '/', hash: '#introduction' })
        },
    },
}
</script>
<style lang="scss" scoped>
a.cta-link {
    color: var(--color-accent);
    font-family: inherit;
    font-size: 0.875rem;
    margin-top: 0;
    margin-right: 0;
    display: inline-block;
    border-top: 3px solid var(--color-accent);
    border-left: 3px solid var(--color-accent);
    padding: 5px 12px;
    text-decoration: none;
    background: none;
    cursor: pointer;
    text-align: left;
    &:hover {
        padding-left: 20px;
        color: var(--color-accent);
        text-decoration: none;
    }
}
.resume-cta {
    margin-top: 40px;
}
h2 {
    font-family: 'proxima_novablack';
    font-size: 1.75rem;
    color: var(--color-foreground);
    margin: 0 0 8px;
    line-height: 1.15;
    &:not(:first-child) {
        margin-top: 28px;
    }
}
.wrapper--postion-nav {
    margin-top: 60px;
}
.positioner {
    width: 100vw;
    position: absolute;
    z-index: 301;
    bottom: 40px;
    text-align: center;
}
p {
    font-family: 'AvenirLTStdLight';
    font-size: 0.9375rem;
    line-height: 1.5em;
    padding-left: 0;
    color: var(--color-foreground);
    margin: 0;
    letter-spacing: 0.1px;
}

.wrap--stack {
    height: 100vh;
    width: 100vw;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-flex-wrap: nowrap;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-align-content: stretch;
    -ms-flex-line-pack: stretch;
    align-content: stretch;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
}
.nav-link {
    position: absolute;
    right: 0;
    top: 0;
}
.mfp-close {
    font-size: 3.125rem;
    right: 10px;
    top: 10px;
}
.wrap--centering {
    width: fit-content;
    max-width: min(520px, 88vw);
    height: auto;
    margin-left: auto;
    margin-right: auto;
    text-align: left;
    background-color: white;
    -webkit-order: 0;
    -ms-flex-order: 0;
    order: 0;
    -webkit-flex: 0 1 auto;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    -webkit-align-self: center;
    -ms-flex-item-align: center;
    align-self: center;
    img {
        display: inline-block;
        height: 20px;
        width: auto;
        margin-left: 10px;
        margin-right: 10px;
    }
    img:nth-child(2) {
        height: 35px;
    }
    ul {
        padding: 0;
        text-decoration: none;
        li {
            display: block;
            font-size: 2rem;
            font-family: 'proxima_novablack';
            p {
                margin-bottom: 0;
                line-height: 1em;
            }
            .subtext {
                font-size: 0.75rem;
                margin-top: 5px;
                padding-top: 0;
                color: var(--color-accent);
                margin-bottom: 20px;
                font-family: 'AvenirLTStdBook';
            }
        }
    }
}
@media (max-width: 768px) {
    .mfp-close {
        font-size: 2.8125rem;
    }
    .wrap--stack {
        height: 100dvh;
        box-sizing: border-box;
        padding: 56px 0 72px;
        align-items: center;
        justify-content: center;
        overflow-y: auto;
    }
    .wrap--centering {
        width: fit-content;
        max-width: calc(100% - 48px);
        height: auto;
        margin-left: auto;
        margin-right: auto;
        align-self: center;
    }
    .subcopy {
        max-width: 400px;
        padding-top: 20px;
        text-align: left;
        margin: 0;
        padding-left: 0;
        padding-right: 0;
        max-width: 80%;
    }
    .listing {
        text-align: left;
        max-width: 80%;
        margin: 0;
    }
    h2 {
        display: block;
        padding-left: 0;
        padding-right: 0;
    }
    p {
        padding-left: 0;
        padding-right: 0;
    }
}
</style>
