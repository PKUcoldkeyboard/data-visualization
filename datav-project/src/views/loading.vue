<template>
    <div style="height: 100px;">
        <dv-loading>Loading</dv-loading>
    </div>
</template>
<script>
import {getJson} from '@/utils/request'
export default {
	data(){
		return{
			mydata:{}
		}
	},
	created(){
		getJson().then(res=>{
			this.mydata = res.data
		})
	}
}
</script>
<style>
</style>