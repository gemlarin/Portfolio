<template>
    <div class="not-found">
        <router-link to="/" class="logo-link" aria-label="Home">
            <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 49.612 50"
                xml:space="preserve"
                aria-hidden="true"
                focusable="false"
            >
                <path
                    d="M49.461,16.105c0-8.985-7.038-16.023-15.874-16.023H16.288c-0.95,0-1.72,0.77-1.72,1.72v12.881H1.8
             c-0.95,0-1.72,0.77-1.72,1.72v17.448c0,8.985,7.038,16.023,15.874,16.023h17.299c0.95,0,1.72-0.77,1.72-1.72V35.273h12.769
             c0.95,0,1.72-0.77,1.72-1.72V16.105z M44.369,30.238l-14.233,0.011H29.88v0L19.66,30.257v-5.498h-5.092v8.681
             c0,1.013,0.821,1.834,1.834,1.834H29.88v9.659c0,0-3.594,0-13.852,0c-7.937,0-10.857-7.095-10.857-10.614c0-3.519,0-14.601,0-14.601
             l9.397-0.007v0.003h5.092v-0.007l10.221-0.008v5.504h5.092v-8.97c0-0.856-0.694-1.551-1.551-1.551H19.66V5.023c0,0,3.594,0,13.852,0
             c7.937,0,10.857,7.095,10.857,10.614C44.369,19.156,44.369,30.238,44.369,30.238z"
                />
            </svg>
        </router-link>
        <p class="code">404</p>
        <h1>Page not found</h1>
        <p class="message">This route doesn’t exist.</p>
        <router-link to="/" class="home-link">Back home<span>&rarr;</span></router-link>
    </div>
</template>

<script>
export default {
    name: 'PageNotFound',
    metaInfo: {
        title: '404',
    },
}
</script>

<style scoped lang="scss">
.not-found {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 40px 24px;
    background: #f7f7f7;
    font-family: 'AvenirLTStdBook', sans-serif;
}

.logo-link {
    display: inline-block;
    margin-bottom: 32px;

    svg {
        width: 56px;
        height: 56px;
        fill: #212529;
    }
}

.code {
    margin: 0;
    font-family: 'proxima_novablack', sans-serif;
    font-size: 72px;
    line-height: 1;
    color: #fb2662;
}

h1 {
    margin: 12px 0 8px;
    font-family: 'proxima_novablack', sans-serif;
    font-size: 28px;
    color: #212529;
}

.message {
    margin: 0 0 28px;
    font-size: 15px;
    color: #616161;
}

.home-link {
    color: #fb2662;
    font-size: 14px;
    border-top: 3px solid #fb2662;
    border-left: 3px solid #fb2662;
    padding: 5px 12px;
    text-decoration: none;

    &:hover {
        padding-left: 20px;
    }
}
</style>
