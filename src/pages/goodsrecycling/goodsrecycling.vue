<template>
	<div class="goodsrecycling">
		<div class="title">
			<span id="box"></span>
			<span>商品回收站</span>
			<span class="img">刷新</span>
		</div>
		<div class="content">
			
			<div class="center">
				<ul>
					<li style="overflow: hidden;">
						<div class="left">
							<i class="el-icon-search"></i>
							<span>筛选查找</span>
						</div>
						<div class="right">

							<i class="el-icon-arrow-up"></i>
							<span>收起筛选</span>
							<span class="border1">查询结果</span>
							<!--<span class="border2">高级检索</span>-->
						</div>

					</li>
					<li>
						<div>
							<span>输入搜索:</span>
							<input type="text" name="" id="" value="" placeholder="商品名称/商品出货" />

						</div>
						<div>
							<span>商品分类:</span>
							<input type="text" name="" id="" value="" placeholder="商品名称/商品出货" />

						</div>
						<div>
							<span>商品品牌:</span>
							<input type="text" name="" id="" value="" placeholder="商品名称/商品出货" />
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
						 
						   <template>
  <el-select v-model="value4" clearable placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
</template>
<template>
  <el-select v-model="value4" clearable placeholder="请选择">
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
					
					<el-table-column prop="number" label="编号" width="80">
					</el-table-column>
					<el-table-column prop="address" label="商品图片">
					</el-table-column>
					<el-table-column prop="goodsname" label="商品名称">
					</el-table-column>
					<el-table-column prop="goodsclassify" label="商品分类">
					</el-table-column>
					<el-table-column prop="price" label="价格/货号" width="125">
					</el-table-column>
					<el-table-column prop="num" label="货号" width="50">
					</el-table-column>
					<!--<el-table-column prop="sku" label="SKU库存" width="80">
					</el-table-column>
					<el-table-column prop="salenum" label="销量" width="80">
					</el-table-column>
					<el-table-column prop="state" label="状态" width="80">
					</el-table-column>-->
					<el-table-column prop="orp" label="操作">
					</el-table-column>
				</el-table>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				tableData: [{
					date: '2016-05-02',
					number: '1000001',
					address: "",
					goodsname: "银色星芒刺绣网纱底裤\n\n\n品牌：Victoria's Secret",
					price: "¥100.00",
					num: "100",
					sku: "修改图标",
					salenum: "100",
					state: "已上架",
					orp: "还原，删除",
					goodsclassify:"服装 > 内裤",

				}, {
					date: '2016-05-02',
					number: '1000001',
					address: "",
					goodsname: "银色星芒刺绣网纱底裤\n\n\n品牌：Victoria's Secret",
					price: "¥100.00",
					num: "100",
					sku: "修改图标",
					salenum: "100",
					state: "已上架",
					orp: "还原，删除",
					goodsclassify:"服装 > 内裤",
				}, {
					date: '2016-05-02',
					number: '1000001',
					address: "",
					goodsname: "银色星芒刺绣网纱底裤\n\n\n品牌：Victoria's Secret",
					price: "¥100.00",
					num: "100",
					sku: "修改图标",
					salenum: "100",
					state: "已上架",
					orp: "还原，删除",
					goodsclassify:"服装 > 内裤",
				}, {
					date: '2016-05-02',
					number: '1000001',
					address: "",
					goodsname: "银色星芒刺绣网纱底裤\n\n\n品牌：Victoria's Secret",
					price: "¥100.00",
					num: "100",
					sku: "修改图标",
					salenum: "100",
					state: "已上架",
					orp: "还原，删除",
					goodsclassify:"服装 > 内裤",
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
	@import "goodsrecycling.scss"
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
	 	width: 100px;
	 	height: 30px;
	 } 
	 .el-input__inner{
	 	height: 28px;
	 }
	 .el-button{
	 	 line-height: 0.3;
	 }
	
</style>