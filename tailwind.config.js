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
                'charcoal': 'rgba(54, 69, 79, 1)'
            }
        },
    },
    plugins: [
		require('flowbite/plugin')
	],
};
