import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'react-echarts',
  favicon:
    'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/zh/images/favicon.png',
  logo: 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/zh/images/favicon.png',
  outputPath: 'docs-dist',
  mode: 'site',
  base: '/react-echarts',
  publicPath: '/react-echarts/',
  navs: [
    null,
    {
      title: 'GitHub',
      path: 'https://github.com/twp0217/react-echarts',
    },
  ],
  // more config: https://d.umijs.org/config
});
