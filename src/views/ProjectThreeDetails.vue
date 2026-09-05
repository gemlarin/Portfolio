<template>
    <div class="container" id="project-three-details">
        <router-link class="nav-link" :to="{ path: '/', hash: '#project-three' }">
            <button title="Close (Esc)" type="button" class="mfp-close">×</button>
        </router-link>
        <div class="row first">
            <div class="col-12 col-sm-12 col-md-12 col-lg-8">
                <detail-image
                    :src="activeImage"
                    eager
                    img-class="preview--img popup-link"
                />
            </div>
            <div class="col-12 col-sm-12 col-md-12 col-lg-4 text-container">
                <h2>Project Canary</h2>
                <h5>Role: UX and Development</h5>
                <p>Canary is an experimental and internal facing workorder and build system for initial deployment of 5G Neutral Host Gateways in the field. The wireless research team required a cloud application that mocked out a workorder creation and execution tool for the purposes of demonstration and systems integration testing. This project required deep coordination with both hardware and software engineering staff to establish the requirements and execution flows.</p>
                <p>Features include:</p>
                <ul>
                    <li>Complete workorder overview by logged in user</li>
                    <li>Stepped workorder creation flow</li>
                    <li>Field validation</li>
                    <li>OKTA SSO integration</li>
                    <li>API Integrated</li>
                    <li>Stepped execution flow</li>
                    <li>Pass/Fail indication with troubleshooting feedback</li>
                </ul>
                <a href="#part2" class="internal">more &darr;</a>
            </div>
        </div>
        <div class="row" id="part2">
            <div class="col-12 col-sm-12 col-md-12 col-lg-8">
                <detail-image :src="imageOne" img-class="preview--img" />
            </div>
            <div class="col-12 col-sm-12 col-md-12 col-lg-4 text-container">
                <h4>Wireframes</h4>
                <p>As with any project, after requirements gathering and general research is completed, a series of interactive wireframes are created to flesh out the application structure and flow. These interactive wireframes are presented to stateholders to obtain feedback and address any inconsistencies before generating high definition mocks.</p>
                <p>This image represents a first round wireframe of the application landing page. From this page, the user can see three overviews including a summary of orders by type, a list of most recently created workororders, and a list of orders they have created. The "traffic light" status system was removed from later iterations.</p>
                <a href="#part3" class="internal">more &darr;</a>
            </div>
        </div>
        <div class="row" id="part3">
            <div class="col-12 col-sm-12 col-md-12 col-lg-8">
                <detail-image :src="imageTwo" img-class="preview--img" />
            </div>
            <div class="col-12 col-sm-12 col-md-12 col-lg-4 text-container">
                <h4>Mocks</h4>
                <p>After the wireframes are approved, the next step in my process is the design of high resolution mocks represeting each view and all significant possible states. These mocks are generally created using Adobe CC tooling and are then moved into InVision for presentation of the UX flow.</p>
                <p>This image demonstrates a series of mocks for Project Canary within the InVision dashboard, ready for review by stakeholders.</p>
                <a href="#part4" class="internal">more &darr;</a>
            </div>
        </div>
        <div class="row" id="part4">
            <div class="col-12 col-sm-12 col-md-12 col-lg-8">
                <detail-image :src="imageThree" img-class="preview--img" />
            </div>
            <div class="col-12 col-sm-12 col-md-12 col-lg-4 text-container">
                <h4>A Unique Challenge</h4>
                <p>This project came with a unique challenge. During the workorder generation, the user would need a way to assign modules to the main board based on visual location. To complicate matters, there is a complex ruleset that applies to module assignment locations on the board. The project manager did not want the user to have to know those rules -- so I had to develop a set of algorithms to analyze the selected modules and present only the available ports that meet the ruleset for the user.</p>
                <p>This image demonstrates the implementation of the solution. Using the SVG DOM, I designed and developed an interactive representation of the mainboard - with available slots to choose from automatically highlighted for the user to choose from. Already assigned slots are labeled with the assigned module type.</p>
                <a href="#part5" class="internal">more &darr;</a>
            </div>
        </div>
        <div class="row" id="part5">
            <div class="col-12 col-sm-12 col-md-12 col-lg-8">
                <detail-image :src="imageFour" img-class="preview--img" />
            </div>
            <div class="col-12 col-sm-12 col-md-12 col-lg-4 text-container">
                <h4>Development</h4>
                <p>Additional challenges of this project included state management of the active workorder through all of the primary creation views, managing autosaving to the backend, and polling to periodically update the execution status for presentation to the user.</p>
                <p>This image shows the workorder overview page with the status monitor indicating that the user has not yet completed the fulfillment flow.</p>
                <p>Technologies used:</p>
                <ul>
                    <li>Vue</li>
                    <li>Vuex</li>
                    <li>Vue-router</li>
                    <li>Vue-resource</li>
                    <li>Vue-material</li>
                    <li>Webpack</li>
                    <li>Mocha/Chai for testing</li>
                </ul>
                <router-link :to="{ path: '/', hash: '#project-three' }" class="internal">back to portfolio &rarr;</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import projectThreeImg from './../assets/project-three.webp'
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
            activeImage: projectThreeImg,
            imageOne,
            imageTwo,
            imageThree,
            imageFour,
        }
    },
    mounted: function () {
        $('.popup-link').magnificPopup({
            items: {
                src: projectThreeImg,
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
        margin-top: 0px;
        line-height: 1em;
    }
    h4 {
        font-family: 'proxima_novablack';
        font-size: 20px;
        color: #616161;
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
    a.internal {
        color: #fb2662;
        font-size: 14px;
        border-top: 3px solid #fb2662;
        border-left: 3px solid #fb2662;
        padding: 5px 12px;
        text-decoration: none;
        margin-top: 15px;
        display: inline-block;
        &:hover {
            padding-left: 20px;
        }
    }
    .nav-link {
        position: fixed;
        right: 0;
        top: 0;
        z-index: 1100;
    }
    .mfp-close {
        font-size: 50px;
        right: 10px;
        top: 10px;
        position: relative;
        z-index: 1101;
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
    ul {
        li {
            font-size: 14px;
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
        .mfp-close {
            right: -10px;
            top: 0;
        }
    }
}
</style>
