const prerenderSPAPlugin = require('prerender-spa-plugin');
const Renderer = prerenderSPAPlugin.PuppeteerRenderer;
const path = require('path');
// 判断是否为生产环境/开发环境
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    // 基本路径
    publicPath: './',
    // 静态资源目录(js,css,img,fonts)
    assetsDir: 'assets',

    // vue的配置不能直接外部加 plugins 。只能在下面对象中
    configureWebpack: config => {
        if (isProduction) {
            return {
                plugins: [
                    new prerenderSPAPlugin({
                        //需要输出的绝对路径
                        staticDir: path.join(__dirname, 'dist'),
                        // 需要预渲染的路由 如是是参数路由  /user/param1/param2
                        routes: ['/','/order', '/discover', '/me'],

                        renderer: new Renderer({
                            inject: {
                                foo: 'bar'
                            },
                            headless: false,
                            renderAfterDocumentEvent: 'render-event', // 在 main.js 中 document.dispatchEvent(new Event('render-event'))，两者的事件名称要对应上。
                        })
                    })
                ],
            }
        }
    },

    //开发配置
    devServer: {
        open: true,
        port: 8080,
        https: false,
        hotOnly: false,
        proxy: {
            // 配置跨域
            '/api': {
                target: 'https://ele-interface.herokuapp.com/api/',
                ws: true,
                changOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        },
        before: app => {}
    }
};
