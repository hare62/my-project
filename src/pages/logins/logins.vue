<template>
	<div id="logins">
		你好
		<span id="">
			{{time}}
		</span>
		<input v-model="time" />
		456465
		<!--<button @></button>-->
		<!--<router-link tag='button' to='/index'>首页</router-link>-->
	</div>
</template>
<script >
		export default {
		data(){
			return {
				time:10
			}
		}
}
</script>

<style scoped="scoped" lang="scss">
@import "logins.scss"
</style>
