import { createSlice } from "@reduxjs/toolkit";

export const MyProductSlice = createSlice({
    name: 'product',  // product is slice name
    initialState: {
        cardProduct: [],
        favoriteProduct: [],
    },
    reducers: {
        addProductToMyCart(state, action) {
            let myindex = -1;
            state.cardProduct?.map((item, index) => {
                if (item.item_id == action.payload.item_id) {
                    myindex = index;
                }
            });
            
            if (myindex == -1) {
                state.cardProduct?.push({
                    HSN_code: action.payload.HSN_code,
                    MRP: action.payload.MRP,
                    category_id: action.payload.category_id,
                    code: action.payload.code,
                    createdAt: action.payload.createdAt,
                    description: action.payload.description,
                    discount: action.payload.discount,
                    flag: action.payload.flag,
                    gst: action.payload.gst,
                    item_id: action.payload.item_id,
                    list_price: action.payload.list_price,
                    name: action.payload.name,
                    purchase_price: action.payload.purchase_price,
                    quantity: 1,                    
                    fileName: action.payload.fileName,                    
                    sale_price: action.payload.sale_price,
                    type: action.payload.type,
                    units: action.payload.units,
                    updatedAt: action.payload.updatedAt,
                    user_id: action.payload.user_id
                })
            } else {
                state.cardProduct[myindex].quantity = state.cardProduct[myindex].quantity + 1;
            }
        },
        addProductToFavorite(state, action) {
            let myindex = -1;
            state.favoriteProduct?.map((item, index) => {
                if (item.item_id == action.payload.item_id) { 
                    myindex = index;
                }
            });
            if (myindex == -1) {
                state.favoriteProduct?.push({
                    category_id: action.payload.category_id,
                    gst: action.payload.gst,
                    item_id: action.payload.item_id,
                    image: action.payload.image,
                    name: action.payload.name,
                    MRP: action.payload.MRP,
                    HSN_code: action.payload.HSN_code,
                    code: action.payload.code,
                    quantity: action.payload.quantity-1,
                    createdAt: action.payload.createdAt,
                    description: action.payload.description,
                    discount: action.payload.discount,
                    flag: action.payload.flag,
                    list_price: action.payload.list_price,
                    purchase_price: action.payload.purchase_price,
                    sale_price: action.payload.sale_price,
                    fileName: action.payload.fileName,  
                    type: action.payload.type,
                    units: action.payload.units,
                    updatedAt: action.payload.updatedAt,
                    user_id: action.payload.user_id
                })
            } else {
                state.favoriteProduct[myindex].quantity = state.favoriteProduct[myindex].quantity + 1;
            }
        },
        removeMyCartItem(state, action) {
            let myindex = -1;
            state.cardProduct?.map((item, index) => {
                if (item.item_id == action.payload.item_id) {
                    myindex = index;
                }
            });
            if (myindex > -1) {
                if (state.cardProduct[myindex].quantity > 1) {
                    state.cardProduct[myindex].quantity = state.cardProduct[myindex].quantity - 1;
                }
            }
        },
        fixMyCartItem(state, action) {
            let myindex = -1;
            state.cardProduct?.map((item, index) => {
                if (item.item_id == action.payload.item_id) {
                    myindex = index;
                }
            });
            if (myindex > -1) {
                state.cardProduct[myindex].quantity = state.cardProduct[myindex].quantity - 1;
            }
        },
        fixOrderMyCartItem(state, action) {
            let myindex = -1;
            state.cardProduct?.map((item, index) => {
                if (item.item_id == action.payload.item_id) {
                    myindex = index;
                }
            });
            if (myindex > -1) {
                state.cardProduct[myindex].quantity = state.cardProduct[myindex].quantity + 1;
            }
        },
        deleteItemFromAddToCart(state, action) {
            state.cardProduct = state.cardProduct.filter(
                (cardProduct) => cardProduct.item_id !== action.payload.item_id
            )
        },
        deleteItemFromFavoriteItem(state, action) {
            state.favoriteProduct = state.favoriteProduct.filter(
                (favoriteProduct) => favoriteProduct.item_id !== action.payload.item_id
            )
        },
        totalAmountOfquantity(state, action) {
            let total = 0;
            state.cardProduct?.map((item, index) => {
                if (item.item_id == action.payload) {
                    total = index;
                }
            });
            if (state.cardProduct[total].quantity * state.cardProduct[total].price);
        },
        ImageDataForAddToCart(state,action){
            state.ImageAddToCart = action.payload
        }
    },
});


export const { removeProductToFavorite, ImageDataForAddToCart,totalAmountOfquantity, fixOrderMyCartItem, addMyProducts, addProductToMyCart, addProductToFavorite, removeMyCartItem, deleteItemFromFavoriteItem, fixMyCartItem, increasequantity, decreasequantity, deleteItemFromAddToCart } = MyProductSlice.actions;
export default MyProductSlice.reducer;