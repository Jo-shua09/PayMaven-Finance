/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				head: ["Sarabun", "sans-serif"],
				text: ["Inter", "sans-serif"],
			},
			colors: {
				primary: "#f4f1fd",
				secondary: "#754FE9",
			},
		},
	},
	// plugins: [require("daisyui")],
	// daisyui: {
	// 	themes: ["light"],
	// },
};
