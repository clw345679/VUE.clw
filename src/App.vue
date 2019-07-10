<template>
  <div class="d-app-wrap">
     <mt-header fixed title="顶部"></mt-header>
   
<router-view></router-view>


    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item " to="home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="menber">
				<span class="mui-icon mui-icon-contact mui-icon-icon-contact-filled"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="search">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
</div>



</template>

<script>
export default {
  data(){
    return {
      
    }
  }
}
</script>
