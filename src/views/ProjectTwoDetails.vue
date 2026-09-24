<template>
    <div class="container" id="project-two-details">
        <button
            type="button"
            class="close-control"
            aria-label="Close project details"
            @click="$router.push({ path: '/', hash: '#project-two' })"
        >
            <span class="mfp-close" aria-hidden="true">×</span>
        </button>
        <div class="row first">
            <div class="col-12 col-sm-12 col-md-12 col-lg-8">
                <detail-image
                    :src="imageOne"
                    eager
                    alt="Cairn park details view with photo and visit panel"
                    img-class="preview--img"
                />
            </div>
            <div class="col-12 col-sm-12 col-md-12 col-lg-4 text-container">
                <h2>Cairn</h2>
                <h5>Role: Designer &amp; Developer</h5>
                <p>
                    Cairn is a National Parks travel log: search the NPS
                    catalog, mark sites you have visited, and keep private
                    notes. The details view uses a split layout — a full-bleed
                    NPS photograph beside a calm information panel with
                    category, title, an “I was here” checkbox, and a visit-notes
                    field.
                </p>
                <p>
                    Signed-in users log visits and write notes that persist
                    through Supabase with row-level security scoped to their
                    account. Save and delete actions stay close to the notes
                    field so the panel reads like a field journal, not a form
                    dump.
                </p>
                <p>
                    Responsively, the split stacks: imagery becomes a top hero,
                    then the panel scrolls beneath. The back control and
                    official NPS link remain reachable without fighting the
                    photo for space.
                </p>
                <button type="button" class="internal" @click="$router.push({ hash: '#part2' })">more &darr;</button>
            </div>
        </div>
        <div class="row" id="part2">
            <div class="col-12 col-sm-12 col-md-12 col-lg-8">
                <detail-image
                    :src="imageTwo"
                    alt="Cairn sign-in modal over a park details screen"
                    img-class="preview--img mobile-shot"
                />
            </div>
            <div class="col-12 col-sm-12 col-md-12 col-lg-4 text-container">
                <h4>Auth over park details</h4>
                <p>
                    Auth is intentional, not ambient. Visiting and notes require
                    an account, so the sign-in modal opens in place over the
                    park the user was already looking at — hero photo and title
                    stay visible behind the overlay instead of bouncing them to
                    a separate login page.
                </p>
                <p>
                    Design challenges included matching the modal to the brand
                    (serif heading, forest-green primary action, earthy
                    surfaces) and keeping email/password fields readable against
                    a soft beige palette without looking like a generic dialog.
                </p>
                <p>
                    On phones the modal scales to near-full width with large tap
                    targets; the underlying details chrome remains visible at
                    the edges so interest in the park is not lost mid-flow.
                </p>
                <button type="button" class="internal" @click="$router.push({ hash: '#part3' })">more &darr;</button>
            </div>
        </div>
        <div class="row" id="part3">
            <div class="col-12 col-sm-12 col-md-12 col-lg-8">
                <detail-image
                    :src="imageThree"
                    alt="Cairn search results grid of national park cards"
                    img-class="preview--img"
                />
            </div>
            <div class="col-12 col-sm-12 col-md-12 col-lg-4 text-container">
                <h4>Search results grid</h4>
                <p>
                    Search returns a restrained earth-tone grid of park cards.
                    Each card leads with photography, then category and state
                    metadata, then a serif title — with small badges when a site
                    is visited or has notes.
                </p>
                <p>
                    The challenge was keeping cards visually consistent when
                    titles and state lists vary wildly in length, while still
                    letting the imagery carry the “travel log” feel and making
                    visit status glanceable without cluttering the photo.
                </p>
                <p>
                    Four columns on wide screens collapse to two and then one as
                    the viewport narrows. Pagination sits under the grid so
                    browsing large NPS result sets stays predictable.
                </p>
                <button type="button" class="internal" @click="$router.push({ hash: '#part4' })">more &darr;</button>
            </div>
        </div>
        <div class="row" id="part4">
            <div class="col-12 col-sm-12 col-md-12 col-lg-8">
                <detail-image
                    :src="imageFour"
                    alt="Cairn Field Log visit list on a mobile screen"
                    img-class="preview--img mobile-shot"
                />
            </div>
            <div class="col-12 col-sm-12 col-md-12 col-lg-4 text-container">
                <h4>Field Log on mobile</h4>
                <p>
                    The Field Log is the personal half of the product: a
                    chronological list of places you have marked visited, with
                    thumbnails, category and state, visit dates, and any notes
                    you saved.
                </p>
                <p>
                    On a phone that becomes a tight vertical feed — square media
                    beside serif titles, monospaced notes, and clear empty
                    states when nothing was written. Nav between Search and
                    Field Log stays in the header so switching contexts is one
                    tap.
                </p>
                <p>
                    The design problem was density without noise: enough
                    metadata to recognize a visit at a glance, without turning
                    each row into a card farm that fights the cream
                    field-journal palette.
                </p>
                <button type="button" class="internal" @click="$router.push({ hash: '#part5' })">more &darr;</button>
            </div>
        </div>
        <div class="row" id="part5">
            <div class="col-12 col-sm-12 col-md-12 col-lg-8">
                <detail-image
                    :src="imageFive"
                    alt="Cairn category filter modal on a mobile screen"
                    img-class="preview--img mobile-shot"
                />
            </div>
            <div class="col-12 col-sm-12 col-md-12 col-lg-4 text-container">
                <h4>Category filter on small screens</h4>
                <p>
                    NPS search spans parks, people, places, things to do, tours,
                    and campgrounds. On mobile, category selection uses a
                    focused modal with radio options instead of a fragile
                    dropdown, so the choice is explicit and thumb-friendly.
                </p>
                <p>
                    The active filter (for example Parks) stays visible in the
                    chrome under the search bar so the user always knows what
                    the query is scoped to. Closing the modal returns them to
                    results without a full navigation reset.
                </p>
                <p>Technologies used:</p>
                <ul>
                    <li>Vue 3</li>
                    <li>TypeScript</li>
                    <li>Vite</li>
                    <li>Pinia</li>
                    <li>Vue Router</li>
                    <li>Tailwind CSS</li>
                    <li>Supabase (Auth + Postgres / RLS)</li>
                    <li>National Park Service API</li>
                    <li>Vitest</li>
                </ul>
                <a
                    href="https://github.com/gemlarin/Cairn"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="internal"
                    >GitHub &rarr;</a
                >
                <router-link
                    :to="{ path: '/', hash: '#project-two' }"
                    class="internal"
                    >back to portfolio &rarr;</router-link
                >
            </div>
        </div>
    </div>
