<template>
	<div class="goodslist">
		<div class="title">
				<span id="box"></span>
				<span>商品列表goodslist</span>
				<span class="img">刷新</span>
	    </div>
	    <div class="content">
	    	<div class="top">
	    		
	    		<el-steps :space="200" :active="1" finish-status="success">
				  <el-step title="选择商品分类"></el-step>
				  <el-step title="填写商品信息"></el-step>
				  <el-step title="填写商品属性"></el-step>
				</el-steps>
	    	</div>
	    	<div class="center">
	    		<div class="primary">
	    			<div class="img">
	    				<img src="../../assets/mark.png"/>
	    				选择分类
	    			</div>
	    		</div>
	    		<div class="secondry">
	    			<div class="inner">
	    				<div id="">
	    					您最近使用的商品分类：
						<el-autocomplete
							  popper-class="my-autocomplete"
							  v-model="state3"
							  :fetch-suggestions="querySearch"
							  placeholder="请输入内容"
							  @select="handleSelect">
							  <i
							    class="el-icon-caret-bottom el-input__icon"
							    slot="suffix"
							    @click="handleIconClick">
							  </i>
							  <template slot-scope="{ item }">
							    <div class="name">{{ item.value }}</div>
							    <span class="addr">{{ item.address }}</span>
							  </template>
							</el-autocomplete>

	    				</div>
	    				<!--分栏-->
	    				
	    				<div   >
<el-row class="tac">
  <el-col :span="12">
    <!--<h5>默认颜色</h5>-->
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <el-submenu index="1">
        <template slot="title">
          <!--<i class="el-icon-location"></i>-->
          <span>服装</span>
           <i class="el-icon-arrow-down"></i>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <span slot="title">餐厨</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <span slot="title">配件</span>
      </el-menu-item>
      <el-menu-item index="4">
        <span slot="title">居家</span>
      </el-menu-item>
      <el-menu-item index="5">
        <span slot="title">洗护</span>
      </el-menu-item>
      <el-menu-item index="6">
        <span slot="title">婴童</span>
      </el-menu-item>
      <el-menu-item index="6">
        <span slot="title">杂货</span>

      </el-menu-item>
    </el-menu>
  </el-col>
  <el-col :span="12">
    <!--<h5>自定义颜色</h5>-->
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <span>内裤</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <span slot="title">内衣</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <span slot="title">袜子</span>
      </el-menu-item>
      <el-menu-item index="4">
        <span slot="title">大衣</span>
      </el-menu-item>
      <el-menu-item index="5">
        <span slot="title">家居服</span>
      </el-menu-item>
      <el-menu-item index="5">
        <span slot="title">衬衫</span>
      </el-menu-item>
      <el-menu-item index="5">
        <span slot="title">外套</span>
      </el-menu-item>
    </el-menu>
  </el-col>
</el-row>
	    				</div>
	    				<span style="display: block;margin-top:20px">您当前选择的商品类别是：<span style="color: red;">服装 </span>> <span style="color: red;">内裤</span></span>
	    				<div style="width:100%;height:2px;margin:50px auto;padding:0px;overflow:hidden; z-index: 88;">1</div>
	    				 <hr style="margin:0px;height:1px;border:0px;color:#D5D5D5;z-index: 88;"/>
	    				<el-button type="primary">主要按钮</el-button>
	    			</div>
	    			
	    		</div>
	    	</div>
	    	
	    </div>
	</div>
</template>

<script>
	 export default {
	 	 data() {
      return {
        restaurants: [],
        state3: ''
      };
    },
     methods: {
     	 handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      //后面那个两列的方法  上面 两个
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
}
</script>



<style scoped="scoped" lang="scss">
	@import "addgoods.scss"
</style>
<style  >
.el-step__icon {
    width: 60px;
    height: 60px;
}
.el-step.is-horizontal .el-step__line {
    top: 27px;
    
}
.el-step__icon.is-text {
    background: #1ABC9C;
}
.el-step__icon-inner {
    color: white;
    font-size: 33px;
}
.el-step__head.is-success {
   color: #67c23a; 
     border-color: initial; 
}

//
.tac{
	    display: flex;
}
.el-col-12 {
    width: 40%;
}
.tac .el-col:nth-child(1){
	margin-right: 20%;
	
}
 el-col .title{
	color: #ccc;
}
.el-menu-vertical-demo  li{
	border-bottom: 1px solid #ccc;
	height: 40px;
	line-height: 40px;
}
.el-menu {
    border: solid 1px #e6e6e6;
    border-radius: 5px;
    margin-top: 20px;
    }
.el-menu-vertical-demo{
    	/*background: red;*/
    }
    .el-button--primary {
    width: 184px;
    color: #fff;
    margin: 10% 0 0 30%;
    background-color: #1ABC9C;
}
.inner el-button{
	text-align: center;
	margin-left: 50px;
}
</style>