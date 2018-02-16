import {FETCH_WEATHER} from '../actions/index';


export default function(state = [], action) {
	//switch statement to allow
	//never mutate states
	switch (action.type) {
	case 'FETCH_WEATHER':
		//use concat so you dont mutate state but return a new state
		// return state.concat([action.payload.data]);	

		// the three ... will a flatten array
		return [ action.payload.data, ...state ] // will look like [city, city, city]
	}	
	return state;
}