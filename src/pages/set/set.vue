<template>
	<div class="set">
		<div class="list">
			<ul>
				<li class="first" >
					<router-link tag='a' to='#' >基础设置</router-link>
				</li>
				<li>
					<router-link tag='a' to='/setbase' >物流追踪</router-link>
				</li>
				<li>
					<router-link tag='a' to='/setarea' >区域设置</router-link>
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
	@import "set.scss"
</style>