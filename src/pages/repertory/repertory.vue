<template>
	<div class="repertory">
		<div class="list">
			<ul>
				<li class="first">
					<a href="#">库存记录</a>
				</li>
				<li  >
					<router-link tag='a' to='/repertorywarehousing' >商品入库</router-link>
				</li>
				<li>
					<router-link tag='a' to='/repertoryout' >商品出库</router-link>
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
	@import "repertory.scss"
</style>