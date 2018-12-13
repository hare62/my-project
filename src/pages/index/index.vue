<template>
	<div id="index">
		<div class="nav">
			<ul class="ul">
				<li class="first">首页</li>
				<li ><a @click="click">商品</a></li>
				<li><a>订单</a></li>
				<li><a>库存</a></li>
				<li><a>用户</a></li>
				<li><a>促销</a></li>
				<li><a>运营</a></li>
				<li><a>内容</a></li>
				<li><a>统计</a></li>
				<li><a>财务</a></li>
				<li><a>设置</a></li>
				<li><a>权限</a></li>
			</ul>
		    
		</div>
		<div style="height: 100%;width: 100%;">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	export default{
		name:'index',
		data(){
			return{
				
			}
		},
		methods:{
			jump(){
				this.$router.push('/')
			},
			jump1(){
				this.$router.push('/echart')
			},
			jump2(){
				this.$router.push('/tabel')
			},
			click(){
				this.$router.push('/list')
			}
			
		}
	}
</script>

<style scoped="scoped" lang="scss">
        $h:0.0625em;
       	#index{
       		height: 100%;
       		.nav{
       		height: $h*50;
       		width: 100%;
       		background-color: #5bc0bf;
       		padding-left: 5%;
	       		ul{ 
	       			
	       			li{
	       				text-align: center;
	       			display: inline-block;
	       			list-style: none;
	       			height: 50px;
	       			line-height: 50px;
	       			width: 60px;
	       			    a{
	       			    	display: block;
	       			    	height: 100%;
	       			    	width: 100%;
	       			    }
	       			    a:hover{
	       			    	color: blanchedalmond;
	       			    	cursor: pointer;
	       			    }
	       		    }
	       		.first{
	       			width: 10%;
	       		}
	       	   
       		   
       		}
       		
       	}
       	
       	}
</style>