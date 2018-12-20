<template>
	<div class="goods">
		<div class="list">
			<ul>
				<li class="first" >
					
					<router-link tag='a' to='/goodsmanagement' >商品管理</router-link>
				</li>
				<li class="first" >
					<router-link tag='a' to='/goodslist' >商品列表</router-link>
				</li>
				<li>
					<router-link tag='a' to='/addgoods' >添加商品</router-link>
				</li>
				<li>
					<router-link tag='a' to='/goodsrecycling' >商品回收站</router-link>
				</li>
				<li class="first" >
					<router-link tag='a' to='/goodsdiscuss' >商品评价</router-link>
				</li>
				<li>
					<a href="#">商品配置</a>
				</li>
				<li>
					<router-link tag='a' to='/goodsclassify' >商品分类</router-link>
				</li>
				<li>
					<router-link tag='a' to='/goodstypeofmerchandise' > 商品类型</router-link>
				</li>
				<li>
					<router-link tag='a' to='/goodsbrandmanagement' >品牌管理</router-link>
				</li>
				<li>
					<router-link tag='a' to='/systemInfo' >图片库管理</router-link>
				</li>
			</ul>
		</div>
		<div style="height: 100%; width: 90%;float: left; display: inline;background: #F9F9F9;">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	export default{
//		export default 
	}
</script>

<style scoped="scoped" lang="scss">
	@import "goods.scss"
</style>