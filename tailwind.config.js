/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                black: {
                    'navy': 'hsl(236, 33%, 19%)',
                },
                light: {
                    'background': 'hsla(0, 0%, 0%, .05)',
                }
            },
            boxShadow: {
                'menu-item': '1px 6px 8px 3px rgba(0, 0, 0, 0.25)',
                'game-item': '1px 6px 8px 3px rgba(0, 0, 0, 0.25)',
            },
            fontFamily: {

            },
            borderRadius: {
                '4xl': '32px',
                '5xl': '42px',
                '6xl': '52px'
            }
        },
    },
    plugins: [],
}
