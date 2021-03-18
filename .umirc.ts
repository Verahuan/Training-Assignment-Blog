import { defineConfig } from 'umi';

// 配置文件，包含 umi 内置功能和插件的配置
export default defineConfig({
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/puzzlecards', component: '@/pages/components/puzzlecards.tsx' },
    { path: '/new', component: '@/pages/newFeatures' },
    {path:"/test",component:"@/pages/hooksTest"},
    {path:"/login",component:'@/components/login'},
    {path:"/signIn",component:'@/components/login/SignIn'},
    {path:"/content",component:'@/components/articleContent'}
  ],
  antd: {},
  mock: false,
  cssModulesTypescriptLoader: {},
  proxy: {
    '/api': {
      target: 'http://public-api-v1.aspirantzhang.com',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
  chainWebpack(config){
    config.module // 配置 file-loader
      .rule('woff')
      .test(/.(woff|eot|woff2|ttf)$/)
      .use('file-loader')
      .loader('file-loader');
  }
});
