<template>
    <div class="detail-image">
        <div v-show="!loaded" class="detail-image__placeholder" aria-hidden="true">
            <img :src="loaderSrc" class="detail-image__loader" alt="" />
        </div>
        <button
            v-if="enlargeLabel"
            type="button"
            :class="['detail-image__enlarge', imgClass]"
            :aria-label="enlargeLabel"
        >
            <img
                ref="img"
                :src="src"
                :alt="alt"
                :loading="eager ? 'eager' : 'lazy'"
                decoding="async"
                :class="['detail-image__img', 'img-fluid', { 'is-loaded': loaded }]"
                @load="onLoaded"
                @error="onLoaded"
            />
        </button>
        <img
            v-else
            ref="img"
            :src="src"
            :alt="alt"
            :loading="eager ? 'eager' : 'lazy'"
            decoding="async"
            :class="['detail-image__img', 'img-fluid', imgClass, { 'is-loaded': loaded }]"
            @load="onLoaded"
            @error="onLoaded"
        />
    </div>
</template>

<script>
import loaderSrc from '../../assets/loader.svg'

export default {
    name: 'DetailImage',
    props: {
        src: {
            type: String,
            required: true,
        },
        alt: {
            type: String,
            required: true,
        },
        imgClass: {
            type: String,
            default: 'preview--img',
        },
        eager: {
            type: Boolean,
            default: false,
        },
        /** When set, wraps the image in a button for lightbox / keyboard access */
        enlargeLabel: {
            type: String,
            default: '',
        },
    },
    data() {
        return {
            loaded: false,
            loaderSrc,
        }
    },
    methods: {
        onLoaded() {
            this.loaded = true
        },
    },
    mounted() {
        this.$nextTick(() => {
            const img = this.$refs.img
            if (img && img.complete && img.naturalWidth > 0) {
                this.loaded = true
            }
        })
    },
}
</script>

<style scoped lang="scss">
.detail-image {
    position: relative;
    width: 100%;
    min-height: 180px;
    background: #f0f0f0;
}

.detail-image__placeholder {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
}

.detail-image__loader {
    width: 64px;
    height: 64px;
}

.detail-image__enlarge {
    display: block;
    width: 100%;
    margin: 0;
    padding: 0;
    border: 0;
    background: transparent;
    cursor: zoom-in;
    text-align: left;
}

.detail-image__img {
    display: block;
    width: 100%;
    height: auto;
    opacity: 0;
    transition: opacity 0.25s ease;

    &.is-loaded {
        opacity: 1;
    }
}
</style>
