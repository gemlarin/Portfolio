<template>
<nav class="intro-nav" aria-label="Section">
    <ul class="navlist">
        <li>
            <button
                type="button"
                class="nav-link"
                @click="go({ path: '/', hash: '#portfolio' }, $event)"
            >
                Portfolio
            </button>
        </li>
        <li>
            <button
                type="button"
                class="nav-link"
                :class="{ active: activepage == 'stack' }"
                :aria-current="activepage == 'stack' ? 'page' : null"
                @click="go('/stack', $event)"
            >
                Stack
            </button>
        </li>
        <li>
            <button
                type="button"
                class="nav-link"
                :class="{ active: activepage == 'resume' }"
                :aria-current="activepage == 'resume' ? 'page' : null"
                @click="go('/resume', $event)"
            >
                Résumé
            </button>
        </li>
        <li>
            <button
                type="button"
                class="nav-link"
                :class="{ active: activepage == 'contact' }"
                :aria-current="activepage == 'contact' ? 'page' : null"
                @click="go('/contact', $event)"
            >
                Contact
            </button>
        </li>
        <li>
            <button
                type="button"
                class="nav-link"
                :class="{ active: activepage == 'blog' }"
                :aria-current="activepage == 'blog' ? 'page' : null"
                @click="go('/blog', $event)"
            >
                Blog
            </button>
        </li>
    </ul>
</nav>
</template>

<script>
export default {
    name: 'IntroNav',
    data() {
        return {}
    },
    props: ['activepage'],
    components: {},
    methods: {
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
    display: block;
    flex: 0 0 auto;
    button.nav-link {
        color: var(--color-accent);
        background: none;
        border: 0;
        padding: 0;
        margin: 0 12px;
        cursor: pointer;
        white-space: nowrap;
        -webkit-tap-highlight-color: transparent;
        touch-action: manipulation;
        &:focus:not(:focus-visible) {
            outline: none !important;
        }
        &:focus-visible {
            outline: 2px solid var(--color-accent) !important;
            outline-offset: 3px !important;
        }
    }
}
.nav-link {
    font-family: 'AvenirLTStdLight';
    font-size: var(--font-nav);
    &.active {
        color: var(--color-accent);
        font-family: 'AvenirLTStdBlack';
    }
}

@media (hover: hover) and (pointer: fine) {
    li button.nav-link:hover {
        text-decoration: underline;
    }
}

@media (max-width: 768px) {
    li button.nav-link {
        margin: 0 6px;
        font-size: var(--font-nav-sm);
    }
}

@media (max-width: 400px) {
    li button.nav-link {
        margin: 0 4px;
        font-size: var(--font-nav-xs);
    }
}
</style>
