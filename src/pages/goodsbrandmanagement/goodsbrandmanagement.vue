<template>
	<div class="goodsbrandmanagement">
		<div class="title">
			<span id="box"></span>
			<span>品牌管理</span>
			<span class="img">刷新</span>
		</div>
		<div class="content">
			
			<div class="center">
				<ul>
					<li style="overflow: hidden;">
						<div class="left">
							<i class="el-icon-search"></i>
							<span> 筛选查询</span>
						</div>
						<div class="right">
						</div>
					</li>
					<li>
						<div>
							<span>输入搜索:</span>
							<input type="text" name="" id="" value="" placeholder="品牌名称/关键词" />
						</div>
						<div style="height: 40px;float: right;">
							<el-button>查询结果</el-button>
						</div>
					</li>
				</ul>
			</div>
			<div class="bottom">
				<div class="title">
					<div class="left">
						<i class="el-icon-tickets"></i>
						<span>数据列表</span>
					</div>
					<div class="right">
						 <el-button>添加</el-button>
						   <template>
							  <el-select v-model="value4" clearable placeholder="显示条数">
							    <el-option
							      v-for="item in options"
							      :key="item.value"
							      :label="item.label"
							      :value="item.value">
							    </el-option>
							  </el-select>
							</template>
					</div>
				</div>
				<el-table :data="tableData" border style="width: 100%">
					<el-table-column type="selection" width="50">
					</el-table-column>
					<el-table-column prop="number" label="编号" >
					</el-table-column>
					<!--<el-table-column prop="address" label="商品图片">
					</el-table-column>-->
					<el-table-column prop="goodsname" label="品牌名称">
					</el-table-column>
					<el-table-column prop="goodsnameinitial" label="品牌首字母">
					</el-table-column>
					<el-table-column prop="sort" label="排序" >
					</el-table-column>
					<el-table-column prop="sku" label="是否显示" >
					</el-table-column>
					<el-table-column prop="relation" label="相关" width="200">
					</el-table-column>
					<el-table-column prop="orp" label="操作">
					</el-table-column>
				</el-table>
				<div class="title">
					<div class="left">
						<span class="el-checkbox__inner"></span>
						<span>全选</span>
						<template>
							  <el-select v-model="value4" clearable placeholder="批量操作"  id="muneimg" >
							    <el-option
							      v-for="item in options"
							      :key="item.value"
							      :label="item.label"
							      :value="item.value">
							    </el-option>
							    <!--<div><img src="../../assets/menu.png"/></div>-->
							   
							  </el-select>
						</template>
						 <!--<div class="meuelu"><img src="../../assets/menu.png"/</div>-->
					    <el-button>确定</el-button>		
					</div>
					<div class="right">
						   <!--分页开始-->
		    <div class="block">
				    <!--<span class="demonstration">完整功能</span>-->
				    <el-pagination
				      @size-change="handleSizeChange"
				      @current-change="handleCurrentChange"
				      :current-page="currentPage4"
				      :page-sizes="[100, 200, 300, 400]"
				      :page-size="10"
				      layout="total, sizes, prev, pager, next, jumper"
				      :total="100">
    </el-pagination>
  </div>
		    <!--分页结束-->
		    
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
					number: '1000001',
					goodsname: "Victoria's Secret",
					sku: "图片",
					orp: "编辑    删除",
					goodsnameinitial:"V",
					sort:"100",
					relation:"商品：100"

				}, {
					number: '1000001',
					goodsname: "Victoria's Secret",
					sku: "图片",
					orp: "编辑    删除",
					goodsnameinitial:"V",
					sort:"100",
					relation:"商品：100"
				}, {
					number: '1000001',
					goodsname: "Victoria's Secret",
					sku: "图片",
					orp: "编辑    删除",
					goodsnameinitial:"V",
					sort:"100",
					relation:"商品：100"
				}, {
					number: '1000001',
					goodsname: "Victoria's Secret",
					sku: "图片",
					orp: "编辑    删除",
					goodsnameinitial:"V",
					sort:"100",
					relation:"商品：100"
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
	@import "goodsbrandmanagement.scss"
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
	 	width: 105px;
	 	height: 30px;
	 } 
	 .el-input__inner{
	 	height: 28px;
	 }
	 .el-button{
	 	 line-height: 0.3;
	 }
	
</style>