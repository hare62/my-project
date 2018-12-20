<template>
	<div class="goodslist">
		<div class="title">
			<span id="box"></span>
			<span>商品列表goodslist</span>
			<span class="img">刷新</span>
		</div>
		<div class="content">
			<div class="top">
				<span>全部商品(1000)</span>
				<span>全部商品(1000)</span>
				<span>全部商品(1000)</span>
			</div>
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
							<span class="border2">高级检索</span>
						</div>

					</li>
					<li>
						<div>
							<span>输入搜索:</span>
							<input type="text" name="" id="" value="" placeholder="商品名称/商品出货" />

						</div>
						<div>
							<span>输入搜索:</span>
							<input type="text" name="" id="" value="" placeholder="商品名称/商品出货" />

						</div>
						<div>
							<span>输入搜索:</span>
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
						 <el-button>默认按钮</el-button>
						  <el-button>默认按钮</el-button>
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
					<el-table-column prop="price" label="价格/货号" width="125">
					</el-table-column>
					<el-table-column prop="num" label="排序" width="50">
					</el-table-column>
					<el-table-column prop="sku" label="SKU库存" width="80">
					</el-table-column>
					<el-table-column prop="salenum" label="销量" width="80">
					</el-table-column>
					<el-table-column prop="state" label="状态" width="80">
					</el-table-column>
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
					price: "价格：¥100.00货号：No86577",
					num: "100",
					sku: "修改图标",
					salenum: "100",
					state: "已上架",
					orp: "删除 ，编辑，下架，删除"

				}, {
					date: '2016-05-02',
					number: '1000001',
					address: "",
					goodsname: "银色星芒刺绣网纱底裤\n\n\n品牌：Victoria's Secret",
					price: "价格：¥100.00货号：No86577",
					num: "100",
					sku: "修改图标",
					salenum: "100",
					state: "已上架",
					orp: "删除 ，编辑，下架，删除"
				}, {
					date: '2016-05-02',
					number: '1000001',
					address: "",
					goodsname: "银色星芒刺绣网纱底裤\n\n\n品牌：Victoria's Secret",
					price: "价格：¥100.00货号：No86577",
					num: "100",
					sku: "修改图标",
					salenum: "100",
					state: "已上架",
					orp: "删除 ，编辑，下架，删除"
				}, {
					date: '2016-05-02',
					number: '1000001',
					address: "",
					goodsname: "银色星芒刺绣网纱底裤\n\n\n品牌：Victoria's Secret",
					price: "价格：¥100.00货号：No86577",
					num: "100",
					sku: "修改图标",
					salenum: "100",
					state: "已上架",
					orp: "删除 ，编辑，下架，删除"
				}]
			}
		}
	}
</script>

<style scoped="scoped" lang="scss">
	@import "goodslist.scss"
	/*@import "../css/icomoon.wxss"*/
</style>