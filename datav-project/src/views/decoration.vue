<template>
  <div>
    <div class="text"><p>颜色均为自定义，仅供展示所有颜色改变的可能性，不代表个人喜好，请自行根据实际情况选择适合的颜色。</p></div>
    <dv-decoration-1 :color="['#ffff80', '#ff80ff']" style="width:200px;height:50px"/>
    <br><br>
    <br><br>
    <dv-decoration-2 :color="['#80ffff']" style="width:200px;height:200px;" dur="3" :reverse="false"/>
    <br><br>
    <dv-decoration-3 style="width:250px;height:30px;" :color="['#8080ff', '#404040']"/>
    <br><br>
    <dv-decoration-4 style="width:150px;height:5px;" dur="8" :reverse="true" :color="['#44ff44', '#ff44ff']"/>
    <br><br>
    <dv-decoration-5 style="width:300px;height:40px;" :color="['#ff00ff', '#80ff00']" />
    <br><br>
    <dv-decoration-6 style="width:300px;height:30px;" :color="['#80ff80', '#40ffff']"/>
    <br><br>
    <dv-decoration-7 style="width:150px; height:30px; font-size:20px; color:white" :color="['#80ffff', '#ff80ff']">Decoration</dv-decoration-7>
  </div>
</template>

<script>
  export default{
  }
</script>
<style>
  div{
	margin:0 auto;
  }

.text{
    font-size:16px;
    width: 840px;
    /* height: 80px; */
    color: #fff;
    vertical-align: middle;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
</style>