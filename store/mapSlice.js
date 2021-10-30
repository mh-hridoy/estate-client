import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  address: null,
  //auto generated address lat long and bound lat long.
  center: null,
  fromHome : false
}

export const mapSlice = createSlice({
  name: "map",
  initialState,
  reducers: {
    searchedData: (state, action) => {
      return {
        ...state,
        address: action.payload.address,
        center: action.payload.center,
        fromHome: action.payload.fromHome,
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { searchedData } = mapSlice.actions

export default mapSlice.reducer
