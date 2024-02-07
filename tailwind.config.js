/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            transitionProperty: {
                height: "height",
                spacing: "margin, padding",
            },
            colors: {
                'main': '#f5f1ed',
                'charcoal': '#212529',
                'cement': '#70798c',
                'cream': '#a99985',
                'darkCement': '#252323'
            },
            boxShadow: {
                'button': 'rgba(0, 0, 0, 0.45) 0px 25px 20px -20px',
                'inside': 'inset 2px 2px 6px 1px rgba(0,0,0,0.45)',
                'checkbox': '0px 0px 2px 2px rgba(0,0,0,0.1)',
                'slider': '0px 0px 3px 2px rgba(0,0,0,0.35)'
            },
            animation: {
                'fadeIn': 'fadeInKey 0.5s ease-in',
                'fadeOut': 'fadeOutKey 0.5s ease-in forwards',
            }

        },
        keyframes: {
            'fadeInKey': {
                'from': {
                    opacity: 0
                },
                'to': {
                    opacity: 1
                }
            },
            'fadeOutKey': {
                'from': {
                    opacity: 1
                },
                'to': {
                    opacity: 0
                }
            }
        }
    },
    plugins: [
	],
};
