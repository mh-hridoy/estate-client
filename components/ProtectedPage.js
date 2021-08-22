import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'
import { SyncOutlined } from '@ant-design/icons'


const ProtectedPage = (props) => {
    const router = useRouter()
    const user = useSelector((state) => state.user.user)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        const userInfo = localStorage.getItem('user')
        if (userInfo || user !== null) {
            setIsLoading(false)

        } else if (!userInfo || user === null) {

            router.push('/signup')
            toast.warn('You are not authenticated, please login and try again.')

        }

    }, [user])


    return (

        <>
            {isLoading ?
                <div className="loadingDiv">
                    <SyncOutlined spin size="large" className="pageLoading" />
                </div>
                :
                <>
                    {props.children}

                </>

            }
        </>
    )
}

export default ProtectedPage
