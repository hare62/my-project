<template>
	<div id="list">
		<div class="list">
			<ul>
				<li class="first" >
					<router-link tag='a' to='/sublist' >系统首页</router-link>
				</li>
				<li>
					<a href="">账户设置</a>
				</li>
				<li>
					<router-link tag='a' to='/tabel' >系统信息</router-link>
				</li>
				<li>
					<a href="">登陆日志</a>
				</li>
			</ul>
			
		</div>
		
		<div style="height: 100%;">
			<router-view></router-view>
		</div>
		
		<!--<div class="sublist" style="height: 100%;">
			<div class="title">
				<span id="box">
			   	  .
			   </span>
				<span>系统首页</span>
			</div>
			<div class="main">
				<div class="detail">
					<div class="de-list">
						<div class="primary">
							<img src="../../assets/todaybooknums.png" />
						</div>
						<div class="secondary">
							<span>今日订单总数</span>
							<span class="color"> 200.00</span>
						</div>
					</div>
					<div class="de-list">
						<div class="primary">
							<img src="../../assets/saleAllnumbers.png" />
						</div>
						<div class="secondary">
							<span>今日订单总数</span>
							<span class="color"> 200.00</span>
						</div>
					</div>
					<div class="de-list">
						<div class="primary">
							<img src="../../assets/yesterdaysalenums.png" />
						</div>
						<div class="secondary">
							<span>今日订单总数</span>
							<span class="color"> 200.00</span>
						</div>
					</div>
					<div class="de-list">
						<div class="primary">
							<img src="../../assets/weekssalenums.png" />
						</div>
						<div class="secondary">
							<span>今日订单总数</span>
							<span class="color"> 200.00</span>
						</div>
					</div>
				</div>
			</div>
			<div class="table">
				<ul>
					<li class="first">
						<div>待处理事物</div>
					</li>
					<li>
						<span>
	         		    <div class="primary">付款订单</div>
	         		    <div class="decondary">(10)</div>
	         		</span>
						<span>
	         		    <div class="primary">已完成订单</div>
	         		    <div class="decondary">(10)</div>
	         		</span>
						<span>
	         			<div class="primary">待确认退货订单</div>
	         		    <div class="decondary">(10)</div>
	         		</span>
					</li>
					<li>
						<span>
	         		    <div class="primary">付款订单</div>
	         		    <div class="decondary">(10)</div>
	         		</span>
						<span>
	         		    <div class="primary">已完成订单</div>
	         		    <div class="decondary">(10)</div>
	         		</span>
						<span>
	         			<div class="primary">待确认退货订单</div>
	         		    <div class="decondary">(10)</div>
	         		</span>
					</li>
					<li>
						<span>
	         		    <div class="primary">付款订单</div>
	         		    <div class="decondary">(10)</div>
	         		</span>
						<span>
	         		    <div class="primary">已完成订单</div>
	         		    <div class="decondary">(10)</div>
	         		</span>
						<span>
	         			<div class="primary">待确认退货订单</div>
	         		    <div class="decondary">(10)</div>
	         		</span>
					</li>
				</ul>

			</div>
			<div class="operational_entrance">
				<ul>
					<li class="first">
						<div>待处理事物</div>
					</li>
					<li>
						<span>
							<img src="../../assets/login1.png"/>
	         	 	        <span>添加商品</span>
						</span>
						<span>
							<img src="../../assets/advertisementmanage.png"/>
	         	 	        <span>添加商品</span>
						</span>
						<span>
							<img src="../../assets/booklist.png"/>
	         	 	        <span>添加商品</span>
						</span>
						<span>
							<img src="../../assets/dealmanage.png"/>
	         	 	        <span>添加商品</span>
						</span>
						<span>
							<img src="../../assets/indexrecomend.png"/>
	         	 	        <span>添加商品</span>
						</span>
						<span>
							<img src="../../assets/killmanage.png"/>
	         	 	        <span>添加商品</span>
						</span>
						<span>
							<img src="../../assets/messagesale.png"/>
	         	        	<span>添加商品</span>
						</span>
						<span>
							<img src="../../assets/titlemanage.png"/>
	         	 	        <span>添加商品</span>
						</span>
						<span>
							<img src="../../assets/titlemanage.png"/>
	         	 	        <span>添加商品</span>
						</span>

					</li>
				</ul>

			</div>

		</div>-->
		
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
	/*#list{
  	width: 100%;
  	margin: 0 5%;
  	.list{
  		  display: inline-block;
  	       width: 10%;
  	   ul{
  	   	display: inline-block;
  	   	background: #EFEFEF;
  	   	width: 100%;
	    display: flex;
	    flex-direction: column;
  	   	li{
  	   		list-style: none;
		    height: 35px;
		    line-height: 35px;
		    text-align: center;
		    a{
		    	list-style: none;
                color: #5D5D5D;
		    }
  	   	}
  	   	.first{
  	   		height: 40px;
  	   		background: #ccc;
  	   	}
  	   }
  	   
  }
  .sublist{
  	   	display: inline-block;
  	   	margin: 0;
  	   	padding: 0;
  	   	.title{
  	   		height: 40px;
  	   		width: 100%;
  	   		line-height: 40px;
  	   		margin-left: 30px;
  	   	}
  	   	.main{
  	   		width: 100%;
  	   	}
  	   }
  }*/
</style>
<!--<style scoped="scoped" lang="scss">
@import "list.scss"
</style>-->