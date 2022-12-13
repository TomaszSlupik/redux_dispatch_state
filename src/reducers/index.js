import { combineReducers } from "redux";
import todo from "./todo_reducers";
import carlist from "./carslist_reducers";
import booklist from "./booklist_reducers";

export default combineReducers ({
    todo, carlist, booklist
    
})