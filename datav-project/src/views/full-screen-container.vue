<template>
  <div>
    <dv-full-screen-container><p class="text">content</p></dv-full-screen-container>
  </div>
</template>

<script>
 export default {
 }
</script>
<style>
  html, body {
    width: 100%;
    height: 100%;
    padding: 0px;
    margin: 0px;
  }
  .text {
    font-size:24px;
    width: 200px;
    height: 40px;
    color: #fff;
    text-align: center;
    vertical-align: middle;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
</style>