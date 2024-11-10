import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	screens: {
  		xxs: '390px',
  		xs: '420px',
  		sm: '576px',
  		md: '768px',
  		lg: '992px',
  		xl: '1200px',
  		'2xl': '1400px'
  	},
  	container: {
  		center: true,
  		padding:{
			sm: '16px',
		    DEFAULT:"10px"
		}
  	},
  	extend: {
  		colors: {
  			theme: 'hsl(var(--theme))',
  			background: 'hsl(var(--background))',
  			'background-light': 'hsl(var(--background-light))',
  			card: {
  				DEFAULT: 'hsl(var(--card))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))'
  		},
  		backgroundImage: {
  			'theme-gradiant': 'radial-gradient(57.09% 57.09% at 50.04% 49.92%, #F86F3A 0%, #FF4800 100%)',
  			'badge-gradiant': 'radial-gradient(50% 50% at 50% 50%, #F3F5F7 0%, rgba(242, 242, 247, 0.25) 100%)',
  			'badge-gradiant-dark': 'radial-gradient(50% 50% at 50% 50%, rgba(211, 211, 211, 0.32) 0%, rgba(222, 222, 222, 0.52) 100%)'
  		},
		boxShadow:{
           "accordian-shodow":'0px 5px 16px 0px hsla(230, 73%, 12%, 0.06)'
		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;


