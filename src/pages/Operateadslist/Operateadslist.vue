
<template>
    <div class="Operateadslist">
        <div class="title">
            <span id="box"></span>
            <span>广告列表</span>
            <span class="img">刷新</span>
        </div>
        <div class="content">
            <!--<div class="top">
                <span>全部商品(1000)</span>
                <span>已上架<span>(1000)</span></span>
                <span>未上架<span>(1000)</span></span>
                <span>未上架<span>(1000)</span></span>
                <span>已上架<span>(1000)</span></span>
                <span>未上架<span>(1000)</span></span>
            </div>-->
            <!--<div class="center">
                <ul>
                    <li style="overflow: hidden;">
                        <div class="left">
                            <i class="el-icon-search"></i>
                            <span> 筛选查询</span>
                        </div>
                    </li>
                    <li>

                    <div>
                            <span>用户账号:</span>
                            <input type="text" name="" id="" value="" placeholder="用户ID/账号" />
                        </div>
                        <div>
                            <span>用户昵称:</span>
                            <input type="text" name="" id="" value="" placeholder="用户昵称" />
                        </div>
                        <div class="goodsbrand">
                            <span>注册时间:</span>
                            <span class="block">
                                <input type="text" name="" id="" value="" placeholder="请选择时间" />
                                <i class="el-icon-date"></i>
                            </span>
                            
                        </div>
                        <div style="height: 40px;float: right;">
                            <el-button>查询结果</el-button>
                        </div>
                    </li>
                </ul>
            </div>-->
            <div class="bottom">
                <div class="title">
                    <div class="left">
                        <i class="el-icon-tickets"></i>
                        <span>数据列表</span>
                    </div>
                    <div class="right">
                         <!--<el-button>一键确认收货</el-button>-->
                         <!--<el-button>修改商品详情</el-button>-->
                          <template>
                              <el-select v-model="value4" clearable placeholder="导出数据">
                                <el-option
                                  v-for="item in options"
                                  :key="item.value"
                                  :label="item.label"
                                  :value="item.value">
                                </el-option>
                              </el-select>
                            </template>
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
                    <el-table-column prop="number" label="编号" width="130">
                    </el-table-column>
                    <el-table-column prop="adsname" label="广告名称" width="150">
                    </el-table-column>
                    <el-table-column prop="adsposition" label="广告位置" width="120">
                    </el-table-column>
                    <el-table-column prop="adspic" label="广告图片">
                    </el-table-column>
                    <el-table-column prop="orderAmount" label="上线/下线" >
                    </el-table-column>
                    
                    <el-table-column prop="clicknum" label="点击次数">
                    </el-table-column>
                    <el-table-column prop="operation" label="操作" width="120">
                    </el-table-column>
                    <!--<el-table-column prop="orderReceivableTime" label="订单应收货时间" width="150">
                    </el-table-column>
                    <el-table-column prop="operation" label="操作" width="130">
                    </el-table-column>-->
                </el-table>
                <div class="title" id="title">
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
                      :page-size="100"
                      layout="total, sizes, prev, pager, next, jumper"
                      :total="400">
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
                	selection:"",
                    number: '1000001',
                    adsname:"夏季大热促销",
                    operation: "查看订单    确认收货",
                    adsposition:"APP首页轮播",
                    orderAmount:"¥200.00",
                    adspic:"图片",
                    clicknum:"100",
                    operation:"编辑    置顶   删除",
                    

                }, {
                    selection:"",
                    number: '1000001',
                    adsname:"夏季大热促销",
                    operation: "查看订单    确认收货",
                    adsposition:"APP首页轮播",
                    orderAmount:"¥200.00",
                    adspic:"图片",
                    clicknum:"100",
                    operation:"编辑    置顶   删除",
                }, {
                    selection:"",
                    number: '1000001',
                    adsname:"夏季大热促销",
                    operation: "查看订单    确认收货",
                    adsposition:"APP首页轮播",
                    orderAmount:"¥200.00",
                    adspic:"图片",
                    clicknum:"100",
                    operation:"编辑    置顶   删除",
                }, {
                    selection:"",
                    number: '1000001',
                    adsname:"夏季大热促销",
                    operation: "查看订单    确认收货",
                    adsposition:"APP首页轮播",
                    orderAmount:"¥200.00",
                    adspic:"图片",
                    clicknum:"100",
                    operation:"编辑    置顶   删除",
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
    @import "Operateadslist.scss"
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
#title{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
</style>