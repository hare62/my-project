<template>
	<div class="authority_log">
		<div class="title">
			<span id="box"></span>
			<span>操作日志</span>
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
					</li>
					<li>
						<div>
							<span>操作人员:</span>
							<el-autocomplete
							  popper-class="my-autocomplete"
							  v-model="state3"
							  :fetch-suggestions="querySearch"
							  placeholder="请选择"
							  @select="handleSelect">
							  <i style="margin-top: 20px; "
							    class="el-icon-arrow-down el-input__icon"
							    slot="suffix"
							    @click="handleIconClick">
							  </i>
							  <template slot-scope="{ item }">
							    <div class="name">{{ item.value }}</div>
							    <span class="addr">{{ item.address }}</span>
							  </template>
							</el-autocomplete>
						</div>
						<div class="block">
    <span class="demonstration">操作日期</span>
    <el-date-picker
      v-model="value1"
      type="datetime"
      placeholder="
请选择日期">
    </el-date-picker>
  </div>
						<!--<div>
							<span>输入搜索:</span>
							<input type="text" name="" id="" value="" placeholder="商品名称/商品出货" />
						</div>-->
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
					<div class="right more">
						<span>清除日志:</span>
						 
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
							<el-button>确认</el-button>
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
					<el-table-column prop="number" label="编号" >
					</el-table-column>
					<el-table-column prop="person" label="操作者" >
					</el-table-column>
					
				
					<el-table-column prop="orderReceivableTime" label="操作日期" >
					</el-table-column>
					<el-table-column prop="IP" label="IP地址" >
					</el-table-column>
					<el-table-column prop="storetype" label="操作记录">
					</el-table-column>
					
				</el-table>
				<div class="title" id="title">
					 <div class="left">
					 	 <el-checkbox v-model="checked">全选</el-checkbox>
					 	<el-select v-model="value4" clearable placeholder="批量操作">
						    <el-option
						      v-for="item in options"
						      :key="item.value"
						      :label="item.label"
						      :value="item.value">
						    </el-option>
						</el-select>
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
      },
      querySearch(queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
        // 调用 callback 返回建议列表的数据
        cb(results);
      },
      createFilter(queryString) {
        return (restaurant) => {
          return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      loadAll() {
        return [
          { "value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号" },
          { "value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号" },
          { "value": "新旺角茶餐厅", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
          { "value": "泷千家(天山西路店)", "address": "天山西路438号" },
          { "value": "胖仙女纸杯蛋糕（上海凌空店）", "address": "上海市长宁区金钟路968号1幢18号楼一层商铺18-101" },
          { "value": "贡茶", "address": "上海市长宁区金钟路633号" },
          { "value": "豪大大香鸡排超级奶爸", "address": "上海市嘉定区曹安公路曹安路1685号" },
          { "value": "茶芝兰（奶茶，手抓饼）", "address": "上海市普陀区同普路1435号" },
          { "value": "十二泷町", "address": "上海市北翟路1444弄81号B幢-107" },
          { "value": "星移浓缩咖啡", "address": "上海市嘉定区新郁路817号" },
          { "value": "阿姨奶茶/豪大大", "address": "嘉定区曹安路1611号" },
          { "value": "新麦甜四季甜品炸鸡", "address": "嘉定区曹安公路2383弄55号" },
          { "value": "Monica摩托主题咖啡店", "address": "嘉定区江桥镇曹安公路2409号1F，2383弄62号1F" },
          { "value": "浮生若茶（凌空soho店）", "address": "上海长宁区金钟路968号9号楼地下一层" },
          { "value": "NONO JUICE  鲜榨果汁", "address": "上海市长宁区天山西路119号" },
          { "value": "CoCo都可(北新泾店）", "address": "上海市长宁区仙霞西路" },
          { "value": "快乐柠檬（神州智慧店）", "address": "上海市长宁区天山西路567号1层R117号店铺" },
          { "value": "Merci Paul cafe", "address": "上海市普陀区光复西路丹巴路28弄6号楼819" },
          { "value": "猫山王（西郊百联店）", "address": "上海市长宁区仙霞西路88号第一层G05-F01-1-306" },
          { "value": "枪会山", "address": "上海市普陀区棕榈路" },
          { "value": "纵食", "address": "元丰天山花园(东门) 双流路267号" },
          { "value": "钱记", "address": "上海市长宁区天山西路" },
          { "value": "壹杯加", "address": "上海市长宁区通协路" },
          { "value": "唦哇嘀咖", "address": "上海市长宁区新泾镇金钟路999号2幢（B幢）第01层第1-02A单元" },
          { "value": "爱茜茜里(西郊百联)", "address": "长宁区仙霞西路88号1305室" },
          { "value": "爱茜茜里(近铁广场)", "address": "上海市普陀区真北路818号近铁城市广场北区地下二楼N-B2-O2-C商铺" },
          { "value": "鲜果榨汁（金沙江路和美广店）", "address": "普陀区金沙江路2239号金沙和美广场B1-10-6" },
          { "value": "开心丽果（缤谷店）", "address": "上海市长宁区威宁路天山路341号" },
          { "value": "超级鸡车（丰庄路店）", "address": "上海市嘉定区丰庄路240号" },
          { "value": "妙生活果园（北新泾店）", "address": "长宁区新渔路144号" },
          { "value": "香宜度麻辣香锅", "address": "长宁区淞虹路148号" },
          { "value": "凡仔汉堡（老真北路店）", "address": "上海市普陀区老真北路160号" },
          { "value": "港式小铺", "address": "上海市长宁区金钟路968号15楼15-105室" },
          { "value": "蜀香源麻辣香锅（剑河路店）", "address": "剑河路443-1" },
          { "value": "北京饺子馆", "address": "长宁区北新泾街道天山西路490-1号" },
          { "value": "饭典*新简餐（凌空SOHO店）", "address": "上海市长宁区金钟路968号9号楼地下一层9-83室" },
          { "value": "焦耳·川式快餐（金钟路店）", "address": "上海市金钟路633号地下一层甲部" },
          { "value": "动力鸡车", "address": "长宁区仙霞西路299弄3号101B" },
          { "value": "浏阳蒸菜", "address": "天山西路430号" },
          { "value": "四海游龙（天山西路店）", "address": "上海市长宁区天山西路" },
          { "value": "樱花食堂（凌空店）", "address": "上海市长宁区金钟路968号15楼15-105室" },
          { "value": "壹分米客家传统调制米粉(天山店)", "address": "天山西路428号" },
          { "value": "福荣祥烧腊（平溪路店）", "address": "上海市长宁区协和路福泉路255弄57-73号" },
          { "value": "速记黄焖鸡米饭", "address": "上海市长宁区北新泾街道金钟路180号1层01号摊位" },
          { "value": "红辣椒麻辣烫", "address": "上海市长宁区天山西路492号" },
          { "value": "(小杨生煎)西郊百联餐厅", "address": "长宁区仙霞西路88号百联2楼" },
          { "value": "阳阳麻辣烫", "address": "天山西路389号" },
          { "value": "南拳妈妈龙虾盖浇饭", "address": "普陀区金沙江路1699号鑫乐惠美食广场A13" }
        ];
      },
      handleSelect(item) {
        console.log(item);
      },
      handleIconClick(ev) {
        console.log(ev);
      }
    },
    mounted() {
      this.restaurants = this.loadAll();
    },
		data() {
			
			return {
				 checked: true,
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
				restaurants: [],
                  state3: '',
				 input10: '',
				currentPage1: 5,
		        currentPage2: 5,
		        currentPage3: 5,
		        currentPage4: 4,
				tableData: [{
					selection:"",
					number: '201707196398345',
					operation: "查看订单    确认收货",
					orderReceivableTime:"2017-07-19 14:48:38",
					person:"admin",
					goodsname:"银色星芒刺绣网纱底裤品牌：Victoria's Secret",
					goodsnumber:"货号：No86577",        
					orderAmount :"2017061514196905519", 
					IP :"220.231.210.22",
					storetype :"编辑会员账号: windir",
					operationtype :"退货时",
					operationmessage :"admin  2017-07-24 17:25:38",

				}, {
					selection:"",
					number: '201707196398345',
					operation: "查看订单    确认收货",
					orderReceivableTime:"2017-07-19 14:48:38",
					picture:"图片",
					goodsname:"银色星芒刺绣网纱底裤品牌：Victoria's Secret",
					goodsnumber:"货号：No86577",        
					orderAmount :"2017061514196905519", 
					store :"数量：+1      剩余：100",
					storetype :"商品库存",
					operationtype :"退货时",
					operationmessage :"admin  2017-07-24 17:25:38",
				}, {
					selection:"",
					number: '201707196398345',
					operation: "查看订单    确认收货",
					orderReceivableTime:"2017-07-19 14:48:38",
					picture:"图片",
					goodsname:"银色星芒刺绣网纱底裤品牌：Victoria's Secret",
					goodsnumber:"货号：No86577",        
					orderAmount :"2017061514196905519", 
					store :"数量：+1      剩余：100",
					storetype :"商品库存",
					operationtype :"退货时",
					operationmessage :"admin  2017-07-24 17:25:38",
				}, {
					selection:"",
					number: '201707196398345',
					operation: "查看订单    确认收货",
					orderReceivableTime:"2017-07-19 14:48:38",
					picture:"图片",
					goodsname:"银色星芒刺绣网纱底裤品牌：Victoria's Secret",
					goodsnumber:"货号：No86577",        
					orderAmount :"2017061514196905519", 
					store :"数量：+1      剩余：100",
					storetype :"商品库存",
					operationtype :"退货时",
					operationmessage :"admin  2017-07-24 17:25:38",
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
	@import "authority_log.scss"
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
#title{
	display: flex;
    flex-direction: row;
    justify-content: flex-end;
}
.my-autocomplete {
  li {
    line-height: normal;
    padding: 7px;

    .name {
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .addr {
      font-size: 12px;
      color: #b4b4b4;
    }

    .highlighted .addr {
      color: #ddd;
    }
  }
}
 .center .el-input__suffix {
    right: 5px;
    -webkit-transition: all .3s;
    transition: all .3s;
    top: -20px;
}
 .center  .el-input__inner {
    background-image: none;
    border-radius: 0px;
    border: 1px solid #999;
    height: 33px;
    line-height: 33px;
    width: 180px;
}
.el-button:active {
    color: #999;
    border-color: #999 !important;
    /*outline: 0;*/
}
.el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner {
    background-color: #9E9E9E;
    border-color: #607D8B;
}
.el-checkbox__input.is-checked+.el-checkbox__label {
    color: #adaeaf;
}
.el-checkbox__input.is-checked+.el-checkbox__label {
    color: #ccc;
}

</style>