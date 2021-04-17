<template>
  <div>
  	<div class="text"><p>进度池展示</p></div>
  	<dv-percent-pond :config="config1" style="width:200px;height:100px;" />
  	<br>
  	<div class="text"><p>调节边框</p></div>
  	<dv-percent-pond :config="config2" style="width:200px;height:100px;" />
  	<br>
  	<div class="text"><p>调节颜色</p></div>
  	<dv-percent-pond :config="config3" style="width:200px;height:100px;" />
  </div>
</template>

<script>
  export default{
  data(){return {
  
  config1:{
  value: 66,
  localGradient: true
  },

  config2:{
  value:55
  },

  config3:{
  colors: ['#01c4f9', '#c135ff'],
  value: 88,
  localGradient: true
  }
  }}
  }
</script>
<style>
div{
	margin:0 auto;
  }

.text{
    font-size:24px;
    width: 200px;
    height: 80px;
    color: #fff;
    text-align: center;
    vertical-align: middle;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
</style>