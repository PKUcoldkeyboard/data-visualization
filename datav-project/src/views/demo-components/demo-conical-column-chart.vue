<template>
  <div>
  	<dv-conical-column-chart :config="config" style="width:800px;height:400px;" />
  </div>
</template>

<script>
import axios from 'axios'
  export default{
  data(){return{
  config:{ 
  }
  }},
  created(){
		axios.get('/data/elyar_data.json').then(res=>{
			this.config = res.data
			this.config.showValue= 'true'
			this.config.fontSize = 20
			this.config.img = [
    'http://datav.jiaminghi.com/img/conicalColumnChart/1st.png',
    'http://datav.jiaminghi.com/img/conicalColumnChart/2st.png',
    'http://datav.jiaminghi.com/img/conicalColumnChart/3st.png',
    'http://datav.jiaminghi.com/img/conicalColumnChart/4st.png',
    'http://datav.jiaminghi.com/img/conicalColumnChart/5st.png',
    'http://datav.jiaminghi.com/img/conicalColumnChart/6st.png',
    'http://datav.jiaminghi.com/img/conicalColumnChart/7st.png'
	]
		})
  }
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