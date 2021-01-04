//Глобальное хранилище приложения
import {createStore} from 'redux'
import rootReducer from "./reducers/RootReducer"

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() ); 

console.log(store)
console.log('Subscribe777', store.getState())

export default store;