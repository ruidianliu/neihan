<template>
<!-- 视频 -->
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
      baseURL: '/api_sp',
      url: 'neihan/stream/mix/v1/?content_type=-104'
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