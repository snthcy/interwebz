const {spacing, fontFamily} = require('tailwindcss/defaultTheme');

module.exports = {
    purge: ['./pages/**/*.js', './components/**/*.js'],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                'salmon-pink': '#e69aa4',
                'brick-red': '#e5808e'
            },
            fontFamily: {
                sans: ['Inter', ...fontFamily.sans]
            },
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        color: theme('colors.gray.700'),
                        a: {
                            color: theme('salmon-pink'),
                            '&:hover': {
                                color: theme('brick-red')
                            }
                        },
                        'h2,h3,h4': {
                            'scroll-margin-top': spacing[32]
                        },
                    }
                },
                dark: {
                    css: {
                        color: theme('colors.gray.50'),
                        a: {
                            color: theme('salmon-pink'),
                            '&:hover': {
                                color: theme('brick-red')
                            }
                        },
                        'h2,h3,h4': {
                            color: theme('colors.gray.100'),
                            'scroll-margin-top': spacing[32]
                        }
                    }
                }
            })
        }
    },
    variants: {
        typography: ['dark']
    },
    plugins: [require('@tailwindcss/typography')],
}
