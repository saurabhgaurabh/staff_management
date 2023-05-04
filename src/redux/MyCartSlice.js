import { createSlice } from "@reduxjs/toolkit";

export const MyCartSlice = createSlice({
    name: 'cart',  // product is slice name
    initialState: { 
        product: [],
        cardProduct: [],
     }, 
    reducers: {

        addProductToMyCart:(state,action)=>{
            state.cardProduct.push(...action.payload)
        }

    }
});


export const {addProductToMyCart } = MyCartSlice.actions;
export default MyCartSlice.reducer;