<template>
	<div class="book">
		<div class="list">
			<ul>
				<li class="first" >
					<router-link tag='a' to='/bookmanagement' >订单管理</router-link>
				</li>
				<li>
					<router-link tag='a' to='/bookmanagement' >订单列表</router-link>
				</li>
				<li>
					<router-link tag='a' to='/bookconficrmReceipt' >确认收货</router-link>
				</li>
				<li>
					<router-link tag='a' to='/bookOrderSetting' >订单设置</router-link>
				</li>
				<li class="first" >
				    <a href="#" style="list-style: none;">退款及退货</a>
				</li>
				<li>
					<router-link tag='a' to='/bookApplicationProcessingforReturn' >退货申请处理</router-link>
				</li>
				<li>
					<router-link tag='a' to='/bookapplicationfordrawback' >退款申请处理</router-link>
				</li>
				<li>
					<router-link tag='a' to='/bookreasonsofReturn' > 退货原因设置</router-link>
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
	@import "book.scss"
</style>