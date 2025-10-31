import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/stories/**/*.{js,ts,jsx,tsx,mdx}', // Incluindo os arquivos do Storybook
    './.storybook/**/*.{js,ts,jsx,tsx,mdx}',  // Incluindo os arquivos de configuração do Storybook
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

export default config