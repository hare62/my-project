<template>
	<div class="bookOrderSetting">
		
		<div class="title">
			订单设置
		</div>
		<div class="content">
			<div class="outInfo">
				<div class="outInfotitle">订单设置</div>
				<div class="outInfobottom">
					  <div class="main">
					  	<!--<div class="img">
					  		 <img src="../../assets/user.png"/>
					  		 <div style="color: #64D4EC;">上传图像</div>
					  	</div>-->
					  <div style="margin-left: 43px;" >
					  	<span  style="color: red;">*</span>
					  	<span> 正常订单超过：</span>
					  	<span style="position: relative;">
					  		<input placeholder="60" />
					  	    <span class="block_span">天</span>
					  	</span>
					  	<span>未付款，订单自动关闭</span>
					  </div>
					  <div style="margin-left: 67px;">
					  	<span  style="color: red;">*</span>
					  	<span> 发货超过：</span>
					  	<span style="position: relative;">
					  		<input placeholder="15" />
					  	    <span class="block_span">天</span>
					  	</span>
					  	<span>未收货，订单自动完成</span>
					  </div>
					  <div style="margin-left: 81px;">
					  	<span  style="color: red;">*</span>
					  	<span> 订单完成超过：</span>
					  	<span style="position: relative;">
					  		<input placeholder="7" />
					  	    <span class="block_span">天</span>
					  	</span>
					  	<span>自动结束交易，不能申请售后</span>
					  </div>
					  	<div>
					    <span  style="color: red;">*</span>
					  	<span> 订单完成超过：</span>
					  	<span style="position: relative;">
					  		<input placeholder="7" />
					  	    <span class="block_span">天</span>
					  	</span>
					  	<span>自动五星好评</span>
					  </div>
					  <button>提交</button>
					  </div>
					  
				</div>
			</div>
		</div>
	</div>
</template>

<script>
</script>
   export default{
   }
<style scoped="scoped" lang="scss">
	@import "bookOrderSetting.scss";
</style>