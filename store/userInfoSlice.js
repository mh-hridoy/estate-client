import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: null
}

export const userInfoSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            return { ...state, user: action.payload.user }
        },
        logout: (state) => {
            return { ...state, user: null }
        }

    },
})

// Action creators are generated for each case reducer function
export const { login, logout } = userInfoSlice.actions

export default userInfoSlice.reducer