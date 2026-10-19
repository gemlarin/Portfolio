<template>
    <component
        :is="action ? 'button' : 'nav'"
        class="intro-nav"
        :class="action ? 'intro-nav--action' : 'intro-nav--pager'"
        :type="action ? 'button' : null"
        :aria-label="action ? null : 'Section'"
        @click="onRootClick"
    >
        <template v-if="action">
            <arrow-left v-if="action.icon === 'back'" />
            <span class="nav-label">{{ action.label }}</span>
            <svg
                v-if="action.icon === 'close'"
                class="nav-x"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
            >
                <path
                    fill="currentColor"
                    d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                />
            </svg>
        </template>
        <ul v-else class="navlist">
            <li v-if="showArrows" class="nav-arrow-slot">
                <button
                    type="button"
                    class="nav-arrow"
                    :disabled="!prevItem"
                    :aria-label="
                        prevItem ? 'Previous: ' + prevItem.label : 'Previous'
                    "
                    :aria-hidden="prevItem ? null : 'true'"
                    :tabindex="prevItem ? 0 : -1"
                    @click="prevItem && go(prevItem.to, $event)"
                >
                    <arrow-left />
                </button>
            </li>
            <li v-for="item in items" :key="item.id">
                <button
                    type="button"
                    class="nav-link"
                    tabindex="0"
                    :data-label="item.label"
                    :aria-current="item.id === activepage ? 'page' : null"
                    :class="{
                        active: item.id === activepage,
                        'nav-link--lead': item.icon === 'back',
                        'nav-link--trail': item.icon === 'close',
                    }"
                    @click="go(item.to, $event)"
                >
                    <arrow-left v-if="item.icon === 'back'" />
                    <span class="nav-label">{{ item.label }}</span>
                    <svg
                        v-if="item.icon === 'close'"
                        class="nav-x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        focusable="false"
                    >
                        <path
                            fill="currentColor"
                            d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                        />
                    </svg>
                </button>
            </li>
            <li v-if="showArrows" class="nav-arrow-slot">
                <button
                    type="button"
                    class="nav-arrow"
                    :disabled="!nextItem"
                    :aria-label="nextItem ? 'Next: ' + nextItem.label : 'Next'"
                    :aria-hidden="nextItem ? null : 'true'"
                    :tabindex="nextItem ? 0 : -1"
                    @click="nextItem && go(nextItem.to, $event)"
                >
                    <arrow-right />
                </button>
            </li>
        </ul>
    </component>
</template>

<script>
import ArrowLeft from './../../ArrowLeft.vue'
import ArrowRight from './../../ArrowRight.vue'

const PAGER = [
    { id: 'stack', label: 'Stack', to: '/stack' },
    { id: 'resume', label: 'Résumé', to: '/resume' },
    { id: 'contact', label: 'Contact', to: '/contact' },
]

const FULL = [
    {
        id: 'portfolio',
        label: 'Portfolio',
        to: { path: '/', hash: '#portfolio' },
    },
    { id: 'stack', label: 'Stack', to: '/stack' },
    { id: 'resume', label: 'Résumé', to: '/resume' },
    { id: 'contact', label: 'Contact', to: '/contact' },
    { id: 'blog', label: 'Blog', to: '/blog' },
]

export default {
    name: 'IntroNav',
    components: {
        ArrowLeft,
        ArrowRight,
    },
    props: {
        activepage: {
            type: String,
            default: '',
        },
        variant: {
            type: String,
            default: 'full',
        },
        closeTo: {
            type: [String, Object],
            default: null,
        },
        closeLabel: {
            type: String,
            default: 'Close',
        },
    },
    computed: {
        showArrows() {
            return this.variant === 'pager'
        },
        action() {
            if (this.variant === 'pager' || this.variant === 'full') return null
            return this.items[0]
        },
        items() {
            if (this.variant === 'close') {
                return [
                    {
                        id: 'close',
                        label: this.closeLabel,
                        icon: 'close',
                        to: this.closeTo || {
                            path: '/',
                            hash: '#introduction',
                        },
                    },
                ]
            }
            if (this.variant === 'close-blog') {
                return [
                    {
                        id: 'close-blog',
                        label: 'Close blog',
                        icon: 'close',
                        to: { path: '/', hash: '#introduction' },
                    },
                ]
            }
            if (this.variant === 'back-list') {
                return [
                    {
                        id: 'back-list',
                        label: 'All posts',
                        icon: 'back',
                        to: '/blog',
                    },
                ]
            }
            if (this.variant === 'pager') return PAGER
            return FULL
        },
        pagerIndex() {
            if (this.variant !== 'pager') return -1
            return PAGER.findIndex((item) => item.id === this.activepage)
        },
        prevItem() {
            if (this.pagerIndex <= 0) return null
            return PAGER[this.pagerIndex - 1]
        },
        nextItem() {
            if (this.pagerIndex < 0 || this.pagerIndex >= PAGER.length - 1) {
                return null
            }
            return PAGER[this.pagerIndex + 1]
        },
    },
    methods: {
        onRootClick(event) {
            if (!this.action) return
            this.go(this.action.to, event)
        },
        go(target, event) {
            if (event && event.currentTarget) {
                event.currentTarget.blur()
            }
            this.$router.push(target)
        },
    },
}
</script>

