<template>
    <svg
        class="arrow-left"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        aria-hidden="true"
        focusable="false"
    >
        <!-- Material Icons: arrow_back -->
        <path
            fill="currentColor"
            d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"
        />
    </svg>
</template>

<script>
export default {
    name: 'ArrowLeft',
}
</script>

<style scoped>
.arrow-left {
    display: inline-block;
    width: 0.95em;
    height: 0.95em;
    margin-right: 1px;
    flex-shrink: 0;
    vertical-align: middle;
}
</style>
