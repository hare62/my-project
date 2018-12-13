import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	mode:'history',
  routes: [
    {
      path: '/',
      name: 'login123',
      component: () => import('@/pages/login/login'),
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
      children:[
      	    
				    {
				      path: '/echart',
				      name: 'echart',
				      component: () => import('@/pages/echart/echart'),
				    },
				    {
				      path: '/list',
				      name: 'list',
				      component: () => import('@/pages/list/list'),
				      children:[	
							            {
											      path: '/sublist',
											      name: 'sublist',
											      component:()  =>  import('@/pages/sublist/sublist'),
											    },
											    {
											      path: '/tabel',
											      name: 'tabel',
											      component:() => import('@/pages/tabel/tabel'),
											    },
         
      
      
                    ]
   				 },
      ]
    },
    
  ]
})
