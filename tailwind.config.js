/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./node_modules/flowbite/**/*.js", "./node_modules/flowbite-react/lib/esm/**/*.j"],
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
                'checkbox': 'rgba(50, 50, 93, 0.4) 0px 50px 100px -20px, rgba(0, 0, 0, 0.7) 0px 30px 60px -30px, rgba(10, 37, 64, 0.4) 0px -2px 6px 0px inset',
                'slider': '0px 0px 3px 2px rgba(0,0,0,0.35)'
            }

        },
    },
    plugins: [
		require('flowbite/plugin')
	],
};
