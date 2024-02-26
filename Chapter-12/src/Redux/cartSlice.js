import {createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice({

    name:'cart',
    initialState:{
        items:[]
    },
    reducers:{
        addItems: (state,action)=>{
            // mutating state
            state.items.push(action.payload);
        },
        removeItems:(state,action)=>{
            state.items.pop()
        },
        clearCart:(state,action)=>{
            // why can't state = []
            // cause we have to modify or mutate the state not reference to the state
            state.items.length = 0;  // equal to state = []

            // return{items:[]}  RTK says either mutate the existing state or return a new state
        }
    }
})
export const {addItems, removeItems, clearCart} = cartSlice.actions;
export default cartSlice.reducer;