<template>
	<div id="joke">
		<div 
			v-for="item in this.jokes"
			tag="div"
			v-if=""
			class="joke"
			> 
					<!-- 段子头部 -->
				<div class="joke_content_top">
					<div class="remen" v-if="item.group.status == 112">热门</div>
					<img class="tou" :src="item.group.user.avatar_url" alt="">
					<span class="username">{{item.group.user.name}}</span>
					<span class="close" @click="isRemove = !isRemove">x</span>
				</div>
				
				<!-- 段子内容 -->
				<div class="joke_content">
					<!-- 段子 -->
					<div class="joke_content_text" v-if="item.group.media_type == 0">
						<span class="category_name">#{{item.group.category_name}}#</span>	{{item.group.content}}
					</div>
					<!-- 图片 -->
					<div class="joke_content_pic" v-if="item.group.media_type == 1">
						<div class="category_name_content">
							<span class="category_name">#{{item.group.category_name}}#</span>		{{item.group.content}}
						</div>
						<img :src="item.group.large_image.url_list[0].url" alt="">
					</div>
					<!-- gif -->
					<div class="joke_content_gif" v-if="item.group.media_type == 2" @click="item.group.is_gif = !item.group.is_gif">
						<div class="category_name_content">
							<span class="category_name">#{{item.group.category_name}}#</span>		{{item.group.content}}
						</div>
						<div class="gifs">
							<img class="gif_cover" src="../assets/gif.png" v-if="item.group.is_gif">
							<img  :src="item.group.middle_image.url_list[0].url" v-if="item.group.is_gif">
							<img :src="item.group.large_image.url_list[0].url" v-else>
						</div>
						
					</div>
					<!-- 视频 -->
					<div class="joke_content_video" v-if="item.group.media_type == 3">
						<div class="category_name_content">
							<span class="category_name">#{{item.group.category_name}}#</span>		{{item.group.content}}
						</div>
						<video  controls>
							<source :src="item.group.origin_video.url_list[0].url">
		
						</video>
					</div>
				</div>
				
				<!-- 神评!= undefined -->
				<div class="hot_comments" v-if="item.comments.length > 0 ">
					<div v-for="i in item.comments">
						<div class="hot_comments_top">
							<div class="hot_comments_top_left">
								<img class="hot_comments_tou" :src="i.avatar_url" alt="">
								<span class="hot_comments_username">{{i.user_name}}</span>
							</div>
							<div class="hot_comments_top_right">
								<div class="hot_comments_top_dianzan">
									<img src="../assets/dz.svg" alt="">
									<span>{{i.digg_count}}</span>
								</div>
								<div class="hot_comments_top_zhuanfa">
									<img src="../assets/zf.svg" alt="">
								</div>
							</div>
						</div>
						<div class="hot_comments_text">
							{{i.text}}
						</div>
					</div>
				</div>
	
				<!-- 底部 -->
				<div class="joke_footer">
					<div class="joke_footer_left">
					<div class="zan" @click="">
						<img src="../assets/dz.svg" alt="" v-if="">
						<span>{{item.group.digg_count}}</span>
					</div>
					<div class="cai">
						<img src="../assets/dc.svg" alt="">
						<span>{{item.group.bury_count}}</span>
					</div>
					<div class="comment">
						<img src="../assets/info.svg" alt="">
						<span>{{item.group.comment_count}}</span>
					</div>
					</div>
					<div class="share">
						<img src="../assets/zf.svg" alt="">
						<span>{{item.group.share_count}}</span>
					</div>
				</div>
		</div>
			

	</div>

</template>

<style scoped>
	.gif_cover{
		position: absolute;
		width: 25% !important;
		left: 37%;
		top:30%;
	}
	.hot_comments{
		position: relative;
		margin: .1rem ;
		background: rgb(240, 240, 240)  ;
	}
	.hot_comments_top{
		display: flex;
		padding: .1rem ;
		justify-content: space-between;
	}
	.hot_comments_tou{
		height: .4rem;
		border-radius: 50%;
		float: left;
	}
	.hot_comments_username{
		padding-left: .1rem;
		font-size: .25rem;
	}
	.hot_comments_top_right{
		display: flex;
		justify-content: space-between;
	}
	.hot_comments_top_right img{
		height: .35rem
	}
	.hot_comments_top_dianzan{
		display: flex;
		padding-right: .2rem;
	}
	.hot_comments_top_dianzan span {
		line-height: .4rem;
		font-size: .25rem;
		color: #888888;
	}
	.hot_comments_text{
		text-align: left;
		padding: 0 .3rem .1rem .3rem;
		font-size: .25rem;
	}

	#joke{
		position: relative;
		width: 100%;
		font-size: .3rem;
		font-family: '微软雅黑';
		letter-spacing:.02rem;
		background: rgba(225, 224, 224, 0.7);
	}
	#joke>div{
		background:#fff;
		margin: .15rem 0;
	}
	.joke_content_top{
		height: .6rem;
		color: #888888;
		padding: .2rem .3rem ;
	}
	.remen{
		position: absolute;
		left: 0;
		padding-top: .1rem;
		background: #ff2f77;
		color: #fff;
		font-size: .02rem;
		float: left;
		width: .23rem;
		height: .5rem;
		vertical-align: center;
	}
	.tou{
		height: .6rem;
		border-radius: 50%;
		float: left;
	}
	.username{
		line-height: .4rem;
		padding: .1rem .2rem .2rem .2rem;
		font-size: .25rem;
		float: left;
	}
	.close{
		float: right;
	}
	.category_name{
		color: #ff2f77;
	}
	.category_name_content{
		text-align: left;
		padding: .15rem;
	}
	.joke_content_text{
		padding: .15rem;
		text-align: left;	
	}
	.joke_content_pic{
		position: relative;
		width: 100%;
	}
	.joke_content_pic img{
		width: 100%;
	}
	.joke_content_gif{
		position: relative;
		width: 100%;
	}
	.joke_content_gif img{
		width: 100%;
	}
	.gifs{
		position: relative;
	}
	.joke_footer{
		display: flex;
		padding: .2rem .2rem .2rem 0;
		justify-content: space-between;
	}
	.joke_footer img{
		height: .4rem;
		vertical-align: center;
	}
	.joke_footer div{
		display: flex;
	}
	.joke_footer span{
		font-size: .25rem;
		padding-left: .08rem;
		line-height: .4rem;
		color: #888888;
	}

	.joke_footer_left{
		width: 60%;
		display: flex;
		justify-content: space-around;
		align-content: center;
	}
</style>

<script>
export default {
	props: ['jokes'],
	data () {
		return {
			isRemove: true

		}
	}
}
</script>


