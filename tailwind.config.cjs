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
						"-webkit-transform": translatex(0),
						"-moz-transform": translatex(0),
						"-o-transform": translatex(0),
						"-ms-transform": translatex(0),
					},
					"50%": {
						transform: "translateX(200%)",
						"-webkit-transform": "translateX(200%)",
						"-moz-transform": "translateX(200%)",
						"-o-transform": "translateX(200%)",
						"-ms-transform": "translateX(200%)",
					},
					"100%": {
						transform: "translateX(0%)",
						"-webkit-transform": translatex(0),
						"-moz-transform": translatex(0),
						"-o-transform": translatex(0),
						"-ms-transform": translatex(0),
					},
				},
				"works-slide": {
					from: {
						// opacity
						"-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
						filter: "alpha(opacity=0)",
						"-moz-opacity": "0",
						"-khtml-opacity": "0",
						opacity: 0,
						// translate
						transform: "translateY(1.5rem)",
						"-webkit-transform": "translateY(1.5rem)",
						"-moz-transform": "translateY(1.5rem)",
						"-o-transform": "translateY(1.5rem)",
						"-ms-transform": "translateY(1.5rem)",
					},
					to: {
						// opacity
						"-ms-filter":
							"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
						filter: "alpha(opacity=100)",
						"-moz-opacity": "1",
						"-khtml-opacity": "1",
						opacity: 1,
						// translate
						transform: "translateY(0%)",
						"-webkit-transform": "translateY(0%)",
						"-moz-transform": "translateY(0%)",
						"-o-transform": "translateY(0%)",
						"-ms-transform": "translateY(0%)",
					},
				},
				"work-slide": {
					from: {
						transform: "translateY(20%)",
						"-webkit-transform": "translateY(20%)",
						"-moz-transform": "translateY(20%)",
						"-o-transform": "translateY(20%)",
						"-ms-transform": "translateY(20%)",
					},
					to: {
						transform: "translateY(0%)",
						"-webkit-transform": "translateY(0%)",
						"-moz-transform": "translateY(0%)",
						"-o-transform": "translateY(0%)",
						"-ms-transform": "translateY(0%)",
					},
				},
				"header-slide": {
					to: {
						transform: "translateY(0%)",
						"-webkit-transform": "translateY(0%)",
						"-moz-transform": "translateY(0%)",
						"-o-transform": "translateY(0%)",
						"-ms-transform": "translateY(0%)",
					},
				},
				"opacity-fade": {
					from: {
						/* IE 8 */
						"-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
						/* IE 5-7 */
						filter: "alpha(opacity=0)",
						/* Netscape */
						"-moz-opacity": "0",
						/* Safari 1.x */
						"-khtml-opacity": "0",
						/* Good browsers */
						opacity: 0,
					},
					to: {
						"-ms-filter":
							"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
						filter: "alpha(opacity=100)",
						"-moz-opacity": "1",
						"-khtml-opacity": "1",
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
