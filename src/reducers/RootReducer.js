//combineReducers() позволяет объединить несколько редьюсеров в один.
import {combineReducers} from 'redux'
//import Card from "./cards.js"
import Columns from "./reducer.js" //панель из редьюсера

const rootReducer = combineReducers ( {
    Column: Columns//, Card: Card //дальше могли бы быть другие редьюсеры: Card2, Card3, Card4 ...
})

export default rootReducer;