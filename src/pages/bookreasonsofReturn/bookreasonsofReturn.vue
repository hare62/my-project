<template>
	<div class="bookreasonsofReturn">
		<div class="title">
			<span id="box"></span>
			<span>退货原因设置</span>
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
						 <!--<el-button>修改商品详情</el-button>-->
						   
					</div>
				</div>
				<el-table :data="tableData" border style="width: 100%">
					<el-table-column type="selection" width="50">
					</el-table-column>
					<el-table-column prop="reasontype" label="原因类型" >
					</el-table-column>
					<el-table-column prop="sort" label="排序" width="160">
					</el-table-column>
					<el-table-column prop="yesorno" label="是否启用">
					</el-table-column>
					<!--<el-table-column prop="orderAmount" label="退款金额">
					</el-table-column>-->
					<!--<el-table-column prop="contacts" label="联系人" >
					</el-table-column>-->
					<el-table-column prop="addTime" label="添加时间" width="160" >
					</el-table-column>
					<!--<el-table-column prop="applyStatus" label="申请状态" >
					</el-table-column>-->
					<el-table-column prop="operation" label="操作">
					</el-table-column>
				</el-table>
				<div class="title">
					<div class="left">
						<!--<span class="el-checkbox__inner"></span>
						<span>全选</span>-->
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
					reasontype: "质量问题",
					sort:"10",
					addTime:"2017-07-19 14:48:38",
					yesorno:"tupian",
					operation:"编辑    删除"

				}, {
					number: '313860326',
					reasontype: "质量问题",
					sort:"10",
					addTime:"2017-07-19 14:48:38",
					yesorno:"tupian",
					operation:"编辑    删除"
				}, {
					number: '313860326',
					reasontype: "质量问题",
					sort:"10",
					addTime:"2017-07-19 14:48:38",
					yesorno:"tupian",
					operation:"编辑    删除"
				}, {
					number: '313860326',
					reasontype: "质量问题",
					sort:"10",
					addTime:"2017-07-19 14:48:38",
					yesorno:"tupian",
					operation:"编辑    删除"
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
	@import "bookreasonsofReturn.scss"
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
       display: initial;
}
   .el-table {
    font-size: 12px;
} 
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>