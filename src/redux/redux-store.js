import { createStore, combineReducers } from 'redux';
import helloReducer from './helloReducer';
import helloValueReducer from './helloValueReducer';


let reducers = combineReducers({
    helloReducer,
    helloValueReducer,
});

const store = createStore(reducers);

export default store;

store.subscribe(v => {
    console.log(store.getState().helloReducer)
    console.log(store.getState().helloValueReducer)
});
window.store = store;