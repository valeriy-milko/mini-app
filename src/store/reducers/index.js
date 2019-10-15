import { combineReducers } from 'redux';
import global from './global';
import { reducer as formReducer } from 'redux-form';

const rootReducer = () => combineReducers({
    global,
    form: formReducer,
});

export default rootReducer();
