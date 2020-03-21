import Vue from 'vue'
import SvgIcon from '@/components/IconSvg' // svg组件

// register globally
Vue.component('icon-svg', SvgIcon)

// const requireAll = requireContext => requireContext.keys().map(requireContext)
// const req = require.context('@/icons/svg', false, /\.svg$/)
// requireAll(req)

const SVG = {
  requireAll: function (requireContext) {
    requireContext.keys().map(requireContext)
  },
  url: '@/icons/svg'
}

SVG.requireAll(require.context('@/icons/svg', true, /\.svg$/))

// export default requireAll
