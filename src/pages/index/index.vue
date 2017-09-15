<template>
	<div id="index_index">
    <headerr 
      baseURL="/api_tj" 
      url="neihan/service/tabs/">
    </headerr>
    <router-view></router-view>
    

	</div>
</template>

<style scoped>

</style>

<script>
import headerr from '@/commons/header'
import joke from '@/commons/joke'
export default {
	data () {
    return{

    }
	},
  components: {
    headerr,
    joke
  }
}

</script>