<template>
    <div class="container" id="project-five">
        <div class="row">
            <div class="col-12 col-sm-12 col-md-12 col-lg-8">
                <img
                    v-scroll-reveal="{ delay: 250, origin:'left', duration: 500, easing:'ease-out'}"
                    :src="activeImage"
                    loading="lazy"
                    decoding="async"
                    class="preview--img img-fluid popup-link-5"
                />
            </div>
            <div class="col-12 col-sm-12 col-md-12 col-lg-4 text-container">
                <h2>Refuah Health Center</h2>
                <h5>Role: Designer</h5>
                <p>Refuah Health Center was a freelance design project that was sub-contracted through a design agency. Deliverables were to include mocks and all necessary assets and had a time line of 3 weeks.</p>
                <router-link to="/project-five-details">Details<span>&rarr;</span>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import projectFiveImg from './../../../assets/project-five.webp'
export default {
    name: 'ProjectFive',
    data() {
        return {
            activeImage: projectFiveImg,
            myImage: projectFiveImg,
        }
    },
    mounted: function () {
        $('.popup-link-5').magnificPopup({
            items: {
                src: projectFiveImg,
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