<style scoped lang="scss">
.intro-nav {
    margin: auto 0;
}
.intro-nav--action {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    color: #fff;
    cursor: pointer;
    font-family: 'AvenirLTStdMedium';
    font-size: var(--font-nav);
    line-height: 1;
    white-space: nowrap;
    -webkit-tap-highlight-color: transparent;
    touch-action: manipulation;
    > * {
        position: relative;
        z-index: 1;
    }
}
ul {
    list-style: none;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    padding-left: 0;
    margin: auto 0;
    position: relative;
}
li {
    display: flex;
    flex: 0 0 auto;
    align-items: center;
    button {
        color: #fff;
        background: none;
        border: 0;
        padding: 0;
        margin: 0 12px;
        cursor: pointer;
        -webkit-appearance: none;
        appearance: none;
        white-space: nowrap;
        -webkit-tap-highlight-color: transparent;
        touch-action: manipulation;
        text-decoration: none;
        &:focus:not(:focus-visible) {
            outline: none !important;
        }
        &:focus-visible {
            outline: 2px solid var(--color-accent) !important;
            outline-offset: 3px !important;
        }
    }
}
/* 12px button margin on the text side, minus 5px, so the arrows sit closer. */
.nav-arrow-slot:first-child .nav-arrow {
    margin-right: 7px;
}
.nav-arrow-slot:last-child .nav-arrow {
    margin-left: 7px;
}
.nav-link {
    display: inline-grid;
    align-items: center;
    justify-items: center;
    font-family: 'AvenirLTStdMedium';
    font-size: var(--font-nav);
    line-height: 1;
    text-decoration: none;
    /* Invisible bold copy holds the width so selecting a label does not shift the row. */
    &::before {
        content: attr(data-label);
        grid-area: 1 / 1;
        font-family: 'AvenirLTStdBlack';
        visibility: hidden;
        pointer-events: none;
    }
    .nav-label {
        grid-area: 1 / 1;
        justify-self: center;
        align-self: center;
        line-height: 1;
    }
    &.active {
        color: #fff;
        font-family: 'AvenirLTStdBlack';
    }
    &--lead,
    &--trail {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        &::before {
            content: none;
        }
    }
}
.nav-x,
.nav-link--lead ::v-deep .arrow-left,
.intro-nav--action ::v-deep .arrow-left {
    display: block;
    width: 1em;
    height: 1em;
    margin: 0;
    flex: 0 0 auto;
}
.nav-arrow {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 1em;
    height: 1em;
    padding: 0;
    font-size: var(--font-nav);
    line-height: 1;
    text-decoration: none;
    ::v-deep svg {
        display: block;
        width: 1em;
        height: 1em;
        margin: 0;
    }
}

li button.nav-arrow:disabled {
    color: #8d8d8d;
    opacity: 1;
    cursor: default;
    pointer-events: none;
}

@media (hover: hover) and (pointer: fine) {
    li button.nav-link:hover,
    li button.nav-link.active:hover,
    li button.nav-arrow:hover:not(:disabled),
    .intro-nav--action:hover {
        color: var(--color-accent);
        text-decoration: none;
    }
}

@media (max-width: 768px) {
    li button {
        margin: 0 10px;
        font-size: var(--font-nav);
    }
    .nav-arrow-slot:first-child .nav-arrow {
        margin-right: 5px;
    }
    .nav-arrow-slot:last-child .nav-arrow {
        margin-left: 5px;
    }
    .nav-link,
    .nav-arrow,
    .intro-nav--action {
        font-size: var(--font-nav);
    }
}

@media (max-width: 480px) {
    li button {
        margin: 0 7px;
        font-size: var(--text-sm);
    }
    .nav-arrow-slot:first-child .nav-arrow {
        margin-right: 4px;
    }
    .nav-arrow-slot:last-child .nav-arrow {
        margin-left: 4px;
    }
    .nav-link,
    .nav-arrow,
    .intro-nav--action {
        font-size: var(--text-sm);
    }
}

@media (max-width: 360px) {
    li button {
        margin: 0 5px;
        font-size: var(--font-nav-sm);
    }
    .nav-arrow-slot:first-child .nav-arrow {
        margin-right: 3px;
    }
    .nav-arrow-slot:last-child .nav-arrow {
        margin-left: 3px;
    }
    .nav-link,
    .nav-arrow,
    .intro-nav--action {
        font-size: var(--font-nav-sm);
    }
}
</style>
