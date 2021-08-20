import { configureStore } from '@reduxjs/toolkit'
import userInfoSlice from './userInfoSlice'
import { Provider } from 'react-redux'

const store = configureStore({
    reducer: {
        user: userInfoSlice
    },
})


const StoreProvider = (props) => {


    return (
        <Provider store={store}>
            {props.children}
        </Provider>
    )

}


export default StoreProvider;
