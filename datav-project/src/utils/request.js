import axios from 'axios'

export function getJson(){
	return axios.get('/data/mydata.json')
}

export function getData() {
	return axios.get('/data/data.json')
}
