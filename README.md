# svg-demo


## Project depend

npm install

### Compiles and hot-reloads for development

npm run serve


##  使用 

    * npm i vue-svg-nanfeng

    * 在src目录下 创建icons/svg  把svg放在icons/svg即可

    * 在main.js import 'vue-svg-nanfeng' 即可

    * example 

    **<icon-svg :icon-class="logo" class="red" />

    * icon-class 对应svg图片的name即可



## webpack require 上下文的路径必须为字符串

    * require.context('@/icons/svg', true, /\.svg$/) 

    * '@/icons/svg' 为变量解析不了

    * require.context  返回一个带参数的require函数

    * 其有3个属性

    * resolve 是一个函数，返回已解析请求的模块ID
    
    * keys 是一个函数，它返回上下文模块可以处理的所有可能请求的数组。

    SVG.requireAll(require.context('@/icons/svg', true, /\.svg$/))


##  自定义svg颜色

    * 把svg的fill属性 设置为 空 ''

