import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  categoryID: 0,
  categoryURl: 'https://671698cd3fcb11b265d31163.mockapi.io/items',
}

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    addCategoryID: (state, action) => {
      state.categoryID = action.payload
    },
    ssll: (state) => {
      if (state.categoryID === 0) {
        state.categoryURl = 'https://671698cd3fcb11b265d31163.mockapi.io/items'
      } else if (state.categoryID === 1) {
        state.categoryURl = 'https://671698cd3fcb11b265d31163.mockapi.io/items?sortBy=price&order=desc'
      } else if (state.categoryID === 2) {
        state.categoryURl = 'https://671698cd3fcb11b265d31163.mockapi.io/items?sortBy=price&order=asc'
      } else if (state.categoryID === 3) {
        state.categoryURl = 'https://671698cd3fcb11b265d31163.mockapi.io/items?sortBy=popular&order=desc'
      } else if (state.categoryID === 4) {
        state.categoryURl = 'https://671698cd3fcb11b265d31163.mockapi.io/items?sortBy=popular&order=asc'
      }
    },
    addToCart: (state, action) => {
      state.value += action.payload
    },
  },
})

export const { addCategoryID, ssll, addToCart } = categoriesSlice.actions

export default categoriesSlice.reducer