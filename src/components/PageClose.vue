<template>
    <button type="button" class="page-close" aria-label="Close" @click="$emit('close')">
        <svg
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
</template>

<script>
export default {
    name: 'PageClose',
}
</script>

<style scoped>
.page-close {
    box-sizing: border-box;
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    justify-content: center;
    width: calc(var(--font-nav) + 24px);
    height: calc(var(--font-nav) + 24px);
    margin: 0;
    padding: 0;
    border: 3px solid #fff;
    border-radius: 999px;
    background: #000;
    color: #fff;
    line-height: 0;
    cursor: pointer;
    text-decoration: none;
    box-shadow: 0 2px 12px -2px rgba(0, 0, 0, 0.4);
}
.page-close svg {
    display: block;
    width: var(--font-nav);
    height: var(--font-nav);
}
.page-close:hover {
    color: var(--color-accent);
    text-decoration: none;
}
@media (max-width: 480px) {
    .page-close {
        width: calc(var(--text-sm) + 24px);
        height: calc(var(--text-sm) + 24px);
    }
    .page-close svg {
        width: var(--text-sm);
        height: var(--text-sm);
    }
}
@media (max-width: 360px) {
    .page-close {
        width: calc(var(--font-nav-sm) + 24px);
        height: calc(var(--font-nav-sm) + 24px);
    }
    .page-close svg {
        width: var(--font-nav-sm);
        height: var(--font-nav-sm);
    }
}
.page-close:focus-visible {
    outline: 2px solid var(--color-accent);
    outline-offset: 3px;
}
</style>
