import { configureStore } from '@reduxjs/toolkit'
import userInfoSlice from './userInfoSlice'
import { Provider } from 'react-redux'
import { useEffect } from 'react'
import { login } from './userInfoSlice'

const store = configureStore({
    reducer: {
        user: userInfoSlice
    },
})


const StoreProvider = (props) => {

    useEffect(() => {
        const userData = localStorage.getItem('user')

        if (userData) {
            store.dispatch(login(JSON.parse(userData)))
        }


    }, [])


    return (
        <Provider store={store}>
            {props.children}
        </Provider>
    )

}


export default StoreProvider;
