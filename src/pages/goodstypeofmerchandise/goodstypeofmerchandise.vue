<template>
	<div class="goodstypeofmerchandise">
		<div class="title">
			<span id="box"></span>
			<span>商品类型</span>
			<span class="img">刷新</span>
		</div>
		<div class="content">
			
			
			<div class="bottom">
				<div class="title">
					<div class="left">
						<i class="el-icon-tickets"></i>
						<span>数据列表</span>
						
					</div>
					<div class="right">
						   <el-button>添加</el-button>
					</div>
					
				</div>
				<el-table :data="tableData" border style="width: 100%">
					<!--<el-table-column type="selection" width="50">
					</el-table-column>
					-->
					<el-table-column prop="number" label="编号" >
					</el-table-column>
					<el-table-column prop="username" label="分类名称" >
					</el-table-column>
					<!--<el-table-column prop="address" label="商品图片">
					</el-table-column>-->
					<el-table-column prop="attributequantity" label="属性数量">
					</el-table-column>
					<el-table-column prop="numberofarguments" label="参数数量">
					</el-table-column>
					<el-table-column prop="seting" label="设置" >
					</el-table-column>
					<!--<el-table-column prop="navbar" label="导航栏" >
					</el-table-column>
					<el-table-column prop="sku" label="是否显示" >
					</el-table-column>
					<el-table-column prop="sort" label="排序" >
					</el-table-column>
					<el-table-column prop="set" label="设置"width="200" >
					</el-table-column>-->
					<el-table-column prop="operation" label="操作">
					</el-table-column>
				</el-table>
			</div>
		
		    <!--分页开始-->
		    <div class="block">
				    <!--<span class="demonstration">完整功能</span>-->
				    <el-pagination
				      @size-change="handleSizeChange"
				      @current-change="handleCurrentChange"
				      :current-page="currentPage4"
				      :page-sizes="[10, 20, 30, 40]"
				      :page-size="10"
				      layout="total, sizes, prev, pager, next, jumper"
				      :total="100">
    </el-pagination>
  </div>
		    <!--分页结束-->
		    
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
					number: '1000001',
					username: "服装",
					attributequantity:"100",
					numberofarguments:"10",
					set:"新增下级    查看下级    转移商品",
					operation:"编辑    删除",
					seting:"属性列表    参数列表",

				}, {
					number: '1000001',
					username: "服装",
					attributequantity:"100",
					numberofarguments:"10",
					set:"新增下级    查看下级    转移商品",
					operation:"编辑    删除",
					seting:"属性列表    参数列表",
				}, {
					number: '1000001',
					username: "服装",
					attributequantity:"100",
					numberofarguments:"10",
					set:"新增下级    查看下级    转移商品",
					operation:"编辑    删除",
					seting:"属性列表    参数列表",
				}, {
					number: '1000001',
					username: "服装",
					attributequantity:"100",
					numberofarguments:"10",
					set:"新增下级    查看下级    转移商品",
					operation:"编辑    删除",
					seting:"属性列表    参数列表",
				}],
				 options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value4: '',
			}
		}
		
	}
</script>

<style scoped="scoped" lang="scss">
	@import "goodstypeofmerchandise.scss"
	/*@import "../css/icomoon.wxss"*/
</style>
<style>
	 .el-button{
	 	 width: 96px;
	 }  
	 /*.el-input{
	 	width: 45%;
	 }   */
	 .el-select{
	 	width: 105x;
	 	height: 30px;
	 } 
	 .el-input__inner{
	 	height: 28px;
	 }
	 .el-button{
	 	 line-height: 0.3;
	 	 font-size: 12px;
    color: #999;
	 }
	 .el-table thead {
    color: #000;
    font-weight: 500;
    
}
/*分页样式*/
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
.el-pagination button {
    border: 1px solid #ccc;
    padding: 0 6px;
    background: 0 0;
    margin-right: 5px !important;
}
	
</style>