import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { SyncOutlined } from '@ant-design/icons'
import { BackTop, message } from 'antd';
import Breadcrumbs from 'nextjs-breadcrumbs';
import useWindowSize from "../utils/useWindowSize"; //window mehtods sucks in react and next.. be carefull to play around with it.
import MenuInsideProtected from './MenuInsideProtected';
import { storeRequestedPath, storeRequestedQuery } from '../store/userInfoSlice'


const alltext = (
    <p> <b>ATTENTION/WARNING: </b> THESE TRANSACTIONS INVOLVE RISK.YOU MAY LOSE SOME OR ALL OF YOUR CAPITAL.The services offered may not be suitable for you.You must do your own due diligence and verify any information provided.We encourage you to seek advice from an independent financial advisor, real estate professional, accountant, tax advisor and / or attorney.Unless otherwise stated, the figures shown in all documents provided(including, but not limited to, information regarding title, ownership, liens, tax liens, taxes, current property values, after repair property values, and costs of repairs or renovations) are NOT guaranteed to be accurate and are estimates only.Some estimates are high; some are low.There are NO representations being made that any transaction will achieve profits similar to those being shown and there are NO GUARANTEES OF RESULTS OR PROFITS.DO NOT ENTER INTO THESE TRANSACTIONS UNLESS YOU ARE PREPARED TO LOSE SOME OR ALL OF YOUR CAPITAL. </p>
)

const miniText = (
    <p> <b>ATTENTION/WARNING: </b> THESE TRANSACTIONS INVOLVE RISK.YOU MAY LOSE SOME OR ALL OF YOUR CAPITAL.The services offered may not be suitable for you.You must do your own due diligence and verify any information provided.We encourage you to seek advice from an independent financial advisor, real estate professional, accountant, tax advisor and / or attorney.Unless otherwise stated... </p>
)

const style = {
    height: 30,
    width: 25,
    lineHeight: '40px',
    borderRadius: 4,
    backgroundColor: 'var(--hover-color)',
    color: '#fff',
    textAlign: 'center',
    fontSize: 10,
    transform: "translateX(150%)",
};


const ProtectedPage = (props) => {
    const router = useRouter()
    const user = useSelector((state) => state.user.user)
    const [isLoading, setIsLoading] = useState(true)
    const [isSeeMore, setIsSeeMore] = useState(false)
    const [isFullScreen, setIsFullScreen] = useState(false)

    const { width } = useWindowSize()
    const dispatch = useDispatch()

    const query = router.query

    useEffect(() => {
        if (Object.keys(query).length !== 0) {

            if (query.propertyinfo) delete query.propertyinfo

            dispatch(storeRequestedQuery(query))
        }


    }, [Object.keys(query).length !== 0])

    

        
    useEffect(() => {
        const userInfo = localStorage.getItem('user')
        if (userInfo || user !== null) {
            setIsLoading(false)
        
        } else if (!userInfo || user === null) {
            dispatch(storeRequestedPath(window.location.href.split("estate-client-p.herokuapp.com" )[1])) //checking...
            message.warning("You are not authenticated! Please login and try again.")
            router.push('/signup')
        }
    }, [])


    useEffect(() => {
        if (width <= 1000) {
            setIsFullScreen(false)
        } else {
            setIsFullScreen(true)
        }
    }, [width])

    const seeMoreHandler = (e) => {
        e.preventDefault()

        setIsSeeMore(true)
    }

    const seeLessHandler = (e) => {
        e.preventDefault()

        setIsSeeMore(false)
    }


    return (

        <>
            <BackTop visibilityHeight={600}>
                <div style={style}>UP</div>
            </BackTop>
            {isLoading ?
                <div className="loadingDiv">
                    <SyncOutlined spin size="large" className="pageLoading" />
                </div>
                :
                <>
                    <MenuInsideProtected />

                    <Breadcrumbs omitRootLabel listClassName="crumbList" containerClassName="crumbContainer" inactiveItemClassName="inActiveCrumb" activeItemClassName="activeCrumb" />

                    <div className="warningContainer">
                        {!isFullScreen &&
                            <>
                            {!isSeeMore ? miniText : alltext}

                            {!isSeeMore ? <a onClick={seeMoreHandler}>See More</a> : <a onClick={seeLessHandler}>See Less</a>}

                            </>
                        }

                        {isFullScreen && alltext}

                    </div>
                    {props.children}

                </>

            }
        </>
    )
}

export default ProtectedPage

