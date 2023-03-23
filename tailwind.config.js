module.exports = {
    plugins: [
        require('@tailwindcss/typography'),
        require('daisyui')
    ],
    theme: {
		extend: {},
		screens: {
            '2xl': { max: "1535px" }, //1536px
			// => @media (max-width: 1535px) { ... }

			'xl': { max: "1279px" }, //1280px
			// => @media (max-width: 1279px) { ... }

			'lg': { max: "1023px" }, //1024px
			// => @media (max-width: 1023px) { ... }

			'md': { max: "767px" }, //768px
			// => @media (max-width: 767px) { ... }

			'sm': { max: "639px" }, //640px
			// => @media (max-width: 639px) { ... }
		},
	},
};  