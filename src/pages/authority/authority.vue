<template>
	<div class="authority">
		<div class="list">
			<ul>
				<li class="first" >
					
					<router-link tag='a' to='/goodsmanagement' >权限管理</router-link>
				</li>
				<li class="first" >
					<router-link tag='a' to='/authority_log' >操作日志</router-link>
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
	@import "authority.scss"
</style>