import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState : {
        items : []
    },
    reducers : {
        addItem : (state, action) =>{
            console.log('payload', action);
            console.log('state', state.items);
            state.items.push(action.payload);
        },
        removeItem: (state, action)=>{
            // update this logic
            state.items.pop();
        },
        clearCart : (state)=>{
            state.items = []
        }
    }
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;