</template>

<script>
import imageOne from './../assets/p2/p2-1.webp'
import imageTwo from './../assets/p2/p2-2.webp'
import imageThree from './../assets/p2/p2-3.webp'
import imageFour from './../assets/p2/p2-4.webp'
import imageFive from './../assets/p2/p2-5.webp'
import DetailImage from './../components/main/DetailImage.vue'
export default {
    name: 'ProjectTwoDetails',
    components: { DetailImage },
    data() {
        return {
            imageOne,
            imageTwo,
            imageThree,
            imageFour,
            imageFive,
        }
    },
}
</script>
<style scoped lang="scss">
.container {
    margin-top: 130px;
    font-family: 'AvenirLTStdBook';
    h2 {
        font-family: 'proxima_novablack';
        color: #212529;
        font-size: 25px;
        margin-bottom: 0;
        margin-top: 0px;
        line-height: 1em;
    }
    h4 {
        font-family: 'proxima_novablack';
        font-size: 20px;
        color: #616161;
    }
    h5 {
        font-family: 'AvenirLTStdLight';
        color: #212529;
        font-size: 12px;
        margin-top: 5px;
    }
    p {
        font-size: 14px;
    }
    button.internal {
        background: none;
        border: 0;
        font: inherit;
        cursor: pointer;
        text-align: left;
        outline: none;
        -webkit-tap-highlight-color: transparent;
        -moz-appearance: none;
        appearance: none;
    }
    a.internal,
    button.internal {
        color: #fb2662;
        font-size: 14px;
        border-top: 3px solid #fb2662;
        border-left: 3px solid #fb2662;
        padding: 5px 12px;
        text-decoration: none;
        margin-top: 15px;
        margin-right: 12px;
        display: inline-block;
        &:hover {
            padding-left: 20px;
        }
    }
    .row {
        margin-bottom: 100px;
    }
    .row:not(.first) {
        padding-top: 30px;
    }
    .text-container {
        padding-left: 70px;
    }
    ul {
        li {
            font-size: 14px;
        }
    }
    ::v-deep .detail-image:has(.mobile-shot) {
        width: 50%;
        margin-left: auto;
        min-height: 0;
        background: transparent;
    }
}
@media (max-width: 991px) {
    .container {
        .text-container {
            padding-left: 15px;
        }
    }
}

@media (max-width: 767px) {
    .container {
        .row {
            margin-bottom: 50px;
        }
        .text-container {
            padding-left: 15px;
        }
        h2 {
            margin-top: 20px;
        }
    }
}
</style>
