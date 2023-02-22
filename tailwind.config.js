/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Barlow Semi Condensed', 'sans-serif'],
            },
            fontSize: {
                sm: '14px',
                base: '16px',
                lg: '18px',
                xl: '20px',
            },
        },
    },
    plugins: [],
};
