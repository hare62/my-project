<template>
	<div id="login" >
		
		<div class="main">
         <div class="title">后台业务管理系统</div>
         <div class="content">
         	<input placeholder="请输入用户名" type="text" name="name" id="name" value="" />
		 <!-- <button @click="jump">切换到首页 </button>-->
		    <input placeholder="请输入登陆密码"  type="password" name="password" id="password" value="" />
            <button class="logo" @click="jump">登录</button>
         </div>
         
		</div>
		<div class="bottom">Copyright @ 2018-2019 零售后台</div>
	</div>
</template>

<script>
	export default{
		name:'login',
		data(){
			return{
				
			}
		},
		methods:{
			jump(){
				this.$router.push('/index')
			}
		}
	}
</script>

<style scoped="scoped" lang="scss">
	$width: 0.0625em;
     #login{
     	position: relative;
     	width: 100%;
     	height: 100%;
     	background: url(../../assets/login.png) no-repeat 100% 100%;
     	background-size: cover;
     	.main{
     		position: relative;
     		width: 350px;
     		position: absolute;
     		top: 50%;
     		left: 50%;
     		text-align: center;
     		-webkit-transform: translate(-50%, -50%);
            -moz-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
            .title{
            	font-size: $width*18;
            	color: white;
            	font-weight: bold;
            	margin-bottom: $width*72;
            }
            .content{
            	width: 100%;
            	height: 290px;
            	#name,#password{
            		text-align: center;
            		width: 100%;
            		height: 60px;
            		margin-bottom: $width*30;
            		border-radius: 10px;
            	}
            	#name::-webkit-input-placeholder,#password::-webkit-input-placeholder{
            		color: #c9c9c9;
            		text-align: center;
            		font-size: $width*20;
            	}
            	#password{
            		margin-bottom: 80px;
            	}
            	.logo{
            		width: 100%;
            		height: 60px;
            		background-color: #3cbbba;
            		border: none;
            		border-radius: 10px;
            		font-size: 20px;
            		color: white;
            	}
            	
            	
            }
            
     	}
     	.bottom{
     		    color: white;
     		    text-align: center;
            	width: 350px;
            	height: 30px;
            	line-height: 30px;
            	position: absolute;
            	bottom: 10px;
            	left: 50%;
            	margin-left: -175px;
            }
     } 
     
</style>