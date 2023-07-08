import { configureStore } from "@reduxjs/toolkit";
import MyCartSlice from "./MyCartSlice";
import MyLoginSlice from "./MyLoginSlice";
import MyProductSlice from './MyProductSlice'; 
import { combineReducers } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunk from "redux-thunk";
import MyStaffSlice from "./MyStaffSlice";

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
};

const rootReducer = combineReducers({
    login: MyLoginSlice,   //object of rootReducer
    product: MyProductSlice,
    cart: MyCartSlice,  //object of rootReducer
    myStaff: MyStaffSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
});

export default store;