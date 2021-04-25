<template>
  <div>
      <div class="text"><p>百分比展示</p></div>
  		<dv-active-ring-chart :config="config1" style="width:400px;align:'center';height:400px;font-size:12px;" />
      <br><br>
  </div>
</template>

<script>
import axios from 'axios'
  export default{
  data(){return {
			config1:{
				
				}
			
  }
  },
  created(){
		axios.get('/data/elyar_data.json').then(res=>{
			this.config1 = res.data
			this.config1.radius='45%'
			this.config1.activeRadius = '55%'
			this.config1.lineWidth = 25
			this.config1.digitalFlopStyle={
				fontSize:20,
				textAlign:"left"
			}
		})
  }
  }
</script>
<style>
div{
	margin:0 auto;
	font-size:12px;
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