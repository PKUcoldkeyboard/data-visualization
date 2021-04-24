<template>
  <div>
    <dv-full-screen-container>
      <p class="text">全屏容器</p>
      <p class="text2">你可以看到，在全屏容器中，其他的元素都无法点击，只有包含在全屏容器里的下面这个按钮可以点击。</p>
      <div><router-link to="/datav" class="link">返回主界面</router-link></div>
    </dv-full-screen-container>
    
  </div>
</template>

<script>
 export default {
 }
</script>
<style>
  html, body {
    padding: 0px;
    margin: 0px;
  }
  .text {
    font-size:24px;
    width: 100%;
    height: 40px;
    color: #fff;
    text-align: center;
    margin-top: 300px;
    vertical-align: middle;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .text2 {
    font-size:16px;
    width: 100%;
    height: 40px;
    color: #fff;
    text-align: center;
    /* margin-top: 300px; */
    vertical-align: middle;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .link {
    font-size:20px;
    height: 40px;
    color: #fff;
    text-align: center;
    /* margin-top: 360px; */
    margin-left: 46.7%;
    vertical-align: middle;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
</style>