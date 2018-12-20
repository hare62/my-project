<template>
	<div class="Operate">
		<div class="list">
			<ul>
				<li class="first" >
                        <a href="#" style="list-style: none;">广告管理</a>
				</li>
				<li>
					<router-link tag='a' to='/Operateadslist' >广告列表</router-link>
				</li>
				<li>
					<router-link tag='a' to='/OperateAddads' > 添加广告</router-link>
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
	@import "Operate.scss"
</style>