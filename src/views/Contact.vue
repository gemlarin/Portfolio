<template>
    <div>
        <div class="nav-wrap nav-wrap--solid">
            <navi :activepage="page"></navi>
        </div>
        <div class="wrap--stack">
            <button
                type="button"
                class="close-control"
                aria-label="Close contact (Escape)"
                @click="closePage"
            >
                <span class="mfp-close" aria-hidden="true">×</span>
            </button>
            <div class="wrap--centering">
                <div class="container">
                    <form id="contact-form" @submit.prevent="onSubmit">
                        <div id="form">
                            <input
                                type="text"
                                name="_honey"
                                style="display: none"
                                tabindex="-1"
                                autocomplete="off"
                            />
                            <div class="field-wrapper">
                                <label for="firstName">Name</label>
                                <input
                                    v-model="name"
                                    autocomplete="name"
                                    id="firstName"
                                    required
                                    type="text"
                                    name="name"
                                    class="form-control"
                                    :disabled="sending"
                                />
                            </div>
                            <div class="field-wrapper">
                                <label for="email">Email address</label>
                                <input
                                    v-model="email"
                                    autocomplete="email"
                                    id="email"
                                    required
                                    type="email"
                                    name="email"
                                    class="form-control"
                                    :disabled="sending"
                                />
                            </div>
                            <div class="field-wrapper">
                                <label for="message">Message</label>
                                <textarea
                                    v-model="message"
                                    autocomplete="off"
                                    id="message"
                                    name="message"
                                    required
                                    class="form-control"
                                    :disabled="sending"
                                ></textarea>
                            </div>
                            <p v-if="error" class="form-error">{{ error }}</p>
                            <div class="row footer-row">
                                <div class="col-5">
                                    <div class="field-wrapper submit-wrap">
                                        <input
                                            :value="
                                                sending ? 'Sending…' : 'Send'
                                            "
                                            type="submit"
                                            class="btn btn-secondary"
                                            :disabled="sending"
                                        />
                                    </div>
                                </div>
                                <div class="col-7">
                                    <p>
                                        To contact me for employment
                                        opportunities, please use the form
                                        above, email me directly at
                                        <a href="mailto:dfgibas@gmail.com"
                                            >dfgibas@gmail.com</a
                                        >, or call:
                                        <a href="tel:15854552716"
                                            >585.455.2716</a
                                        >.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Nav from './../components/main/navs/IntroNav.vue'
import escapeClose from './../mixins/escapeClose'

const FORM_ENDPOINT =
    'https://formsubmit.co/ajax/396bca75b794c96de073b9dbaa8bcde6'

export default {
    name: 'contact',
    mixins: [escapeClose],
    data() {
        return {
            page: 'contact',
            name: '',
            email: '',
            message: '',
            sending: false,
            error: '',
        }
    },
    mounted() {
        const fields = this.$el.querySelectorAll('#contact-form .form-control')
        fields.forEach((field) => {
            const syncLabel = () => {
                const label = field.parentNode.querySelector('label')
                if (!label) return
                if (document.activeElement === field || field.value.trim()) {
                    label.classList.add('openup')
                } else {
                    label.classList.remove('openup')
                }
            }
            field.addEventListener('focus', syncLabel)
            field.addEventListener('blur', syncLabel)
            field.addEventListener('input', syncLabel)
            syncLabel()
        })
    },
    methods: {
        closePage() {
            this.$router.push({ path: '/', hash: '#introduction' })
        },
        async onSubmit() {
            this.error = ''
            this.sending = true
            try {
                const response = await fetch(FORM_ENDPOINT, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                    },
                    body: JSON.stringify({
                        name: this.name,
                        email: this.email,
                        message: this.message,
                        _subject: 'Portfolio contact form',
                    }),
                })
                const data = await response.json().catch(() => ({}))
                if (!response.ok) {
                    throw new Error(
                        data.message ||
                            'Something went wrong. Please try again or call me.'
                    )
                }
                this.$router.push('/thanks')
            } catch (err) {
                this.error =
                    err.message ||
                    'Something went wrong. Please try again or call me.'
            } finally {
                this.sending = false
            }
        },
    },
    components: {
        Navi: Nav,
    },
}
</script>
<style lang="scss" scoped>
.wrap--stack {
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-content: stretch;
    align-items: center;
}
.nav-link {
    position: absolute;
    right: 0;
    top: 0;
}
.mfp-close {
    font-size: 50px;
    right: 10px;
    top: 10px;
}
.wrap--centering {
    width: 40vw;
    max-width: 500px;
    min-height: 360px;
    padding: 28px 20px 20px;
    background-color: white;
    flex: 0 1 auto;
    align-self: center;
    box-sizing: border-box;
}
.footer-row {
    margin-top: 8px;
    align-items: flex-start;
}
.submit-wrap {
    margin-bottom: 0;
}
.form-error {
    color: var(--color-accent);
    font-size: 13px;
    margin: 0 0 12px;
}
p {
    font-family: 'AvenirLTStdBook';
    font-size: 15px;
    line-height: 1.74em;
    color: var(--color-foreground);
    margin-top: 0;
}
a {
    color: var(--color-foreground);
}
@media (max-width: 768px) {
    .mfp-close {
        font-size: 45px;
    }
    .wrap--stack {
        height: 100dvh;
        box-sizing: border-box;
        padding: 56px 0 72px;
        align-items: center;
        overflow-y: auto;
    }
    .wrap--centering {
        width: 100%;
        max-width: none;
        min-height: 0;
        height: auto;
        padding-left: 24px;
        padding-right: 24px;
    }
    p {
        padding-left: 0;
        padding-right: 0;
    }
}
</style>
