<template>
	<div class="user">
		<div class="list">
			<ul>
				<li class="first" >
					<a href="#">用户管理</a>
				</li><li class="first" >
					<router-link tag='a' to='/usermanage' >用户列表</router-link>
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
	@import "user.scss"
</style>