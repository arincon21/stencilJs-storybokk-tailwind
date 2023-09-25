import type { StorybookConfig } from '@storybook/html-webpack5';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-notes/register-pane', '@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions','@storybook/addon-notes/register', '@storybook/addon-knobs'],
  framework: {
    name: '@storybook/html-webpack5',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
};
export default config;
