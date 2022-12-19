import { combineReducers } from "redux";
import todo from "./todo_reducers";
import carlist from "./carslist_reducers";
import booklist from "./booklist_reducers";
import coffeelist from "./coffeelist_reducers";
import watchlist from "./watch_reducers";
import cakelist from "./cake_reducers";

export default combineReducers ({
    todo, carlist, booklist, coffeelist, watchlist, cakelist
    
})