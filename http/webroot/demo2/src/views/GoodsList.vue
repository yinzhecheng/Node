<template>
	<div>
		这是商品列表页面
		<span>{{$route.params.goodsId}}</span><br />
		<span>{{$route.params.name}}</span>
		<router-link to="title">显示商品标题</router-link>
		<router-link to="image">显示商品图片</router-link>
		<div>
			<router-view></router-view>
		</div>
		<!--<router-link to="/cart">跳转到购物车页面</router-link>-->
		<router-link v-bind:to="{name:'cart',params:{cartId:123}}">跳转到购物车页面</router-link><!--命名路由-->
		<button @click="jump">button跳转到购物车</button>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				msg:'hello world!'
			}
		},
		methods:{
			jump(){//编程式路由
//				this.$router.push('/cart')
//				this.$router.push({path:'/cart?goodsId=123'});
				this.$router.go(-2);
			}
		}
	}
</script>

<style>
</style>