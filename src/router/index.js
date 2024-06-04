import { createRouter, createWebHistory } from 'vue-router';
import AppLayout from '@/layout/AppLayout.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: AppLayout,
            children: [
                {
                    path: '/setting/ip',
                    name: 'ipsetting',
                    component: () => import('@/views/setting/ipSetting.vue')
                },
                {
                    path: '/setting/join',
                    name: 'joinsetting',
                    component: () => import('@/views/setting/joinSetting.vue')
                },
                {
                    path: '/setting/menu',
                    name: 'menusetting',
                    component: () => import('@/views/setting/menuSetting.vue')
                },
                {
                    path: '/setting/personal',
                    name: 'personalsetting',
                    component: () => import('@/views/setting/personalSetting.vue')
                },
                {
                    path: '/setting/service',
                    name: 'servicesetting',
                    component: () => import('@/views/setting/serviceSetting.vue')
                },
                {
                    path: '/user/approval',
                    name: 'userapproval',
                    component: () => import('@/views/user/userApproval.vue')
                },
                {
                    path: '/user/list',
                    name: 'userlist',
                    component: () => import('@/views/user/userList.vue')
                },
                {
                    path: '/user/total',
                    name: 'visitortotal',
                    component: () => import('@/views/user/visitorTotal.vue')
                },
                {
                    path: '/seller/list',
                    name: 'sellerlist',
                    component: () => import('@/views/seller/sellerList.vue')
                },
                {
                    path: '/seller/register',
                    name: 'sellerregister',
                    component: () => import('@/views/seller/sellerRegister.vue')
                },
                {
                    path: '/event/list',
                    name: 'eventlist',
                    component: () => import('@/views/event/eventList.vue')
                },
                {
                    path: '/event/register',
                    name: 'eventregister',
                    component: () => import('@/views/event/eventRegister.vue')
                },
                {
                    path: '/shop/setting',
                    name: 'shopsetting',
                    component: () => import('@/views/shop/shopSetting.vue')
                },
                {
                    path: '/shop/history',
                    name: 'orderhistory',
                    component: () => import('@/views/shop/orderHistory.vue')
                },
                {
                    path: '/shop/classify',
                    name: 'classifysetting',
                    component: () => import('@/views/shop/classifySetting.vue')
                },
                {
                    path: '/shop/productad',
                    name: 'productadmin',
                    component: () => import('@/views/shop/productAdmin.vue')
                },
                {
                    path: '/shop/productin',
                    name: 'productinquiry',
                    component: () => import('@/views/shop/productInquiry.vue')
                },
                {
                    path: '/shop/productst',
                    name: 'productstock',
                    component: () => import('@/views/shop/productStock.vue')
                },
                {
                    path: '/shop/producttp',
                    name: 'producttype',
                    component: () => import('@/views/shop/productType.vue')
                },
                {
                    path: '/shop/delivery',
                    name: 'deliveryadmin',
                    component: () => import('@/views/shop/deliveryAdmin.vue')
                },
                {
                    path: '/shop/incomplete',
                    name: 'incompleteorder',
                    component: () => import('@/views/shop/incompleteOrder.vue')
                },
                {
                    path: '/sale/calculate',
                    name: 'salecalculate',
                    component: () => import('@/views/sale/saleCalculate.vue')
                },
                {
                    path: '/sale/ranking',
                    name: 'saleranking',
                    component: () => import('@/views/sale/saleRanking.vue')
                },
                {
                    path: '/sale/history',
                    name: 'salehistory',
                    component: () => import('@/views/sale/saleHistory.vue')
                },
                {
                    path: '/',
                    name: 'dashboard',
                    component: () => import('@/views/Dashboard.vue')
                },
                {
                    path: '/uikit/formlayout',
                    name: 'formlayout',
                    component: () => import('@/views/uikit/FormLayout.vue')
                },
                {
                    path: '/uikit/input',
                    name: 'input',
                    component: () => import('@/views/uikit/Input.vue')
                },
                {
                    path: '/uikit/floatlabel',
                    name: 'floatlabel',
                    component: () => import('@/views/uikit/FloatLabel.vue')
                },
                {
                    path: '/uikit/invalidstate',
                    name: 'invalidstate',
                    component: () => import('@/views/uikit/InvalidState.vue')
                },
                {
                    path: '/uikit/button',
                    name: 'button',
                    component: () => import('@/views/uikit/Button.vue')
                },
                {
                    path: '/uikit/table',
                    name: 'table',
                    component: () => import('@/views/uikit/Table.vue')
                },
                {
                    path: '/uikit/list',
                    name: 'list',
                    component: () => import('@/views/uikit/List.vue')
                },
                {
                    path: '/uikit/tree',
                    name: 'tree',
                    component: () => import('@/views/uikit/Tree.vue')
                },
                {
                    path: '/uikit/panel',
                    name: 'panel',
                    component: () => import('@/views/uikit/Panels.vue')
                },

                {
                    path: '/uikit/overlay',
                    name: 'overlay',
                    component: () => import('@/views/uikit/Overlay.vue')
                },
                {
                    path: '/uikit/media',
                    name: 'media',
                    component: () => import('@/views/uikit/Media.vue')
                },
                {
                    path: '/uikit/menu',
                    component: () => import('@/views/uikit/Menu.vue'),
                    children: [
                        {
                            path: '/uikit/menu',
                            component: () => import('@/views/uikit/menu/PersonalDemo.vue')
                        },
                        {
                            path: '/uikit/menu/seat',
                            component: () => import('@/views/uikit/menu/SeatDemo.vue')
                        },
                        {
                            path: '/uikit/menu/payment',
                            component: () => import('@/views/uikit/menu/PaymentDemo.vue')
                        },
                        {
                            path: '/uikit/menu/confirmation',
                            component: () => import('@/views/uikit/menu/ConfirmationDemo.vue')
                        }
                    ]
                },
                {
                    path: '/uikit/message',
                    name: 'message',
                    component: () => import('@/views/uikit/Messages.vue')
                },
                {
                    path: '/uikit/file',
                    name: 'file',
                    component: () => import('@/views/uikit/File.vue')
                },
                {
                    path: '/uikit/charts',
                    name: 'charts',
                    component: () => import('@/views/uikit/Chart.vue')
                },
                {
                    path: '/uikit/misc',
                    name: 'misc',
                    component: () => import('@/views/uikit/Misc.vue')
                },
                {
                    path: '/blocks',
                    name: 'blocks',
                    component: () => import('@/views/utilities/Blocks.vue')
                },
                {
                    path: '/utilities/icons',
                    name: 'icons',
                    component: () => import('@/views/utilities/Icons.vue')
                },
                {
                    path: '/pages/timeline',
                    name: 'timeline',
                    component: () => import('@/views/pages/Timeline.vue')
                },
                {
                    path: '/pages/empty',
                    name: 'empty',
                    component: () => import('@/views/pages/Empty.vue')
                },
                {
                    path: '/pages/crud',
                    name: 'crud',
                    component: () => import('@/views/pages/Crud.vue')
                },
                {
                    path: '/documentation',
                    name: 'documentation',
                    component: () => import('@/views/utilities/Documentation.vue')
                }
            ]
        },
        {
            path: '/landing',
            name: 'landing',
            component: () => import('@/views/pages/Landing.vue')
        },
        {
            path: '/pages/notfound',
            name: 'notfound',
            component: () => import('@/views/pages/NotFound.vue')
        },

        {
            path: '/auth/login',
            name: 'login',
            component: () => import('@/views/pages/auth/Login.vue')
        },
        {
            path: '/auth/access',
            name: 'accessDenied',
            component: () => import('@/views/pages/auth/Access.vue')
        },
        {
            path: '/auth/error',
            name: 'error',
            component: () => import('@/views/pages/auth/Error.vue')
        }
    ]
});

export default router;
