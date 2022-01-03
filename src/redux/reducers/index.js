import { combineReducers } from 'redux';
import people from './people';
import planets from './planets';

const rootReducer = combineReducers({ people, planets });

export default rootReducer;
