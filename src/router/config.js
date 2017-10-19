import Index from '@/pages/index/Index';
import Order from '@/pages/order/Order';
var meta={needRequest:true};
var router=[
	 {
      meta,
      path: '/',
      name: '首页',
      checked:false,
      component:Index
    },{
    	path:'/order',
    	name:'订单',
    	checked:false,
    	component:Order
    }

]


export default router;