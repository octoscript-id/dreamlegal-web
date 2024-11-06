import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			brand: {
  				'25': '#FAFDFF',
  				'50': '#ECF6FE',
  				'100': '#E2F1FD',
  				'200': '#C5E3FC',
  				'300': '#A3D0F5',
  				'400': '#7BBEF4',
  				'500': '#3D9DEB',
  				'600': '#0E77CD',
  				'700': '#1369AE',
  				'800': '#134E86',
  				'900': '#0B3766',
  				'950': '#04284E',
				"yellow": "#FEF8EC",
				"dark-yellow": "#8F5F00",
				"green": "#F0FBEF",
				"dark-green": "#26631C",
				"purple": "#F5EDFD",
				"dark-purple": "#351254"
  			},
  			gray: {
  				'25': '#FCFCFD',
  				'50': '#F9FAFB',
  				'100': '#F2F4F7',
  				'200': '#E4E7EC',
  				'300': '#D0D5DD',
  				'400': '#98A2B3',
  				'500': '#667085',
  				'600': '#475467',
  				'700': '#344054',
  				'800': '#1D2939',
  				'900': '#101828',
  				'950': '#0C111D'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontSize: {
  			'display-lg': ['64px', '80px'],
  			'display-md': ['40px', '52px'],
  			'display-sm': ['40px', '52px'],
  			'display-xs': ['32px', '40px'],
  			'heading-lg': ['22px', '30px'],
  			'heading-md': ['18px', '26px'],
  			'heading-sm': ['14px', '20px'],
  			'body-xl': ['17px', '24px'],
  			'body-lg': ['16px', '24px'],
  			'body-md': ['14px', '20px'],
  			'body-sm': ['12px', '16px'],
  			'label-lg': ['16px', '24px'],
  			'label-md': ['14px', '20px'],
  			'label-sm': ['12px', '16px']
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
  			},
			'scroll': {
				from: {
					transform: 'translateX(0)',
				},
				to: {
					transform: 'translateX(-50%)',
				}
			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
			'scroll': 'scroll 15s linear infinite',
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
