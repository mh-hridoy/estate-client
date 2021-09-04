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

    //declare the axios instance method to chcek if the token is valid unless forece the client to logout.

    // axios.defaults.baseURL = 'https://api.example.com';
    // axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

    //declare the function for csurf protection.

    return (
        <Provider store={store}>
            {props.children}
        </Provider>
    )

}


export default StoreProvider;
