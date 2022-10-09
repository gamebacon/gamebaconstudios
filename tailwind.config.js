/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
    theme: {
        extend: {
            boxShadow: {
                'menu-item': '1px 6px 8px 3px rgba(0, 0, 0, 0.25)',
            }
        },
    },
    plugins: [],
}
