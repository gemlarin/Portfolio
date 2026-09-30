<template>
    <footer>
        <div class="footer-main">
            <div class="container">
                <div class="row text-center">
                    <div class="footer--logo-container text-center">
                        <a href="#main" aria-label="Back to top">
                            <svg
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                x="0px"
                                y="0px"
                                viewBox="0 0 49.612 50"
                                style="enable-background: new 0 0 49.612 50"
                                xml:space="preserve"
                                aria-hidden="true"
                                focusable="false"
                            >
                                <path
                                    class="zst"
                                    d="M49.461,16.105c0-8.985-7.038-16.023-15.874-16.023H16.288c-0.95,0-1.72,0.77-1.72,1.72v12.881H1.8
             c-0.95,0-1.72,0.77-1.72,1.72v17.448c0,8.985,7.038,16.023,15.874,16.023h17.299c0.95,0,1.72-0.77,1.72-1.72V35.273h12.769
             c0.95,0,1.72-0.77,1.72-1.72V16.105z M44.369,30.238l-14.233,0.011H29.88v0L19.66,30.257v-5.498h-5.092v8.681
             c0,1.013,0.821,1.834,1.834,1.834H29.88v9.659c0,0-3.594,0-13.852,0c-7.937,0-10.857-7.095-10.857-10.614c0-3.519,0-14.601,0-14.601
             l9.397-0.007v0.003h5.092v-0.007l10.221-0.008v5.504h5.092v-8.97c0-0.856-0.694-1.551-1.551-1.551H19.66V5.023c0,0,3.594,0,13.852,0
             c7.937,0,10.857,7.095,10.857,10.614C44.369,19.156,44.369,30.238,44.369,30.238z"
                                />
                            </svg>
                        </a>
                    </div>
                    <div class="col-md-12 text-center">
                        <p>Front-end Engineer · Design Technologist</p>
                        <ul class="footer-social" aria-label="Social links">
                            <li v-for="link in socialLinks" :key="link.id">
                                <a
                                    :href="link.url"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    :aria-label="
                                        link.label + ' (opens in new tab)'
                                    "
                                >
                                    <social-icon :name="link.id" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-legal">
            <div class="footer-legal__inner">
                <p class="footer-legal__copy">
                    &copy; 2026 Danny Gibas · Denver, CO
                </p>
                <router-link class="footer-legal__link" to="/privacy"
                    >Privacy Policy</router-link
                >
            </div>
        </div>
    </footer>
</template>

<script>
import SocialIcon from './../SocialIcon.vue'
import { socialLinks } from './../../data/social'

export default {
    name: 'foot',
    components: {
        SocialIcon,
    },
    data() {
        return {
            socialLinks,
        }
    },
}
</script>
<style scoped lang="scss">
footer {
    margin-top: 150px;
    position: relative;
    background-color: var(--color-footer);
}

.footer-main {
    padding-top: 60px;
    padding-bottom: 60px;

    .zst {
        fill: var(--color-footer-icon);
    }
    svg {
        height: 50px;
        width: auto;
        margin-top: 30px;
        margin-bottom: 20px;
    }
    .footer--logo-container {
        display: inline;
        margin: 0 auto;
    }
    p {
        font-size: var(--font-body);
        color: var(--color-footer-muted);
        margin-bottom: 5px;
    }

    .footer-social {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 16px;
        list-style: none;
        margin: 13px 0 0;
        padding: 0;

        li {
            margin: 0;
        }

        a {
            display: flex;
            color: var(--color-footer-muted);
            transition: color 0.2s ease;

            &:hover,
            &:focus {
                color: var(--color-offwhite);
            }
        }

        svg {
            width: 22px;
            height: 22px;
            margin: 0;
        }
    }
}

.footer-legal {
    background-color: var(--color-footer-strip);
    padding: 12px 16px;
}

.footer-legal__inner {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 8px 20px;
    max-width: 1140px;
    margin: 0 auto;
}

.footer-legal__copy {
    margin: 0;
    font-size: var(--font-meta);
    color: var(--color-footer-muted);
}

.footer-legal__link {
    font-size: var(--font-meta);
    color: var(--color-footer-muted);
    text-decoration: none;

    &:hover,
    &:focus {
        color: var(--color-offwhite);
        text-decoration: underline;
    }
}
</style>
