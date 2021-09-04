import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: null,
    token: "",
    requestedUrl: "",
    // storeQuery: ""
}

export const userInfoSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            return { ...state, user: action.payload.user, token: action.payload.token }
        },
        // logout: (state) => {
        //     state.user = null
        //     state.token = ""
        //     state.requestedUrl = ""
        //     return state;
        // },
        storeRequestedUrl: (state, action) => {
            return { ...state, requestedUrl: action.payload }
        },
        // storeFullQuery: (state, action) => {
        //     return { ...state, requestedUrl: action.payload }

        // }

    },
})

// Action creators are generated for each case reducer function
export const { login, storeRequestedUrl } = userInfoSlice.actions

export default userInfoSlice.reducer