/*
 * @Description:
 * @Author: Jamboy
 * @Date: 2021-09-01 13:47:14
 * @LastEditTime: 2021-09-01 13:48:49
 */

function install(Vue, options = {}) {
  Vue.directive(options.name || '', {
    inserted(el, binding) {
      if (!check(binding.value)) {
        el.parentNode && el.parentNode.removeChild(el)
      }
    },
  })
}

export default { install }
