/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./*.html",
        "./js/**/*.js"
    ],
    theme: {
        extend: {
            fontFamily: {
                'sans': ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
                'syne': ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
                'darker': ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
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
