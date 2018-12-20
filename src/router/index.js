import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'login123',
			component: () =>import('@/pages/login/login'),
		},
		{
			path: '/logins',
			name: 'logins',
			component: () =>import('@/pages/logins/logins'),
		},
		{
			path: '/index',
			name: 'index123',
			component: () =>import('@/pages/index/index'),
			children: [
					{
					path: '/list',
					name: 'list',
					component: () => import('@/pages/list/list'),
					children: [
					    {
							path: '/sublist',
							name: 'sublist',
							component: () => import('@/pages/sublist/sublist'),
						},
						{
							path: '/tabel',
							name: 'tabel',
							component: () => import('@/pages/tabel/tabel'),
						},
						
						{
							path: '/accountSettings',
							name: 'accountSettings',
							component: () => import('@/pages/accountSettings/accountSettings'),
						},

						//    

					]},

				{
					path: '/echart',
					name: 'echart',
					component: () =>import('@/pages/echart/echart'),
				},
				{
					path: '/book',
					name: 'book',
					component: () =>import('@/pages/book/book'),
					children:[
					    {
							path: '/bookmanagement',
							name: 'bookmanagement',
							component: () =>import('@/pages/bookmanagement/bookmanagement'),
						}, 
						{
							path: '/bookconficrmReceipt',
							name: 'bookconficrmReceipt',
							component: () =>import('@/pages/bookconficrmReceipt/bookconficrmReceipt'),
						},
						{
							path: '/bookOrderSetting',
							name: 'bookOrderSetting',
							component: () =>import('@/pages/bookOrderSetting/bookOrderSetting'),
						}, 
						{
							path: '/bookApplicationProcessingforReturn',
							name: 'bookApplicationProcessingforReturn',
							component: () =>import('@/pages/bookApplicationProcessingforReturn/bookApplicationProcessingforReturn'),
						},
						{
							path: '/bookapplicationfordrawback',
							name: 'bookapplicationfordrawback',
							component: () =>import('@/pages/bookapplicationfordrawback/bookapplicationfordrawback'),
						}, 
						{
							path: '/bookreasonsofReturn',
							name: 'bookreasonsofReturn',
							component: () =>import('@/pages/bookreasonsofReturn/bookreasonsofReturn'),
						},
					]
				},
				{
					path: '/goods',
					name: 'goods',
					component: () =>import('@/pages/goods/goods'),
					children: [{
							path: '/goodslist',
							name: 'goodslist',
							component: () =>import('@/pages/goodslist/goodslist'),
						},
						{
							path: '/systemInfo',
							name: 'systemInfo',
							component: () => import('@/pages/systemInfo/systemInfo'),
						},
						{
							path: '/addgoods',
							name: 'addgoods',
							component: () =>import('@/pages/addgoods/addgoods'),
						},
						{
							path: '/goodsmanagement',
							name: 'goodsManagement',
							component: () =>import('@/pages/goodsmanagement/goodsmanagement'),
						},
						{
							path: '/goodsrecycling',
							name: 'goodsrecycling',
							component: () =>import('@/pages/goodsrecycling/goodsrecycling'),
						},
						{
							path: '/goodsdiscuss',
							name: 'goodsdiscuss',
							component: () =>import('@/pages/goodsdiscuss/goodsdiscuss'),
						},{
							path: '/goodsclassify',
							name: 'goodsclassify',
							component: () =>import('@/pages/goodsclassify/goodsclassify'),
						},
						{
							path: '/goodstypeofmerchandise',
							name: 'goodstypeofmerchandise',
							component: () =>import('@/pages/goodstypeofmerchandise/goodstypeofmerchandise'),
						},
						{
							path: '/goodsbrandmanagement',
							name: 'goodsbrandmanagement',
							component: () =>import('@/pages/goodsbrandmanagement/goodsbrandmanagement'),
						},
						
					]
				},
				{
					path: '/repertory',
					name: 'repertory',
					component: () =>import('@/pages/repertory/repertory'),
					children: [
					{
						    path: '/repertorywarehousing',
							name: 'repertorywarehousing',
							component: () =>import('@/pages/repertorywarehousing/repertorywarehousing'),
					},
					{
							path: '/repertoryout',
							name: 'repertoryout',
							component: () =>import('@/pages/repertoryout/repertoryout'),
						},
					]
				},
				{
						    path: '/user',
							name: 'user',
							component: () =>import('@/pages/user/user'),
							children: [
							{
							path: '/usermanage',
							name: 'usermanage',
							component: () =>import('@/pages/usermanage/usermanage'),
						},
							  
							]
							
			   },
			   {
							path: '/Operate',
							name: 'Operate',
							component: () =>import('@/pages/Operate/Operate'),
							children:[
							 {
							 	path: '/Operateadslist',
								name: 'Operateadslist',
								component: () =>import('@/pages/Operateadslist/Operateadslist'),
							 	
							 },
							 {
							 	path: '/OperateAddads',
								name: 'OperateAddads',
								component: () =>import('@/pages/OperateAddads/OperateAddads'),
							 	
							 },
							]
						},{
							 	path: '/Satistics',
								name: 'Satistics',
								component: () =>import('@/pages/Satistics/Satistics'),
								children:[
											{
										 	path: '/StatisticalAnalysis',
											name: 'StatisticalAnalysis',
											component: () =>import('@/pages/StatisticalAnalysis/StatisticalAnalysis'),
										    },
								         ]
							 	
					          },
					               {
								 	path: '/set',
									name: 'set',
									component: () =>import('@/pages/set/set'),
									children:[
										   	  {
											 	path: '/setbase',
												name: 'setbase',
												component: () =>import('@/pages/setbase/setbase'),
										 	
										      },
										      {
											 	path: '/setarea',
												name: 'setarea',
												component: () =>import('@/pages/setarea/setarea'),
										 	
										      },
									 
									]
										 },
				                       {
										 	path: '/authority',
											name: 'authority',
											component: () =>import('@/pages/authority/authority'),
											children:[
										   	  {
											 	path: '/authority_log',
												name: 'authority_log',
												component: () =>import('@/pages/authority_log/authority_log'),
										 	
										      },
									 
									]
						 	
						           },
				 
				
				
		
			]
		},

	]
})