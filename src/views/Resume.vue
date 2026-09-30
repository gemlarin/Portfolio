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
                <h2>EXPERIENCE</h2>
                <p>Aspenware, Senior Front End Developer</p>
                <p>Parkifi, Software Engineer II</p>
                <p>Clean Energy Collective, Web Developer</p>
                <p>Practis Inc, Web Designer / Project Manager</p>
                <h2>EDUCATION</h2>
                <p>BFA New Media Design & Development, RIT</p>
                <p>AAS Visual Communication Technologies, MCC</p>
                <p style="margin-top: 40px">
                    <a
                        href="/danny_gibas_resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        ><span>&rarr;</span>Full Résumé<span>&larr;</span></a
                    >
                </p>
                <p style="margin-top: 10px">
                    <a
                        href="https://www.linkedin.com/in/dannygibas/"
                        target="_blank"
                        ><span>&rarr;</span>LinkedIn<span>&larr;</span></a
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
a {
    color: var(--color-foreground);
    font-family: 'proxima_novablack';
    font-size: 1.25rem;
    position: relative;
    color: var(--color-foreground);
    span {
        color: var(--color-accent);
        position: relative;
        top: 1px;
        font-size: 1.375rem;
        &:first-child {
            padding-right: 5px;
        }
        &:not(:first-child) {
            padding-left: 5px;
        }
    }
    &:hover {
        text-decoration: none;
        color: var(--color-accent);
    }
}
h2 {
    font-family: 'AvenirLTStdMedium';
    color: #333;
    font-size: 1.0625rem !important;
    margin-bottom: 5px;
    line-height: 30px;
    padding-right: 5px;
    letter-spacing: 0.5px;
    &:not(:first-child) {
        margin-top: 20px;
    }
    span {
        color: var(--color-accent);
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
    padding-left: 5px;
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
    width: 70vw;
    height: 450px;
    text-align: center;
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
        overflow-y: auto;
    }
    .wrap--centering {
        width: 100%;
        height: auto;
    }
    .subcopy {
        max-width: 400px;
        padding-top: 20px;
        text-align: center;
        margin: 0 auto;
        padding-left: 0;
        padding-right: 0;
        max-width: 80%;
    }
    .listing {
        text-align: center;
        max-width: 80%;
        margin: 0 auto;
    }
    h2 {
        line-height: 30px;
        font-size: 1.0625rem !important;
        display: block;
        padding-left: 15px;
        padding-right: 15px;
    }
    p {
        padding-left: 15px;
        padding-right: 15px;
    }
}

@media (max-width: 768px) and (min-width: 695px) {
    .wrap--centering {
        width: 100%;
        height: auto;
    }
}
</style>
