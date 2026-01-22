/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./*.html",
        "./js/**/*.js"
    ],
    theme: {
        extend: {
            fontFamily: {
                'syne': ['Syne', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
                'darker': ['Darker Grotesque', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
            },
            colors: {
                'primary': '#0095f2',
                'primary-dark': '#3c0089',
                'dark-navy': '#050a32',
            }
        },
    },
    plugins: [],
}
