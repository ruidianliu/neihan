import Vue from 'vue'
import Router from 'vue-router'


// 发现
import FindIndex from '@/pages/find/index'

// 首页
import Index from '@/pages/index/index'
import essay from '@/pages/index/essay'
import local from '@/pages/index/local'
import moment from '@/pages/index/moment'
import pic from '@/pages/index/pic'
import recommend from '@/pages/index/recommend'
import subscription from '@/pages/index/subscription'
import video from '@/pages/index/video'

//段友秀
import FriendShow from '@/pages/friendShow/index'

//我的
import Me from '@/pages/me/index'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/find',
      name: 'Find',
      component: FindIndex
    },
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      alias: '/',
      name: 'Index',
      component: Index,
      children: [
        {
          path:'/index/essay',
          name: 'essay',
          component: essay
        },
          {
          path:'/index/local',
          name: 'local',
          component: local
        },
          {
          path:'/index/moment',
          name: 'moment',
          component: moment
        },
          {
          path:'/index/pic',
          name: 'pic',
          component: pic
        },
          {
          path:'/index/recommend',
          name: 'recommend',
          component: recommend
        },
          {
          path:'/index/subscription',
          name: 'subscription',
          component: subscription
        },
          {
          path:'/index/video',
          name: 'video',
          component: video
        },
      ]
    },
    {
      path: '/friendShow',
      name: 'FriendShow',
      component: FriendShow
    },
    {
      path: '/me',
      name: 'Me',
      component: Me
    }


  ]
})
