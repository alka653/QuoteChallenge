export default function reducer(state = {}, action){
	switch(action.type){
		case 'SET_CATEGORY_QUOTE_LIST': {
			return {...state, ...action.payload}
		}
		case 'SET_QUOTE_DAY': {
			return {...state, ...action.payload}
		}
		default: 
			return state
	}
	return state
}