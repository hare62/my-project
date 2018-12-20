<template>
	<div id="index">
		<div class="nav">
			<ul class="ul">
				<li class="first">
				<a @click="click1">	首页</a></li>
				<li>
					<router-link tag='a' to='/goods'>商品</router-link>
				</li>
				<li >
				    <router-link tag='a' to='/book'>订单</router-link>
				</li>
				<li>
					<router-link tag='a' to='/repertory'>库存</router-link>
				</li>
				<li>
					<router-link tag='a' to='/user'>用户</router-link>
				</li>
				<li><a  style="color: red;">促销</a></li>
				
				<li>
					<router-link tag='a' to='/Operate'>运营</router-link>
				</li>
				<li><a>内容</a></li>
				<li>
					<router-link tag='a' to='/Satistics'>运营</router-link>
				</li>
				<!--<li><a>财务</a></li>-->
				<li>
					<router-link tag='a' to='/set'>设置</router-link>
				</li>
				<li>
					<router-link tag='a' to='/authority'>权限</router-link>
				</li>
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
			click1(){
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
       		width: 95%;
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