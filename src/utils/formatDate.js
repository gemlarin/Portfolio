/**
 * @param {string} value
 * @returns {string}
 */
export function formatDate(value) {
    const d = new Date(value)
    if (Number.isNaN(d.getTime())) return value
    return d.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    })
}

const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
]

/**
 * October, 19, 2026 at 08:54pm
 * @param {string} value
 * @returns {string}
 */
export function formatDateTime(value) {
    const d = new Date(value)
    if (Number.isNaN(d.getTime())) return value
    const month = MONTHS[d.getMonth()]
    const day = String(d.getDate()).padStart(2, '0')
    const year = d.getFullYear()
    const minutes = String(d.getMinutes()).padStart(2, '0')
    const suffix = d.getHours() >= 12 ? 'pm' : 'am'
    let hours = d.getHours() % 12
    if (hours === 0) hours = 12
    const hh = String(hours).padStart(2, '0')
    return month + ', ' + day + ', ' + year + ' at ' + hh + ':' + minutes + suffix
}
