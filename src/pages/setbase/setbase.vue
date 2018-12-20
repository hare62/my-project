<template>
	<div class="setbase">
		<div class="title">
			<span id="box"></span>
			<span>物流追踪</span>
			<span class="img">刷新</span>
		</div>
		<div class="content">
			<!--<div class="top">
				<span>全部商品(1000)</span>
				<span>待处理<span>(1000)</span></span>
				<span>退货中<span>(1000)</span></span>
				<span>已完成<span>(1000)</span></span>
			</div>-->
			<div class="center">
				<ul>
					<li style="overflow: hidden;">
						<div class="left">
							<i class="el-icon-search"></i>
							<span> 筛选查询</span>
						</div>
						<!--<div class="right">
							<i class="el-icon-arrow-up"></i>
							<span>收起筛选</span>
							<el-button size="small">小型按钮</el-button>
							<el-button size="small">小型按钮</el-button>
						</div>-->
					</li>
					<li>
						<div>
							<div>
							<span>活动名称:</span>
							<input type="text" name="" id="" value="" placeholder="活动名称" />
							<!--<el-input placeholder="请输入内容" v-model="input10"clearable></el-input>-->
						</div>
						<div>
							<span>订单号:</span>
							<input type="text" name="" id="" value="" placeholder="请选择时间" />
                            <!--<el-input placeholder="请输入内容" v-model="input10"clearable></el-input>-->
						</div>
						</div>
						<!--<div class="goodsbrand">
							<span>处理状态:</span>
							<span class="block">
								<input type="text" name="" id="" value="" placeholder="全部" />
                                <i class="el-icon-date"></i>
							</span>
							
						</div>-->
						<!--<div>
							<span>输入搜索:</span>
							<input type="text" name="" id="" value="" placeholder="商品名称/商品出货" />
						</div>-->
						<div>
							<div style="height: 40px;float: right;">
							<el-button>查询结果</el-button>
						</div>
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
						 <!--<el-button>修改商品详情</el-button>-->
	 	
						   <template>
							  <el-select v-model="value4" clearable placeholder="显示条数" style="width: 105px;height: 30px;">
							    <el-option
							      v-for="item in options"
							      :key="item.value"
							      :label="item.label"
							      :value="item.value">
							    </el-option>
							  </el-select>
							</template>
							<template>
							  <el-select v-model="value4" clearable placeholder="排序方式" style="width: 105px;height: 30px;">
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
					<el-table-column prop="number" label="订单号" >
					</el-table-column>
					<el-table-column prop="username" label="公司名称" width="160">
					</el-table-column>
					<el-table-column prop="postnumber" label="快递单号">
					</el-table-column>
					<el-table-column prop="addtime" label="添加时间">
					</el-table-column>
					<!--<el-table-column prop="contacts" label="联系人" >
					</el-table-column>-->
					<!--<el-table-column prop="dealTime" label="处理时间" width="160" >
					</el-table-column>
					<el-table-column prop="applyStatus" label="申请状态" >
					</el-table-column>-->
					<el-table-column prop="operation" label="操作">
					</el-table-column>
				</el-table>
				<div class="title">
					<div class="left">
						<span class="el-checkbox__inner"></span>
						<span>全选</span>
						<!--<el-badge value="new" class="item">
							  <el-button size="small">评论</el-button>
							</el-badge>-->
						<template>
							  <el-select v-model="value4" clearable placeholder="批量操作"  style="background: url(../../assets/top.png) no-repeat 100% 100%;" >
							    <el-option
							      v-for="item in options"
							      :key="item.value"
							      :label="item.label"
							      :value="item.value">
							    </el-option>
							   
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
				 input10: '',
				currentPage1: 5,
		        currentPage2: 5,
		        currentPage3: 5,
		        currentPage4: 4,
				tableData: [{
					number: '313860326',
					operation: "编辑        删除",
					postnumber:"1111111111111111",
					username:"18000000000",
					addtime:"2017-07-19 14:48:38"

				}, {
					number: '313860326',
					operation: "编辑        删除",
					postnumber:"1111111111111111",
					username:"18000000000",
					addtime:"2017-07-19 14:48:38"
				}, {
					number: '313860326',
					operation: "编辑        删除",
					postnumber:"1111111111111111",
					username:"18000000000",
					addtime:"2017-07-19 14:48:38"
				}, {
					number: '313860326',
					operation: "编辑        删除",
					postnumber:"1111111111111111",
					username:"18000000000",
					addtime:"2017-07-19 14:48:38"
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
	@import "setbase.scss"
	/*@import "../css/icomoon.wxss"*/
</style>
<style>
.el-input__inner{
	 	height: 28px;
	 }
.el-button{
	 	line-height: 0.3;
}
.el-button {
	  border-radius: 0px; 
}
    
.el-table {
    font-size: 12px;
} 
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>