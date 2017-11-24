import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Film from '../components/film/film'
import Index from '../components/nav/nav'
import Book from '../components/book/book'
import Broadcast from '../components/broadcast/broadcast'
import group from '../components/group/group'
import index from '../components/index/index'
import search from '../components/search/search'
Vue.use(Router)

export default new Router({
  routes: [
     {
      path: '/',
      component:index,
    },
    {
      path: '/Film',
      component: Film
    },
    {
      path: '/Book',
      component: Book
    },
    {
      path: '/Broadcast',
      component: Broadcast
    },
    {
      path: '/group',
      component: group
    },
    {
      path: '/search',
      component: search
    }
  ]
})
