<template>
<ul class="navlist">
    <li>
        <button
            type="button"
            class="nav-link"
            @click="$router.push({ path: '/', hash: '#portfolio' })"
        >
            Portfolio
        </button>
    </li>
    <li>
        <button
            type="button"
            class="nav-link"
            :class="{ active: activepage == 'stack' }"
            @click="$router.push('/stack')"
        >
            Stack
        </button>
    </li>
    <li>
        <button
            type="button"
            class="nav-link"
            :class="{ active: activepage == 'resume' }"
            @click="$router.push('/resume')"
        >
            Résumé
        </button>
    </li>
                <li>
                    <button
                        type="button"
                        class="nav-link"
                        :class="{ active: activepage == 'contact' }"
                        @click="$router.push('/contact')"
                    >
                        Contact
                    </button>
                </li>
                <li>
                    <button
                        type="button"
                        class="nav-link"
                        :class="{ active: activepage == 'blog' }"
                        @click="$router.push('/blog')"
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
        &:hover {
            text-decoration: underline;
        }
    }
}
.nav-link {
    font-family: 'AvenirLTStdLight';
    font-size: 16px;
    &.active {
        color: var(--color-accent);
        font-family: 'AvenirLTStdBlack';
    }
}

@media (max-width: 768px) {
    li button.nav-link {
        margin: 0 6px;
        font-size: 13px;
    }
}

@media (max-width: 400px) {
    li button.nav-link {
        margin: 0 4px;
        font-size: 12px;
    }
}
</style>
