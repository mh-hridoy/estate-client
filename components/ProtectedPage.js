import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'
import { SyncOutlined } from '@ant-design/icons'
import ShowMoreText from "react-show-more-text";



const ProtectedPage = (props) => {
    const router = useRouter()
    const user = useSelector((state) => state.user.user)
    const [isLoading, setIsLoading] = useState(false)


    useEffect(() => {
        const userInfo = localStorage.getItem('user')
        setIsLoading(true)
        if (userInfo || user !== null) {
            setIsLoading(false)

        } else if (!userInfo || user === null) {

            router.push('/signup')
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
                    {/* //add breadcrumb here */}

                    <ShowMoreText lines={4} more="More"
                        less="Less" expanded={false} truncatedEndingComponent={"..."} className="warningContainer" >

                        <p> <b>ATTENTION/WARNING: </b> THESE TRANSACTIONS INVOLVE RISK.YOU MAY LOSE SOME OR ALL OF YOUR CAPITAL.The services offered may not be suitable for you.You must do your own due diligence and verify any information provided.We encourage you to seek advice from an independent financial advisor, real estate professional, accountant, tax advisor and / or attorney.Unless otherwise stated, the figures shown in all documents provided(including, but not limited to, information regarding title, ownership, liens, tax liens, taxes, current property values, after repair property values, and costs of repairs or renovations) are NOT guaranteed to be accurate and are estimates only.Some estimates are high; some are low.There are NO representations being made that any transaction will achieve profits similar to those being shown and there are NO GUARANTEES OF RESULTS OR PROFITS.DO NOT ENTER INTO THESE TRANSACTIONS UNLESS YOU ARE PREPARED TO LOSE SOME OR ALL OF YOUR CAPITAL. </p>

                    </ShowMoreText>

                    {props.children}

                </>

            }
        </>
    )
}

export default ProtectedPage

    // <p> <b>ATTENTION/WARNING: </b> THESE TRANSACTIONS INVOLVE RISK.YOU MAY LOSE SOME OR ALL OF YOUR CAPITAL.The services offered may not be suitable for you.You must do your own due diligence and verify any information provided.We encourage you to seek advice from an independent financial advisor, real estate professional, accountant, tax advisor and / or attorney.Unless otherwise stated, the figures shown in all documents provided(including, but not limited to, information regarding title, ownership, liens, tax liens, taxes, current property values, after repair property values, and costs of repairs or renovations) are NOT guaranteed to be accurate and are estimates only.Some estimates are high; some are low.There are NO representations being made that any transaction will achieve profits similar to those being shown and there are NO GUARANTEES OF RESULTS OR PROFITS.DO NOT ENTER INTO THESE TRANSACTIONS UNLESS YOU ARE PREPARED TO LOSE SOME OR ALL OF YOUR CAPITAL. </p>
