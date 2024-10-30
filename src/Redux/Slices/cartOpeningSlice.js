import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  btnCart: false,
  nameClassCart: 'cart disabled',
}

export const cartOpeningSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setClassCart: (state, action) => {
    state.btnCart = action.payload;
      if (state.btnCart === true){
        state.nameClassCart = 'cart'
      } else if (state.btnCart === false){
        state.nameClassCart = 'cart disabled'
      }
    },
    }
  },)

export const { setClassCart } = cartOpeningSlice.actions

export default cartOpeningSlice.reducer