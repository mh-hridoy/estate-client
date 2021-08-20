import React from 'react'
import ProtectedPage from '../../components/ProtectedPage'

const index = () => {
    return (
        <ProtectedPage>
            <h1>Protected page started from this.</h1>
        </ProtectedPage>
    )
}

export default index
