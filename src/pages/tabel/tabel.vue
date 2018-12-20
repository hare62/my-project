<template>
	<div id="table">
		<div class="title">
			<span  id="box"></span> 
			<span>登陆日志tabel</span>
		</div>
		<div class="content">
	        <ul>
	        	<li class="content_title">
	        		数据列表
	        	</li>
	        	<li >
	        		<span>时间</span>
	        		<span>IP</span>
	        		<span>地区</span>
	        		<span>浏览器</span>
	        	</li>
	        	<li>
	        		<span>2017-12-16</span>
	        		<span>255.255.255.2</span>
	        		<span>广东省深圳市</span>
	        		<span>frefox 45</span>
	        	</li>
	        	<li>
	        		<span>1</span>
	        		<span>2</span>
	        		<span>3</span>
	        		<span>5</span>
	        	</li>
	        	<li>
	        		<span>1</span>
	        		<span>2</span>
	        		<span>3</span>
	        		<span>5</span>
	        	</li>
	        	<li>
	        		<span>1</span>
	        		<span>2</span>
	        		<span>3</span>
	        		<span>5</span>
	        	</li>
	        	<li>
	        		<span>1</span>
	        		<span>2</span>
	        		<span>3</span>
	        		<span>5</span>
	        	</li>
	        	<li>
	        		<span>1</span>
	        		<span>2</span>
	        		<span>3</span>
	        		<span>5</span>
	        	</li>
	        	<li>
	        		<span>1</span>
	        		<span>2</span>
	        		<span>3</span>
	        		<span>5</span>
	        	</li>
	        	<li>
	        		<span>1</span>
	        		<span>2</span>
	        		<span>3</span>
	        		<span>5</span>
	        	</li>
	        	<li>
	        		<span>1</span>
	        		<span>2</span>
	        		<span>3</span>
	        		<span>5</span>
	        	</li>
	        	<li>
	        		<span>1</span>
	        		<span>2</span>
	        		<span>3</span>
	        		<span>5</span>
	        	</li>
	        	<li>
	        		<span>1</span>
	        		<span>2</span>
	        		<span>3</span>
	        		<span>5</span>
	        	</li>
	        	<li>
	        		<span>1</span>
	        		<span>2</span>
	        		<span>3</span>
	        		<span>5</span>
	        	</li>
	        	<li>
	        		<span>1</span>
	        		<span>2</span>
	        		<span>3</span>
	        		<span>5</span>
	        	</li>
	        	<li class="content_title1">
	        		<!--日历插件开始-->
	        		<div class="block">
    <span class="demonstration">显示总数</span>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage1"
      :page-size="100"
      layout="total, prev, pager, next"
      :total="1000">
    </el-pagination>
  </div>
  <div class="block">
    <span class="demonstration">调整每页显示条数</span>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage2"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="sizes, prev, pager, next"
      :total="1000">
    </el-pagination>
  </div>
  <div class="block">
    <span class="demonstration">直接前往</span>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage3"
      :page-size="100"
      layout="prev, pager, next, jumper"
      :total="1000">
    </el-pagination>
  </div>
  <div class="block">
    <span class="demonstration">完整功能</span>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination>
  </div>
	        		<!--日历插件结束-->
	        		
	        	</li>
	        </ul>	
	    
	    </div>
 </div>
	    
</template>

<script>
	export default{
		name:'login',
		 data() {
      return {
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4
      };
    },
			   methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
    },
		
	}
</script>

<style scoped="scoped" lang="scss">
 @import "tabel.scss"
</style>