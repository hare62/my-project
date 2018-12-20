
<template>
	<div class="StatisticalAnalysis">
		
		<div class="title">
		    <span id="box"></span>
			<span>搜索统计</span>
			<span class="img">刷新</span>
		</div>
		
		<div class="content">
			<div class="outInfo">
				<div class="outInfotitle">
                                 关键词排行          
    
                      <button >导出数据</button>
				</div>
				
				<div class="outInfobottom">
					<!--<ul>
	        	
	        	<li >
	        		<span>服务器操作系统:</span>
	        		<span>Linux (114.55.34.251)</span>
	        		<span>Web 服务器:</span>
	        		<span>nginx/1.10.2</span>
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
	        	
	        </ul>	
	        -->
	        <template>
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="goodsname"
      label="商品名称"
      width="180">
    </el-table-column>
    <el-table-column
      prop="search"
      label="总搜索"
      width="180">
    </el-table-column>
    <el-table-column
      prop="month"
      label="本月">
    </el-table-column>
    <el-table-column
      prop="week"
      label="本周"
      width="180">
    </el-table-column>
    <el-table-column
      prop="today"
      label="今日"
      width="180">
    </el-table-column>
    <el-table-column
      prop="operation"
      label="操作"
      width="180">
    </el-table-column>
  </el-table>
</template>

	        
	        <div class="block" style="display: flex;justify-content: flex-end;">
   <!-- <span class="demonstration">完整功能</span>-->
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
					
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },
    data() {
      return {
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4,
        tableData: [{
          goodsname: '内衣',
          search: '1000',
          month: '100',
          week:'10%',
          today:'100',
          operation:'查看'
          
        }, {
          goodsname: '内衣',
          search: '1000',
          month: '100',
          week:'10%',
          today:'100',
          operation:'查看'
        }, {
          goodsname: '内衣',
          search: '1000',
          month: '100',
          week:'10%',
          today:'100',
          operation:'查看'
        }, {
          goodsname: '内衣',
          search: '1000',
          month: '100',
          week:'10%',
          today:'100',
          operation:'查看'
        }]
      };
    }
  }
</script>

<style scoped="scoped" lang="scss">
	@import "StatisticalAnalysis.scss";
</style>
<style type="text/css">
	.block{
                       display: flex;
                       justify-content: flex-end;
                   }
                   
.el-button {
   
}
</style>