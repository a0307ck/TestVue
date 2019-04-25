import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import BookAdmin from '@/components/BookAdmin'
import BookList from '@/components/BookList'
import productDetail from '@/pages/product/productDetail'
import Home from '@/pages/home/home'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/book/add',
      name: 'BookAdmin',
      component: BookAdmin
    },
    {
      path: '/book/list',
      name: 'BookList',
      component: BookList
    },
    {
      path: '/book/detail',
      name: 'productDetail',
      component: productDetail
    }
  ]
})
