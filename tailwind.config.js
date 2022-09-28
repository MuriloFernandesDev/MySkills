/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/colors/themes')['[data-theme=light]'],
          'base-200': '#F1F1F1',
          'base-100': '#FFFFFF',
          'primary-content': '#000000',
          'base-content': '#0096AA',
        },
        dark: {
          ...require('daisyui/src/colors/themes')['[data-theme=dark]'],
          'base-100': '#2B2525',
          'base-200': '#1B1919',
          'text-base-content': '#AAB5B7',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
}
