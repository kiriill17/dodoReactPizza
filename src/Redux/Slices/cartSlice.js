import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  items: [],
}

export const cartSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.value += action.payload
    },
    addItem(state, action){
      state.items.push(action.payload);
    },
    removeItem(state, action){
      state.items = state.items.filter(obj => obj.id != action.payload);
    },
    clearItems(state){
      state.items = [];
      state.value = 0;
    }
  },
})

export const {  addToCart, clearItems, removeItem, addItem } = cartSlice.actions

export default cartSlice.reducer