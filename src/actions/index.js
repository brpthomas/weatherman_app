import axios from 'axios';

const API_KEY ='f74ece7ce4eed1a66277cd31f303aded';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

//make a single varible to hold the action type, so we dont have to copy and paste string from different files
//so now it doesnt matter what the string is at the start
export const FETCH_WEATHER = 'FETCH_WEATHER';

//action creator => API call
export function fetchWeather(city) {
	//using string interporlation to build out the URL
	const url = `${ROOT_URL}&q=${city},us`;
	//axios call
	const request = axios.get(url);

	console.log('Request: ', request);
	
	return {
		type: FETCH_WEATHER,
		payload: request
	};

}