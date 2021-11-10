import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
  token: "",
  requestedPath: "",
  requestedQuery: {},
  inLoginPage: false,
  buyItNotifications: null
  // storeQuery: ""
}

export const userInfoSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            return { ...state, user: action.payload.user, token: action.payload.token }
        },
        logout: (state) => {
            return { user: action.payload.user, token: action.payload.token }
        },
        storeRequestedPath: (state, action) => {
            return { ...state, requestedPath: action.payload }
        },

        setInLoginPage: (state, action) => {
            return { ...state, inLoginPage: action.payload }

        },
        storeRequestedQuery: (state, action) => {
            return { ...state, requestedQuery: action.payload }
        },
        updateNotifications: (state, action) => {
            return {
                ...state,
              buyItNotifications: [action.payload, ...state.buyItNotifications]
            }
        },
        getNotifications: (state, action) => {
            return { ...state, buyItNotifications : action.payload }
        },
        readNotification: (state, action) => {
            const index = action.payload.index
            const noti = state.buyItNotifications[index]
            noti.status = action.payload.status
            // return {
            //   ...state,
            //   buyItNotifications: [...state.buyItNotifications],
            // }
        }
        // storeFullQuery: (state, action) => {
        //     return { ...state, requestedUrl: action.payload }
        // }
    },
})

// Action creators are generated for each case reducer function
export const {
  login,
  storeRequestedPath,
  setInLoginPage,
  storeRequestedQuery,
  logout,
  updateNotifications,
  getNotifications,
  readNotification,
} = userInfoSlice.actions

export default userInfoSlice.reducer