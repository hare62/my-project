<template>
  <div id="app">
   <!-- <img src="./assets/logo.png">-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
	*{
		margin: 0;
		padding: 0;
		list-style: none;
		text-decoration: none;
		
	}
html,body{
	height: 100%;
  width: 100%;
  
}
#app {
  height: 100%;
  width: 100%;
}
.el-pagination .btn-next, .el-pagination .btn-prev {
    background: center center no-repeat #fff;
    background-size: 16px;
    cursor: pointer;
    margin: 0;
    color: #303133;
    border: 1px solid #ccc;
}
.el-pagination .btn-prev {
    padding-right: 12px;
    margin-right: 5px;
    border: 1px solid #ccc;
}
.el-pager li {
    border: 1px solid #ccc;
    padding: 0 4px;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    text-align: center;
    margin-right: 5px;
}
.el-input__inner {
    border: 1px solid #999;
    height: 30px;
    border-radius: 1px solid #ccc;
    border-radius: 0;
}
#text_hover:hover{
	  background: #F3F3F3;
}
</style>
