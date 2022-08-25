import { createSlice } from '@reduxjs/toolkit'

export const deneyim = createSlice({
  name: 'deneyim',
  initialState: [],

  reducers: {
    setDeneyim: (state, action) => {
      state.push(action.payload)
    },
  },
})
export const { setDeneyim } = deneyim.actions

export default deneyim.reducer
