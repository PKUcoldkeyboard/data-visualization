<template>
  <div>
    <div class="text"><p>颜色均为自定义，仅供展示所有颜色改变的可能性，不代表个人喜好，请自行根据实际情况选择适合的颜色。</p></div>
    <div class="text"><p>dv-decoration-1</p></div>
    <dv-decoration-1 :color="['#ffff80', '#ff80ff']" style="width:200px;height:50px"/>
    <br><br>
    <br><br>
    <div class="text"><p>dv-decoration-2</p></div>
    <dv-decoration-2 :color="['#80ffff']" style="width:200px;height:200px;" dur="3" :reverse="false"/>
    <br><br>
    <div class="text"><p>dv-decoration-3</p></div>
    <dv-decoration-3 style="width:250px;height:30px;" :color="['#8080ff', '#404040']"/>
    <br><br>
    <div class="text"><p>dv-decoration-4</p></div>
    <dv-decoration-4 style="width:150px;height:5px;" dur="8" :reverse="true" :color="['#44ff44', '#ff44ff']"/>
    <br><br>
    <div class="text"><p>dv-decoration-5</p></div>
    <dv-decoration-5 style="width:300px;height:40px;" :color="['#ff00ff', '#80ff00']" />
    <br><br>
    <div class="text"><p>dv-decoration-6</p></div>
    <dv-decoration-6 style="width:300px;height:30px;" :color="['#80ff80', '#40ffff']"/>
    <br><br>
    <div class="text"><p>dv-decoration-7</p></div>
    <dv-decoration-7 style="width:150px; height:30px; font-size:20px; color:white" :color="['#80ffff', '#ff80ff']">Decoration</dv-decoration-7>
    <br><br>
    <div class="text"><p>dv-decoration-8</p></div>
    <dv-decoration-8 style="width:300px;height:50px;" :color="['#80ffff', '#ff80ff']" />
    <br><br>
    <div class="text"><p>dv-decoration-9</p></div>
    <dv-decoration-9 style="width:200px;height:200px; color:white; font-size:12px" :color="['#808080', '#40ffff']" dur="10">dv-decoration-9</dv-decoration-9>
    <br><br>
    <div class="text"><p>dv-decoration-10</p></div>
    <dv-decoration-10 style="width:90%;height:5px;" :color="['#80ffff', '#ffffff']" />
    <br><br>
    <div class="text"><p>dv-decoration-11</p></div>
    <dv-decoration-11 style="width:200px; height:60px; color:white" :color="['#44ff00', '#ff44ff']">标题</dv-decoration-11>
    <br><br>
    <div class="text"><p>dv-decoration-12</p></div>
    <dv-decoration-12 style="width:150px;height:150px;" :color="['#8080ff', '#ff8080']" scanDur="8" haloDur="1" />
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