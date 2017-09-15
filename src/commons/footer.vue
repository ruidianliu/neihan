<template>
  <div class="footerr">
    <router-link
     v-for="(item,index) in nav" 
     :to="item.url"
     tag="p"
     key="item.title"
     @click.native="showOn(index)"
    >
      <img :src="item.icon" :class="{add: item.only}" v-show="!item.checked">
      <img :src="item.iconOn" v-show="item.checked">
      <span >{{ item.title }}</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'footerr',
  mounted () {
    for (let i in this.nav) {
      if (this.$route.path.indexOf(this.nav[i].path) === 1){
        this.nav[i].checked = true
      } else {
        this.nav[i].checked = false
      }
    }
  },
  data () {
    return {
      nav: [
        { 
          path: 'index',
          title: '首页',
          icon: require('@/assets/homepage.svg'),
          iconOn: require('@/assets/homepage_fill.svg'),
          url: '/',
          checked:true
        },
        { 
          path: 'friendShow',
          title: '段友秀',
          icon: require('@/assets/workbench.svg'),
          iconOn: require('@/assets/workbench_fill.svg'),
          url: '/friendShow',
          checked:false
        },
        {
          title: '',
          icon: require('@/assets/add.svg'),
          iconOn: require('@/assets/add.svg'),
          url: '',
          only:true,
          checked:false
       },
        { 
          path: 'find',
          title: '发现',
          icon: require('@/assets/search.svg'),
          iconOn: require('@/assets/search fill.svg'),
          url: '/find',
          checked:false
        },
        { 
          path: 'me',
          title: '我的',
          icon: require('@/assets/people.svg'),
          iconOn: require('@/assets/people_fill.svg'),
          url: '/me', 
          checked:false
        }
      ]
    }
  },
  methods: {
    showOn (index) {
      if(!this.nav[index].only){
        for(let i in this.nav){
          this.nav[i].checked = false
        }
        this.nav[index].checked = true
      }
      
    }
  }
}
</script>

<style scoped>

  .footerr{
    position: fixed;
    padding:  .05rem 0 .1rem 0;
    width: 100%;
    left: 0;
    bottom: 0;
    border-top: 1px solid rgba(136, 136, 136, 0.27);
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #fff;
    z-index: 99;
  }
  .footerr p{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  img{
    height: .55rem;
  }
  .add{
    height: .65rem;
    width: .7rem;
    border-radius: .08rem;
    background: #ff2f77;
  }
  span{
    font-size: .2rem;
  }

</style>