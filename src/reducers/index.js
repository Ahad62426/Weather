import { combineReducers } from 'redux';
import WeahtherReducer from './reducer_weather';


const rootReducer = combineReducers({
  weather: WeahtherReducer
});

export default rootReducer;
