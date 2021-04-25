import axios from 'axios'

export function getJson(){
	return axios.get('/data/mydata.json')
}

