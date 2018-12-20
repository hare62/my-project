
<template>
	<div class="Satistics">
		<div class="list">
			<ul>
				<li class="first" >
					<router-link tag='a' to='#' >统计分析</router-link>
				</li>
				<li>
					<router-link tag='a' to='#' >交易统计</router-link>
				</li>
				<li>
					<router-link tag='a' to='#' >商品统计</router-link>
				</li>
				<li>
					<router-link tag='a' to='/StatisticalAnalysis' >搜索统计</router-link>
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
	@import "Satistics.scss"
</style>