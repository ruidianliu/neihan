<template>
<!-- 段友圈 -->
	<div id="index_recommend">
	<joke :jokes="jokes"></joke>

	</div>

</template>

<style scoped>

</style>

<script>
import joke from '@/commons/joke'
export default {
	data () {
		return {
			jokes: []
		}
	},
	created () {
		  this.$ajax({
      baseURL: '/api_tj',
      url: 'neihan/stream/mix/v1/?content_type=-301'
    }).then(res => {
    	this.jokes = res.data.data.data
      console.log(res)
    })
	},
  components: {
    joke
  }
}

</script>