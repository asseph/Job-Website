module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "media",
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/forms'),
    require("@tailwindcss/typography")
  ],
  daisyui: {
    styled: true,
    // TODO: Theme needs works
    themes: [
      {
        'solana': {                          /* your theme name */
          fontFamily: {
            custom1: ["Custom-1", "sans-serif"],
          }
          ,
          'primary': '#014952',           /* primary blue green color*/
          'primary-focus': '#e2fe55',     /* lime yellow*/
          'primary-content': '#004852',   /* new primary */

          'secondary': '#b7ec5c',         /* light maroon? */
          'secondary-focus': '#441137',   /* med dark purple */
          'secondary-content': '#FED7E1', /* light pink */

          'accent': '#2f838f',            /* dark blue */
          'accent-focus': '#d4ef55',      /* dark purple */
          'accent-content': '#ffffff',    /* white*/

          'neutral': '#fffefe',           /* bbase white color */
          'neutral-focus': '#f8f9f8',     /* Neutral color - focused */
          'neutral-content': '#FAFAFA',   /* Foreground content color to use on neutral color */

          'base-100': '#f8f9f8',          /* side bar */
          'base-200': '#35363a',          /* Base color, a little darker */
          'base-300': '#222222',          /* Base color, even more darker */
          'base-content': '#f9fafb',      /* Foreground content color to use on base color */

          'info': '#2094f3',              /* Info */
          'success': '#009485',           /* Success */
          'warning': '#ff9900',           /* Warning */
          'error': '#ff5724',             /* Error */
        },
      },
      // backup themes:
      // 'dark',
      // 'synthwave'
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
  },
}