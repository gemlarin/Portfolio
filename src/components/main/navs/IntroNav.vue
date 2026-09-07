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
    display: inline;
    padding-left: 0;
    margin: auto 0;
    position: relative;
}
li {
    display: inline-block;
    button.nav-link {
        color: #fb2662;
        background: none;
        border: 0;
        padding: 0;
        margin: 0 12px;
        cursor: pointer;
        &:hover {
            text-decoration: underline;
        }
    }
}
.nav-link {
    font-family: 'AvenirLTStdLight';
    font-size: 16px;
    &.active {
        color: #fb2662;
        font-family: 'AvenirLTStdBlack';
    }
}
</style>
