<template>
    <div class="page-frame">
        <div class="wrap--stack">
            <div class="wrap--centering">
                <h1 class="sr-only">Résumé</h1>
                <h2>Experience</h2>
                <ul>
                    <li>
                        <strong>Infotech</strong>, Senior Software Engineer:
                        Front End
                    </li>
                    <li>
                        <strong>Aspenware</strong>, Senior Front End Developer
                    </li>
                    <li><strong>Parkifi</strong>, Software Engineer II</li>
                    <li>
                        <strong>Clean Energy Collective</strong>, Web Developer
                    </li>
                    <li>
                        <strong>Practis Inc</strong>, Web Designer / Project
                        Manager
                    </li>
                </ul>
                <h2>Education</h2>
                <ul>
                    <li>
                        <strong>RIT</strong>, BFA New Media Design & Development
                    </li>
                    <li>
                        <strong>MCC</strong>, AAS Visual Communication
                        Technologies
                    </li>
                </ul>
                <p class="resume-cta">
                    <a
                        class="cta-link"
                        href="/danny_gibas_resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        >Full Résumé<span class="sr-only">
                            (opens in new tab)</span
                        ></a
                    >
                </p>
            </div>
        </div>
        <div class="nav-wrap nav-wrap--solid">
            <navi variant="pager" :activepage="page"></navi>
            <page-close @close="closePage" />
        </div>
    </div>
</template>

<script>
import Nav from './../components/main/navs/IntroNav.vue'
import PageClose from './../components/PageClose.vue'
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
        PageClose,
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
    font-size: var(--font-button);
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
        color: #000;
        border-top-color: #000;
        border-left-color: #000;
        text-decoration: none;
    }
}
.resume-cta {
    margin-top: 40px;
}
h2 {
    font-family: 'proxima_novablack';
    font-size: var(--font-subhead);
    color: var(--color-foreground);
    margin: 0 0 8px;
    line-height: 1.15;
    &:not(:first-of-type) {
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
    font-size: var(--font-body);
    line-height: 1.5em;
    padding-left: 0;
    color: var(--color-foreground);
    margin: 0;
    letter-spacing: 0.1px;
}

.wrap--stack {
    width: 100%;
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
    font-size: var(--font-page-title);
    right: 10px;
    top: 10px;
}
.wrap--centering {
    position: relative;
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
        list-style-type: square;
        margin: 0;
        padding: 0 0 0 1.1em;
        li {
            display: list-item;
            font-family: inherit;
            font-size: inherit;
            font-weight: inherit;
            line-height: inherit;
            &::marker {
                color: var(--color-accent);
            }
        }
        strong {
            font-family: 'AvenirLTStdBlack', sans-serif;
            font-weight: normal;
            font-synthesis: none;
        }
    }
}
@media (max-width: 768px) {
    .mfp-close {
        font-size: var(--font-page-title-sm);
    }
    .wrap--stack {
        box-sizing: border-box;
        padding: 0;
        align-items: center;
        justify-content: center;
        overflow: visible;
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
