<template>
  <div class="wrapper">
  	<div class="app-main">
		<transition name="fade" mode="out-in">
			<router-view></router-view>
		</transition>
	</div>
  </div>
</template>

<script>
  export default{
  }
</script>
<style>
	.wrapper{
		background: rgb(31,36,48);
		display: flex;
		display: -webkit-flex;
		width: 100%;
		align-items: center;
		justify-content: center;
	}
	.app-main{
		height: 1440px;
		width: 960px;
	}
</style>