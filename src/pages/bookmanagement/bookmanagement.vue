<template>
	<div class="bookmanagement">
		<div class="title">
			<span id="box"></span>
			<span>订单列表</span>
			<span class="img">刷新</span>
		</div>
		<div class="content">
			<div class="top">
				<span>全部订单(1000)</span>
				<span>待付款<span>(1000)</span></span>
				<span>待发货<span>(1000)</span></span>
				<span>已发货<span>(1000)</span></span>
				<span>已完成<span>(1000)</span></span>
				<span>已关闭<span>(1000)</span></span>
			</div>
			<div class="center">
				<ul>
					<li style="overflow: hidden;">
						<div class="left">
							<i class="el-icon-search"></i>
							<span> 筛选查询</span>
						</div>
					</li>
					<li>
						<div>
							<span>输入搜索:</span>
							<input type="text" name="" id="" value="" placeholder="订单编号/商品货号" />
						</div>
						<div>
							<span>商品分类:</span>
							<input type="text" name="" id="" value="" placeholder="收货人姓名/手机号码" />
						</div>
						<div class="block" >
						    <span class="demonstration">带快捷选项</span>
						    <el-date-picker
						      v-model="value2"
						      type="datetime"
						      placeholder="选择日期时间"
						      align="right"
						      :picker-options="pickerOptions1" style="width: 150px; height: 50px;">
						    </el-date-picker>
						  </div>
						<div  style="height: 40px;float: right;">
							<div>
							<input id="text_hover" type="text" name="" value="" placeholder="查询结果" style="width: 80px;" />
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
						 <el-button>导出订单</el-button>
						 <!--<el-button>修改商品详情</el-button>-->
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
							<template>
							  <el-select v-model="value4" clearable placeholder="排序方式">
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
					<el-table-column prop="number" label="订单编号" >
					</el-table-column>
					<el-table-column prop="submitTime" label="提交时间">
					</el-table-column>
					<el-table-column prop="username" label="用户账号">
					</el-table-column>
					<el-table-column prop="orderAmount" label="订单金额">
					</el-table-column>
					<el-table-column prop="payWay" label="支付方式" >
					</el-table-column>
					<el-table-column prop="orderSource" label="订单来源" >
					</el-table-column>
					<el-table-column prop="orderStatus" label="订单状态" width="200">
					</el-table-column>
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
							  <el-select v-model="value4" clearable placeholder="关闭订单"  id="muneimg" >
							    <el-option
							      v-for="item in options"
							      :key="item.value"
							      :label="item.label"
							      :value="item.value">
							    </el-option>
							   
							  </el-select>
						</template>
						 <!--<div class="meuelu"><img src="../../assets/menu.png"/</div>-->
					    <el-button>删除订单</el-button>		
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
				 pickerOptions1: {
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        value1: '',
        value2: '',
        value3: '',
        
				 input10: '',
				currentPage1: 5,
		        currentPage2: 5,
		        currentPage3: 5,
		        currentPage4: 4,
				tableData: [{
					number: '201707196398345',
					goodsname: "Victoria's Secret",
					operation: "查看订单    关闭订单",
					submitTime:"2017-07-19 14:48:38",
					username:"18000000000",
					orderAmount:"¥200.00",
					payWay:"微信",
					orderSource:"小程序订单",
					orderStatus:"待付款"

				}, {
					number: '201707196398345',
					goodsname: "Victoria's Secret",
					operation: "查看订单    关闭订单",
					submitTime:"2017-07-19 14:48:38",
					username:"18000000000",
					orderAmount:"¥200.00",
					payWay:"微信",
					orderSource:"小程序订单",
					orderStatus:"待付款"
				}, {
					number: '201707196398345',
					goodsname: "Victoria's Secret",
					operation: "查看订单    关闭订单",
					submitTime:"2017-07-19 14:48:38",
					username:"18000000000",
					orderAmount:"¥200.00",
					payWay:"微信",
					orderSource:"小程序订单",
					orderStatus:"待付款"
				}, {
					number: '201707196398345',
					goodsname: "Victoria's Secret",
					operation: "查看订单    关闭订单",
					submitTime:"2017-07-19 14:48:38",
					username:"18000000000",
					orderAmount:"¥200.00",
					payWay:"微信",
					orderSource:"小程序订单",
					orderStatus:"待付款"
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
	@import "bookmanagement.scss"
	/*@import "../css/icomoon.wxss"*/
</style>
<style>
	 .el-button{
	 	 width: 123px;
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
	.el-button {
   
     border-radius: 0px; 
     }
     .el-input {
    /* position: relative; */
    /* font-size: 14px; */
    /* display: inline-block; */
    /* width: 100%; */
       /*display: initial;*/
}
   .el-table {
    font-size: 12px;
} 
.item {
  margin-top: 10px;
  margin-right: 40px;
}
.el-input__inner {
    height: 32px;
}
</style>