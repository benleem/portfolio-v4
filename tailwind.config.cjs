/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				oswald: ["Oswald", "sans-serif"],
				source: ["Source Serif Pro", "serif"],
			},
			colors: {
				bone: "#faf9f6",
			},
			keyframes: {
				"horizontal-bounce": {
					"0%": {
						transform: "translateX(0%)",
					},
					"50%": {
						transform: "translateX(200%)",
					},
					"100%": {
						transform: "translateX(0%)",
					},
				},
				"works-slide": {
					from: {
						opacity: 0,
						transform: "translateY(1.5rem)",
					},
					to: {
						opacity: 1,
						transform: "translateY(0%)",
					},
				},
				"work-slide": {
					from: {
						transform: "translateY(20%)",
					},
					to: {
						transform: "translateY(0%)",
					},
				},
				"header-slide": {
					to: {
						transform: "translateY(0%)",
					},
				},
				"opacity-fade": {
					from: {
						opacity: 0,
					},
					to: {
						opacity: 1,
					},
				},
			},

			animation: {
				"horizontal-bounce": "horizontal-bounce ease-in-out infinite 2s",
				"works-slide": "works-slide ease-in-out 0.5s",
				"work-slide": "work-slide ease-in-out 0.3s",
				"header-slide": "header-slide ease-in-out 0.8s",
				"opacity-fade": "opacity-fade ease-in-out 1s",
			},
		},
	},
	plugins: [],
};
