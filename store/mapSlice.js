import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  address: null,
  //auto generated address lat long and bound lat long.
  center: null,
  fromHome: false,
  showPropertyModal: false,
  modalPropertyId: null,
  hoverId : null,
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
    propertyModalHandler: (state, action) => {
      return {
        ...state,
        showPropertyModal: action.payload.showPropertyModal,
        modalPropertyId: action.payload.modalPropertyId,
      }
    },
    onHover: (state, action) => {
      return {
        ...state, hoverId: action.payload
      }
    }
  },
})

// Action creators are generated for each case reducer function
export const { searchedData, propertyModalHandler, onHover } = mapSlice.actions

export default mapSlice.reducer
