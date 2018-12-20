<template>
	<div id="list">
		<div class="list">
			<ul>
				<li class="first" >
					<router-link tag='a' to='#' >系统首页</router-link>
				</li>
				<li  >
					<router-link tag='a' to='/sublist' >系统首页</router-link>
				</li>
				<li>
					<router-link tag='a' to='/accountSettings' >账户设置</router-link>
				</li>
				<li>
					<router-link tag='a' to='/systemInfo' >系统信息</router-link>
				</li>
				<li>
					<router-link tag='a' to='/tabel' >登陆日志</router-link>
				</li><li>
					list.vue
				</li>
			</ul>
			
		</div>
		<div style="height: 100%; width: 90%;float: left; display: inline;">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'list',
		data() {
			return {

			}
		},
		methods: {


		}
	}
</script>

<style scoped="scoped" lang="scss">
	@import "list.scss"
</style>
