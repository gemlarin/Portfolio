<template>
    <div class="container" id="project-one">
        <div class="row">
            <div class="col-12 col-sm-12 col-md-12 col-lg-8">
                <div
                    class="preview--zoom"
                    v-scroll-reveal="{
                        delay: 250,
                        origin: 'left',
                        duration: 500,
                        easing: 'ease-out',
                    }"
                >
                    <img
                        :src="activeImage"
                        loading="lazy"
                        decoding="async"
                        class="preview--img img-fluid popup-link"
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

                <router-link to="/project-one-details"
                    >Details<span>&rarr;</span></router-link
                >
                <a
                    href="https://cairn-gray.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    >Live App<span>&rarr;</span></a
                >
                <hr />
                <div class="technology">
                    <img
                        src="./../../../assets/logos/vuejs.svg"
                        v-b-tooltip.hover
                        title="VueJS"
                    />
                    <img
                        src="./../../../assets/logos/npm.svg"
                        v-b-tooltip.hover
                        title="npm"
                    />
                    <img
                        src="./../../../assets/logos/es6.svg"
                        v-b-tooltip.hover
                        title="ES6 / TypeScript"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import projectOneImg from './../../../assets/project-one.webp'
export default {
    name: 'ProjectOne',
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
        font-size: 25px;
        margin-bottom: 0;
        margin-top: 40px;
        line-height: 1em;
    }
    h5 {
        font-family: 'AvenirLTStdLight';
        color: #212529;
        font-size: 12px;
        margin-top: 5px;
    }
    p {
        font-size: 14px;
    }
    a {
        color: #fb2662;
        font-size: 14px;
        margin-top: 10px;
        margin-right: 12px;
        display: inline-block;
        border-top: 3px solid #fb2662;
        border-left: 3px solid #fb2662;
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
            margin-top: 20px;
        }
    }
}
</style>
