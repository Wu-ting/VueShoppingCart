import Vue from 'vue'
import Router from 'vue-router'
import cart from '../components/cart/cart.vue'
import address from '../components/address/address.vue'
Vue.use(Router)

export default new Router({
  routes: [
	{
		path:'/cart',
		name: 'cart',
		component:cart
	},
	{
		path: '/address',
		name: 'address',
		component: address
	},
	{
		path: '/',
		component: cart
	}
  ]
})
