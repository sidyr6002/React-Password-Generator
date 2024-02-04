/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./node_modules/flowbite/**/*.js", "./node_modules/flowbite-react/lib/esm/**/*.j"],
    theme: {
        extend: {
            transitionProperty: {
                height: "height",
                spacing: "margin, padding",
            },
            // padding: {
            //     "7.5": "1.9rem",
			// 	"4.5": "1.15rem"
            // },
        },
    },
    plugins: [
		require('flowbite/plugin')
	],
};
