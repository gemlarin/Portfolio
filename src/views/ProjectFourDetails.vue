<template>
    <div class="container" id="project-four-details">
        <button
            type="button"
            class="close-control"
            aria-label="Close project details"
            @click="$router.push({ path: '/', hash: '#project-four' })"
        >
            <span class="mfp-close" aria-hidden="true">×</span>
        </button>
        <div class="row first">
            <div class="col-12 col-sm-12 col-md-12 col-lg-8">
                <detail-image
                    :src="activeImage"
                    eager
                    alt="Project Canary workorder brief"
                    img-class="preview--img brief-shot"
                />
            </div>
            <div class="col-12 col-sm-12 col-md-12 col-lg-4 text-container">
                <h2>Project Canary</h2>
                <h5>Role: UI and Development</h5>
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
                <p>As with any project, after requirements gathering and general research is completed, 
                    a series of wireframes are created to flesh out the application structure 
                    and flow. These wireframes are presented to stateholders to obtain feedback 
                    and address any inconsistencies before generating high definition mocks.</p>
                <p>This image represents a first round wireframe of the New Order landing page. From this 
                    page, the user enters the first step of the workorder creation flow.</p>
                <a href="#part3" class="internal">more &darr;</a>
            </div>
        </div>
        <div class="row" id="part3">
            <div class="col-12 col-sm-12 col-md-12 col-lg-8">
                <detail-image :src="imageTwo" img-class="preview--img" />
            </div>
            <div class="col-12 col-sm-12 col-md-12 col-lg-4 text-container">
                <h4>User Journey</h4>
                <p>With the wireframes in hand, the next step was mapping the end-to-end user journey — 
                    how a logged-in operator moves from the workorder overview into creation, through field validation, 
                    and into stepped execution with clear pass/fail outcomes.</p>
                <p>This image captures the Canary user journey used with stakeholders to align on flow, decision points, and where hardware constraints surface in the UI.</p>
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
                <router-link :to="{ path: '/', hash: '#project-four' }" class="internal">back to portfolio &rarr;</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import briefImg from './../assets/p4/brief.webp'
import imageOne from './../assets/p4/p4-1.webp'
import imageTwo from './../assets/p4/p4-2.webp'
import imageThree from './../assets/p4/p4-3.webp'
import imageFour from './../assets/p4/p4-4.webp'
import DetailImage from './../components/main/DetailImage.vue'
export default {
    name: 'ProjectFourDetails',
    components: { DetailImage },
    data() {
        return {
            activeImage: briefImg,
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
    .row:not(.first) {
        padding-top: 30px;
    }
    .text-container {
        padding-left: 70px;
    }
    ul {
        li {
            font-size: 0.875rem;
        }
    }
    ::v-deep .detail-image {
        background: transparent;
    }
    ::v-deep .detail-image:has(.brief-shot) {
        width: 70%;
        margin-left: auto;
        min-height: 0;
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
