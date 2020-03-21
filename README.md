

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

