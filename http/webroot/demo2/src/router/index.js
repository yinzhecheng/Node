import Vue from 'vue'
import Router from 'vue-router'
import GoodsList from '@/views/GoodsList'
import title from '@/views/title'
import image from '@/views/image'
import cart from '@/views/cart'

Vue.use(Router)

export default new Router({
	mode:'history',
  routes: [
//  {动态路由
//    path: '/goods/:goodsId/user/:name',
//    name: 'GoodsList',
//    component: GoodsList
//  }
    {//动态路由
      path: '/',
      name: 'GoodsList',
      components:{
      	default:GoodsList,
      	title:title,
      	img:image
      }
    },
		{//嵌套路由
      path: '/goods',
      name: 'GoodsList',
      component: GoodsList,
      children:[
      	{
      		path:'title',
      		name:'title',
      		component:title
      	},
      	{
      		path:'image',
      		name:'image',
      		component:image
      	}
      ]
    },
    {
    	path:'/cart/:cartId',
    	name:'cart',
    	component:cart
    }
  ]
})
