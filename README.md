

一、在项目的封装组件 如下
//components/Icon-svg

<template>
	
  <svg class="svg-icon" aria-hidden="true">
	
    <use :xlink:href="iconName"></use>
		
  </svg>
	
</template>

<script>
	
export default {

  name: 'icon-svg',
	
  props: {
	
    iconClass: {
		
      type: String,
			
      required: true
    }
  },
  computed: {
    iconName() {
      return `#icon-${this.iconClass}`
    }
  }
}
</script>

<style>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>


二、使用组件全局注册也可。

main.js
//引入svg组件
import IconSvg from '@/components/IconSvg'

//全局注册icon-svg
Vue.component('icon-svg', IconSvg)

//在代码中使用
<icon-svg icon-class="password" />



三、在目录下创建 icons文件夹  存放svg 

四、安装svg-sprite-loader 插件 和配置

// vue.config.js
const path = require('path')
module.exports = {
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')
    // 清除已有的所有 loader。
    // 如果你不这样做，接下来的 loader 会附加在该规则现有的 loader 之后。
    svgRule.uses.clear()
    svgRule
      .test(/\.svg$/)
      .include.add(path.resolve(__dirname, './src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
    const fileRule = config.module.rule('file')
    fileRule.uses.clear()
    fileRule
      .test(/\.svg$/)
      .exclude.add(path.resolve(__dirname, './src/icons'))
      .end()
      .use('file-loader')
      .loader('file-loader')
  }
}


五 使用 

<template>
  <div id="app">
    <svg-icon iconClass="me"></svg-icon>
  </div>
</template>

<script>
import '@/icons/svg/me.svg'
export default {
  
}
</script>



六  记住 记住 记住   修改不了 svg的颜色  
记得 把svg 文件下的 fill 去掉即可







# svg-demo

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
