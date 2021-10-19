// import { createSlice } from "@reduxjs/toolkit";
// import menuData from "../data/menuData";

// const initialState = {
//   items: [],
//   restaurent: null,
//   total: 0,
// };

// export const cartSlice = createSlice({
//     name: 'cart',
//     initialState,
//     reducers:{
//         setCart:(state, action) => {
//             state.items = action.payload;
//         },
//         setRemoveItems:(state, action) => {
//          delete state.items[action.payload]
//         },
//         setRestaurent:(state, action) => {
//             state.restaurent = action.payload;
//         }
//     },
 
// })

// export const {setCart,setRestaurent,setRemoveItems} = cartSlice.actions;

// export const selectCart = (state) => state.cart.items;

// export const selectRestaurent = (state) => state.cart.restaurent;




// export default cartSlice.reducer

// const cartItems = (state=[],action) => {
//     switch(action.type) {
//         case 'ADD_TO_CART':
//             let total = 0;
//             return {
//                 ...state,
//                 state:[action.payload],
//                 total: state.total + action.payload.price
//                 // [...state, action.payload]
//             } 
//         case 'REMOVE_CART':
//             return state.filter(
//               (cartItem) => cartItem.id !== action.payload.id
//             );

//     }
//     return state;
// }

// export default cartItems;

const initialState = {
  cart: [],
  total: 0,
};

const cartReducer = (state = initialState,action) => {
    switch (action.type) {
        case 'ADD_TO_CART':    
        return {
                ...state,
                cart: [action.payload, ...state.cart],
                total: state.total + action.payload.cost,
                
            }

        case 'REMOVE_CART' :
             return {
                ...state,
                cart: state.cart.filter((item, i) => i !== action.payload.index),
                // total: state.total - action.payload.item.price
            }
        default:
            return state
    }
}

export default cartReducer