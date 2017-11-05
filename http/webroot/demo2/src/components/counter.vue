<template>
	<div>
		<button @click="increment">+</button>
		<button @click="decrement">-</button>
		<p>{{num}}</p>
	</div>
</template>

<script>
	export default{
		props:['num'],
		data(){
			return {
				num:0,
//				msg:'hello world!'
			}
		},
		methods:{
			increment(){
				this.$emit('incre')
			},
			decrement(){
				this.$emit('decre')
			}
		}
	}
</script>

<style>
</style>