<template>
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
            @click="go('/blog', $event)"
        >
            Blog
        </button>
    </li>
</ul>
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
        &:focus,
        &:focus-visible {
            outline: none !important;
        }
    }
}
.nav-link {
    font-family: 'AvenirLTStdLight';
    font-size: 1rem;
    &.active {
        color: var(--color-accent);
        font-family: 'AvenirLTStdBlack';
    }
}

@media (hover: hover) and (pointer: fine) {
    li button.nav-link:hover {
        text-decoration: underline;
    }
    li button.nav-link:focus-visible {
        outline: 2px solid var(--color-accent) !important;
        outline-offset: 3px !important;
    }
}

@media (max-width: 768px) {
    li button.nav-link {
        margin: 0 6px;
        font-size: 0.8125rem;
    }
}

@media (max-width: 400px) {
    li button.nav-link {
        margin: 0 4px;
        font-size: 0.75rem;
    }
}
</style>
