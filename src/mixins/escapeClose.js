/**
 * Call `closePage` on Escape. Component must implement closePage().
 * Skips when focus is in a text field so forms can dismiss keyboards first.
 * Unbinds while keep-alive deactivated so cached pages do not steal Escape.
 */
export default {
    mounted() {
        this._bindEscapeClose()
    },
    activated() {
        this._bindEscapeClose()
    },
    deactivated() {
        this._unbindEscapeClose()
    },
    beforeDestroy() {
        this._unbindEscapeClose()
    },
    methods: {
        _bindEscapeClose() {
            if (this._escapeCloseBound) return
            this._onEscapeClose = (event) => {
                if (event.key !== 'Escape') return
                const tag =
                    (event.target && event.target.tagName) || ''
                if (
                    tag === 'INPUT' ||
                    tag === 'TEXTAREA' ||
                    tag === 'SELECT'
                ) {
                    return
                }
                if (typeof this.closePage === 'function') {
                    this.closePage()
                }
            }
            window.addEventListener('keydown', this._onEscapeClose)
            this._escapeCloseBound = true
        },
        _unbindEscapeClose() {
            if (!this._escapeCloseBound || !this._onEscapeClose) return
            window.removeEventListener('keydown', this._onEscapeClose)
            this._escapeCloseBound = false
        },
    },
}
