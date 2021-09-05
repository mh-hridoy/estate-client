import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: null,
    token: "",
    requestedPath: "",
    requestedQuery: {},
    inLoginPage: false
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
        storeRequestedPath: (state, action) => {
            return { ...state, requestedPath: action.payload }
        },

        setInLoginPage: (state, action) => {
            return { ...state, inLoginPage: action.payload }

        },
        storeRequestedQuery: (state, action) => {
            return { ...state, requestedQuery: action.payload }
        },
        // storeFullQuery: (state, action) => {
        //     return { ...state, requestedUrl: action.payload }
        // }
    },
})

// Action creators are generated for each case reducer function
export const { login, storeRequestedPath, setInLoginPage, storeRequestedQuery } = userInfoSlice.actions

export default userInfoSlice.reducer