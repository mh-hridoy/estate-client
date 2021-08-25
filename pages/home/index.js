import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { SyncOutlined } from '@ant-design/icons'

const redirectToHome = () => {
    const router = useRouter()


    useEffect(() => {
        router.push('/')
    }, [])

    return (
        <div className="loadingDiv">
            <SyncOutlined spin size="large" className="pageLoading" />
        </div>
    )
}

export default redirectToHome
