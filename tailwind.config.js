/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,tsx}'],
    theme: {
        extend: {
            container: {
                center: true,
                padding: '2rem',
            },
        },
    },
    plugins: [require('daisyui')],
    daisyui: {
        theme: ['dark'],
    },
}
