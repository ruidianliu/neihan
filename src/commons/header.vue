<template>
	<div id="header">	
      <router-link 
        v-for="item in nav"
        tag="span" 
        :to="{name: item.umeng_event}"
        key="item.name"
        >
        {{item.name}}

      </router-link> 
	</div>
</template>

<style scoped>

  #header{
    position: fixed;
    padding:  .05rem 0 .1rem 0;
    width: 100%;
    left: 0;
    top: 0;
    border-bottom: 1px solid rgba(136, 136, 136, 0.27);
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #fff;
    z-index: 99;
  }

  .router-link-active:hover:after{
  	background: #ff2f77;
  	border: .03rem solid #ff2f77;
		border-radius: 30%;
  }
  span{
    font-family: '微软雅黑';
    font-size: .3rem;
    font-weight: bold;
    color: lightgray;
  }
   span:hover{
   	color: #000;
   }
  span:after{
  	content: '';
  	display: block;
  	background: transparent;
  	width: .2rem;
  	margin: 0 auto;
  	margin-top:2px;
  	border: .03rem solid transparent;
		border-radius: 30%;
  }


</style>

<script>
export default {
	props:['baseURL','url'],
	data () {
		return {
			title: 'index_index',
      nav: []
		}
	},
  created () {
    this.getTuiJian(this.baseURL,this.url)
  },
  methods: {
    getTuiJian (baseURL,url) {
      // 推荐
      this.$ajax({
        baseURL: baseURL,
        url: url
      }).then(res => {
        for(let i =0;i<res.data.data.length;i++){
          this.nav.push(res.data.data[i])
        }
        console.log(this.nav)
      })
    }
  }
}

</script>