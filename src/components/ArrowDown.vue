<template>
    <svg
        class="arrow-down"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        aria-hidden="true"
        focusable="false"
    >
        <!-- Material Icons: arrow_downward -->
        <path
            fill="currentColor"
            d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"
        />
    </svg>
</template>

<script>
export default {
    name: 'ArrowDown',
}
</script>

<style scoped>
.arrow-down {
    display: inline-block;
    width: 0.95em;
    height: 0.95em;
    margin-left: 1px;
    flex-shrink: 0;
    vertical-align: middle;
}
</style>
