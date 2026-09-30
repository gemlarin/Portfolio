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
                    <h1 class="contact-title">Contact Form</h1>
                    <p class="contact-lede">
                        To contact me for employment opportunities, please use
                        the form below, email me directly at
                        <a href="mailto:dfgibas@gmail.com">dfgibas@gmail.com</a>,
                        or call:
                        <a href="tel:15854552716">585.455.2716</a>.
                    </p>
                    <form id="contact-form" @submit.prevent="onSubmit">
                        <div id="form">
                            <input
                                ref="botcheck"
                                type="checkbox"
                                name="botcheck"
                                tabindex="-1"
                                autocomplete="off"
                                style="display: none"
                                aria-hidden="true"
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
                                    :aria-invalid="error ? 'true' : 'false'"
                                    :aria-describedby="
                                        error ? 'contact-form-error' : null
                                    "
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
                                    :aria-invalid="error ? 'true' : 'false'"
                                    :aria-describedby="
                                        error ? 'contact-form-error' : null
                                    "
                                />
                            </div>
                            <div class="field-wrapper">
                                <label for="message">Message</label>
                                <textarea
                                    ref="message"
                                    v-model="message"
                                    autocomplete="off"
                                    id="message"
                                    name="message"
                                    required
                                    class="form-control"
                                    rows="1"
                                    :disabled="sending"
                                    :aria-invalid="error ? 'true' : 'false'"
                                    :aria-describedby="
                                        error ? 'contact-form-error' : null
                                    "
                                    @input="growMessage"
                                ></textarea>
                            </div>
                            <p
                                id="contact-form-error"
                                class="form-error"
                                role="alert"
                                aria-live="assertive"
                            >
                                {{ error }}
                            </p>
                            <div class="field-wrapper submit-wrap">
                                <button
                                    type="submit"
                                    class="cta-link"
                                    :disabled="sending"
                                    :aria-busy="sending ? 'true' : 'false'"
                                >
                                    <span>{{
                                        sending ? 'Sending…' : 'Send'
                                    }}</span>
                                    <send-icon />
                                </button>
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
import SendIcon from './../components/SendIcon.vue'
import escapeClose from './../mixins/escapeClose'

const FORM_ENDPOINT = 'https://api.web3forms.com/submit'
/* global WEB3FORMS_ACCESS_KEY */
const ACCESS_KEY =
    typeof WEB3FORMS_ACCESS_KEY !== 'undefined' ? WEB3FORMS_ACCESS_KEY : ''

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
        this.labelCleanups = []
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
            this.labelCleanups.push(() => {
                field.removeEventListener('focus', syncLabel)
                field.removeEventListener('blur', syncLabel)
                field.removeEventListener('input', syncLabel)
            })
        })
    },
    beforeDestroy() {
        const cleanups = this.labelCleanups || []
        for (let i = 0; i < cleanups.length; i++) {
            cleanups[i]()
        }
        this.labelCleanups = []
    },
    methods: {
        closePage() {
            this.$router.push({ path: '/', hash: '#introduction' })
        },
        growMessage() {
            const el = this.$refs.message
            if (!el) return
            el.style.height = '48px'
            const max = 280
            el.style.height =
                Math.min(Math.max(48, el.scrollHeight), max) + 'px'
        },
        async onSubmit() {
            this.error = ''
            if (!ACCESS_KEY) {
                this.error =
                    'Contact form is not configured yet. Please email me at dfgibas@gmail.com.'
                return
            }
            const botcheck = !!(
                this.$refs.botcheck && this.$refs.botcheck.checked
            )
            this.sending = true
            try {
                const response = await fetch(FORM_ENDPOINT, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                    },
                    body: JSON.stringify({
                        access_key: ACCESS_KEY,
                        name: this.name,
                        email: this.email,
                        message: this.message,
                        subject: 'Portfolio contact form',
                        from_name: 'gemlarin.github.io',
                        botcheck: botcheck,
                    }),
                })
                const data = await response.json().catch(() => ({}))
                if (!response.ok || data.success === false) {
                    throw new Error(
                        data.message ||
                            'Something went wrong. Please try again or email me directly.'
                    )
                }
                this.$router.push('/thanks')
            } catch (err) {
                const raw = (err && err.message) || ''
                const networkFail =
                    /load failed|failed to fetch|networkerror|network error/i.test(
                        raw
                    )
                this.error = networkFail
                    ? 'Could not reach the mail service. Please try again or email me at dfgibas@gmail.com.'
                    : raw ||
                      'Something went wrong. Please try again or email me directly.'
            } finally {
                this.sending = false
            }
        },
    },
    components: {
        Navi: Nav,
        SendIcon,
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
    font-size: var(--font-page-title);
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
.contact-title {
    font-family: 'proxima_novablack';
    font-size: var(--font-subhead);
    color: var(--color-foreground);
    margin: 0 0 12px;
    line-height: 1.15;
}
.contact-lede {
    font-family: 'AvenirLTStdBook';
    font-size: var(--font-body);
    line-height: 1.74em;
    color: var(--color-foreground);
    margin: 0 0 28px;
    a {
        color: var(--color-foreground);
    }
}
.submit-wrap {
    margin-top: -20px;
    margin-bottom: 0;
}
button.cta-link {
    color: var(--color-accent);
    font-size: var(--font-button);
    margin-top: 10px;
    margin-right: 12px;
    display: inline-flex;
    align-items: center;
    border-top: 3px solid var(--color-accent);
    border-left: 3px solid var(--color-accent);
    border-right: 0;
    border-bottom: 0;
    padding: 5px 12px;
    text-decoration: none;
    background: none;
    font-family: inherit;
    cursor: pointer;
    text-align: left;
    &:hover:not(:disabled) {
        padding-left: 20px;
    }
    &:disabled {
        opacity: 0.6;
        cursor: wait;
    }
}
.form-error {
    color: var(--color-accent);
    font-size: var(--font-helper);
    margin: 0 0 12px;
    min-height: 1.2em;
}
.form-error:empty {
    margin: 0;
    min-height: 0;
}
p {
    font-family: 'AvenirLTStdBook';
    font-size: var(--font-body);
    line-height: 1.74em;
    color: var(--color-foreground);
    margin-top: 0;
}
a {
    color: var(--color-foreground);
}
@media (max-width: 768px) {
    .mfp-close {
        font-size: var(--font-page-title-sm);
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
