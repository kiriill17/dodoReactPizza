import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../Redux/Slices/cartSlice'
import categoriesReducer from '../Redux/Slices/categoriesSlice'
import cartOpeningReducer from '../Redux/Slices/cartOpeningSlice'

export const store = configureStore({
  reducer: {
    cart: counterReducer,
    categories: categoriesReducer,
    cartOpening: cartOpeningReducer,
  },
})