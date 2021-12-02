import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    propertyId: null,

}

export const singleRecordSlice = createSlice({
    name: 'property',
    initialState,
    reducers: {
        storeData: (state, action) => {
            return { ...state, propertyId: action.payload }
        }
    },
})

// Action creators are generated for each case reducer function
export const { storeData } = singleRecordSlice.actions

export default singleRecordSlice.reducer