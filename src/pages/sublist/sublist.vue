<template>
	<div class="sublist" style="height: 100%;">
			<div class="title">
				<span id="box">
			   	  .
			   </span>
				<span>系统首页</span>
			</div>
			<div class="main">
				<div class="detail">
					<div class="de-list">
						<div class="primary">
							<img src="../../assets/todaybooknums.png" />
						</div>
						<div class="secondary">
							<span>今日订单总数</span>
							<span class="color"> 200.00</span>
						</div>
					</div>
					<div class="de-list">
						<div class="primary">
							<img src="../../assets/saleAllnumbers.png" />
						</div>
						<div class="secondary">
							<span>今日订单总数</span>
							<span class="color"> 200.00</span>
						</div>
					</div>
					<div class="de-list">
						<div class="primary">
							<img src="../../assets/yesterdaysalenums.png" />
						</div>
						<div class="secondary">
							<span>今日订单总数</span>
							<span class="color"> 200.00</span>
						</div>
					</div>
					<div class="de-list">
						<div class="primary">
							<img src="../../assets/weekssalenums.png" />
						</div>
						<div class="secondary">
							<span>今日订单总数</span>
							<span class="color"> 200.00</span>
						</div>
					</div>
				</div>
			</div>
			<div class="table">
				<ul>
					<li class="first">
						<div>待处理事物</div>
					</li>
					<li>
						<span>
	         		    <div class="primary">付款订单</div>
	         		    <div class="decondary">(10)</div>
	         		</span>
						<span>
	         		    <div class="primary">已完成订单</div>
	         		    <div class="decondary">(10)</div>
	         		</span>
						<span>
	         			<div class="primary">待确认退货订单</div>
	         		    <div class="decondary">(10)</div>
	         		</span>
					</li>
					<li>
						<span>
	         		    <div class="primary">付款订单</div>
	         		    <div class="decondary">(10)</div>
	         		</span>
						<span>
	         		    <div class="primary">已完成订单</div>
	         		    <div class="decondary">(10)</div>
	         		</span>
						<span>
	         			<div class="primary">待确认退货订单</div>
	         		    <div class="decondary">(10)</div>
	         		</span>
					</li>
					<li>
						<span>
	         		    <div class="primary">付款订单</div>
	         		    <div class="decondary">(10)</div>
	         		</span>
						<span>
	         		    <div class="primary">已完成订单</div>
	         		    <div class="decondary">(10)</div>
	         		</span>
						<span>
	         			<div class="primary">待确认退货订单</div>
	         		    <div class="decondary">(10)</div>
	         		</span>
					</li>
				</ul>

			</div>
			<div class="operational_entrance">
				<ul>
					<li class="first">
						<div>待处理事物</div>
					</li>
					<li>
						<span>
							<img src="../../assets/login1.png"/>
	         	 	        <span>添加商品</span>
						</span>
						<span>
							<img src="../../assets/advertisementmanage.png"/>
	         	 	        <span>添加商品</span>
						</span>
						<span>
							<img src="../../assets/booklist.png"/>
	         	 	        <span>添加商品</span>
						</span>
						<span>
							<img src="../../assets/dealmanage.png"/>
	         	 	        <span>添加商品</span>
						</span>
						<span>
							<img src="../../assets/indexrecomend.png"/>
	         	 	        <span>添加商品</span>
						</span>
						<span>
							<img src="../../assets/killmanage.png"/>
	         	 	        <span>添加商品</span>
						</span>
						<span>
							<img src="../../assets/messagesale.png"/>
	         	        	<span>添加商品</span>
						</span>
						<span>
							<img src="../../assets/titlemanage.png"/>
	         	 	        <span>添加商品</span>
						</span>
						<span>
							<img src="../../assets/titlemanage.png"/>
	         	 	        <span>添加商品</span>
						</span>

					</li>
				</ul>

			</div>

		</div>
		
</template>

<script>
	 export default{
	  	
	  }
</script>

<style scoped="scoped" lang="scss">
 @mixin float{
     float: left;
     display: inline;
 }
 
	 .sublist{
       width: 80%;
       display: inline;
       float: right;
        margin: 0;
        padding: 0;
        margin-right: 10%;
        .title{
            height: 40px;
            width: 100%;
            line-height: 40px;
            padding-left: 30px;
            background: #ccc;
//          #box{
//              width: 20px;
//              height:30px;
//              background: blue;
//              display: inline-block;
//              margin-top: -2px;
//          }
        }
        .main{
            margin-top: 18px;
            width: 100%;
            .detail{
                display: flex;
                flex-direction: row;
                flex-wrap: nowrap;
                justify-content: space-around;
                .de-list{
                        background: #F7F9F8;
                        padding: 10px;
                        width: 22%;
                        height: 50px;
                        border: 1px solid #ccc;
                        overflow: hidden;
                        .primary{
                            text-align: center;
                             width:50% ;
                             height: 100%;
                            @include float;
                        }
                        .secondary{
                            height: 100%;
                             width:50%;
                             float: right;
                             display: flex;
                             flex-direction: column;
                             .color{
                                 color: red;
                             } 
                        }
                }
            }
     
        }
           .table{
               margin-top: 20px;
               width: 100%;
             ul{ border: 1px solid #ccc;
                 width: 100%;
                 li{ 
                     display: flex;
                     flex-direction: row;
                     justify-content: space-around;
                     height: 30px;
                     width: 100%;
                     list-style: none;
                     border-bottom: 1px solid #ccc;
                     &:last-of-type{
                         border-bottom:none;
                         
                     }
//                   &:nth-of-type(1){
//                       background-color: #EFEFEF;
//                   }
                     &:nth-child(1){
                         display: inline-block;
                         background-color: #EFEFEF;
                         text-align: left;
                         float: left;
                         text-indent: 20px;
                         line-height: 30px;
                     }
                     span{
                         line-height: 30px;
                         text-align: center;
                         display: flex;
                         justify-content: space-between;
                         width: 30%;
                         height: 100%;
                         border-right: 1px solid #ccc;;
                         &:last-of-type{
                             border-right:none;
                         } 
                         .primary{
                             float: left;
                             width: 54%;
                             
                         }  
                         .decondary{
                             @include float;
                             width:30%;
                         }             
                     }
                 }
             }
         }
         
         .operational_entrance{
               margin-top: 20px;
               width: 100%;
               ul{
                   border: 1px solid #ccc;
                   width: 100%;
                   li{
                       &:nth-child(1){
                           height: 30px;
                           width: 100%;
                           border-bottom:1px solid #ccc;
                       }
                       &:nth-child(2){
                           height: 100px;
                           width: 100%;
                           display: flex;
                           flex-direction: row;
                           justify-content: space-around;
                           text-align: center;
//                         align-items:center;
                           margin-top: 13px;
                           span{
                               height: 50px;
                               line-height: 50px;
                               width:50px;
                               display: flex;
                               flex-direction: column;
                               font-size: 12px;
                              
                           }
                           img{
                               height: 50px;
                               width: 50px;
//                             line-height: 50px;
                           }
                       }
                   }
               }
         }
    }
</style>