import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: null,
    token: ""
}

export const userInfoSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            return { ...state, user: action.payload.user, token: action.payload.token }
        },
        logout: (state) => {
            return { ...state, user: null, token: "" }
        }

    },
})

// Action creators are generated for each case reducer function
export const { login, logout } = userInfoSlice.actions

export default userInfoSlice.reducer