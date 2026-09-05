<template>
    <div>
        <div class="nav-wrap">
            <navi :activepage="page"></navi>
        </div>
        <div class="wrap--stack">
            <router-link class="nav-link" to="/#introduction"
                ><button title="Close (Esc)" type="button" class="mfp-close">
                    ×
                </button></router-link
            >
            <div class="wrap--centering">
                <h2>EXPERIENCE</h2>
                <p>Aspenware, Senior Front End Developer</p>
                <p>Parkifi, Software Engineer II</p>
                <p>Clean Energy Collective, Web Developer</p>
                <p>Practis Inc, Web Designer / Project Manager</p>
                <h2>EDUCATION</h2>
                <p>BFA New Media Design & Development, RIT</p>
                <p>AAS Visual Communication Technologies, MCC</p>
                <h2>AWARDS</h2>
                <p>Xerox Future Vision, "BIOME", 1st place</p>
                <p>eHealthcare Leadership Awards, Best Overall Site</p>
                <p>Web Marketing Associations Award, Best Overall</p>
                <p style="margin-top: 40px">
                    <a
                        href="/danny_gibas_resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        ><span>&rarr;</span>Full Resume<span>&larr;</span></a
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
export default {
    name: 'resume',
    data() {
        return {
            page: 'resume',
        }
    },
    created() {},
    components: {
        Navi: Nav,
    },
}
</script>
<style lang="scss" scoped>
a {
    color: #222;
    font-family: 'proxima_novablack';
    font-size: 20px;
    position: relative;
    color: #222;
    span {
        color: #fb2662;
        position: relative;
        top: 1px;
        font-size: 22px;
        &:first-child {
            padding-right: 5px;
        }
        &:not(:first-child) {
            padding-left: 5px;
        }
    }
    &:hover {
        text-decoration: none;
        color: #fb2662;
    }
}
h2 {
    font-family: 'AvenirLTStdMedium';
    color: #333;
    font-size: 17px !important;
    margin-bottom: 5px;
    line-height: 30px;
    padding-right: 5px;
    letter-spacing: 0.5px;
    &:not(:first-child) {
        margin-top: 20px;
    }
    span {
        color: #fb2662;
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
    font-size: 15px;
    line-height: 1.5em;
    padding-left: 5px;
    color: #222;
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
    font-size: 50px;
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
            font-size: 32px;
            font-family: 'proxima_novablack';
            p {
                margin-bottom: 0;
                line-height: 1em;
            }
            .subtext {
                font-size: 12px;
                margin-top: 5px;
                padding-top: 0;
                color: #fb2662;
                margin-bottom: 20px;
                font-family: 'AvenirLTStdBook';
            }
        }
    }
}
@media (max-width: 768px) {
    .mfp-close {
        font-size: 45px;
    }
    .wrap--centering {
        width: 100%;
        height: 410px;
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
        line-height: 50px;
        font-size: 45px;
        display: inline;
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
        height: 330px;
    }
}
</style>
