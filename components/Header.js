import React, { useEffect, useState } from 'react'
import { Row, Col } from 'antd'
import Image from 'next/image'
import Hamburger from './Hamburger'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import UserAvatar from './UserAvatar';
import { Button, message } from 'antd'
import axios from 'axios'
import NotiBar from './NotiBar'
// import { logout } from '../store/userInfoSlice'
import { getNotifications, updateNotifications } from "../store/userInfoSlice"
import io from "socket.io-client"



const Header = () => {
    const user = useSelector((state) => state.user.user)
    const router = useRouter()
    const { pathname } = router
    const [isLoading, setIsLoading] = useState(false)
    const [clickedToLogOut, setClickedToLogOut] = useState(false)
 const token = useSelector((state) => state.user.token)
 const dispatch = useDispatch()

    // const dispatch = useDispatch()

    const logoutHandle = async () => {
        setClickedToLogOut(true)

    }

    
     useEffect(() => {
       if (user !== null) {
         const fetchNotification = async () => {
           const { data } = await axios.get(
             `${process.env.NEXT_PUBLIC_MAIN_PROXY}/get-notifications/${user._id}`,
             {
               headers: {
                 Authorization: `Bearer ${token}`,
               },
               withCredentials: true,
             }
           )
           dispatch(getNotifications(data.buyItNotifications))
         }
         fetchNotification()
       }
     }, [user !== null])

    useEffect(() => {
      if (user !== null) {
        const socket = io(process.env.NEXT_PUBLIC_RAW_PROXY, {
          query: { userId: user._id },
        })
        socket.on("notifications", (data) => dispatch(updateNotifications(data)))
      }
    }, [user !== null])

    useEffect(() => {
        if (clickedToLogOut) {
                const logOutHandler = async () => {

                    try {
                        setIsLoading(true)
                        await axios.get(`${process.env.NEXT_PUBLIC_MAIN_PROXY}/logout`, { withCredentials: true })
                        setIsLoading(false)
                        localStorage.clear('user')
                        message.loading({ content: "Logging Out...", key: "1" })
                        router.push('/').then(() => router.reload())

                    } catch (err) {
                        setIsLoading(false)
                        message.warning({ content: "Something went wrong!", key: "1" })
                        router.push("/home/dashboard").then(() => router.reload())

                    }

                }
            logOutHandler()

        }

    }, [clickedToLogOut])

    const content = (
        <>
            {user &&
                <ul className="avatarList">
                    <li>
                        <Link href="/home/dashboard" >
                            <a id="dashboard" name='/home/dashboard' className={`avatarMenuItem ${pathname === "/home/dashboard" ? "active" : ""}`}>Dashboard</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/" >
                            <a id="userAccount" name='/' className={`avatarMenuItem ${pathname === "/" ? "active" : ""}`}>My Account</a>
                        </Link>
                    </li>
                    <li>
                    <Button onClick={logoutHandle} htmlType="submit" disabled={isLoading} loading={isLoading}>
                            Sign Out
                        </Button>
                    </li>


                </ul>
            }

        </>
    )

    return (
        <>
            <Row className="header" justify="space-between">
                <Col xs={16} md={8} wrap="true" >
                    <div className="logo-section">
                        <div className="logo">
                            <Image src="/favicon.ico" alt="logo" width="40" height="40" />
                        </div>

                        <div className="nameinfo">
                            <div className="name">
                                <strong>Estates Community</strong>

                            </div>
                            <div className="number">
                                (+1)847-XXX-XXXX</div>
                        </div>
                    </div>

                </Col>
                <Col xs={8} md={0}>
                    <div className="burgerContainer">
                        {user &&
                            <>
                                <NotiBar />


                                <div className="avatarContainer">
                                    <UserAvatar content={content} />
                                </div>

                            </>
                        }

                        <div className="hamBurger">
                            <Hamburger />
                        </div>
                    </div>

                </Col>
                <Col xs={0} md={12}>
                    <div className="fullMenu" >
                        <ul className="fullMenuList">
                            <li>
                                <Link href="/" >
                                    <a id="home" name='/' className={`fullMenuItem ${pathname === "/" ? "active" : ""}`}>Home</a>
                                </Link>
                            </li>

                            {/* <li >
                                <Link href="/community">
                                    <a id="community" className={`fullMenuItem ${pathname === "/community" ? "active" : ""}`}>Community</a>
                                </Link>

                            </li>
                            <li >
                                <Link href="/services">
                                    <a id="services" className={`fullMenuItem ${pathname === "/services" ? "active" : ""}`}>Our Services</a>
                                </Link>

                            </li> */}
                            {!user &&
                                <li>
                                    <Link href="/signup">
                                        <a id="signup" className={`fullMenuItem ${pathname === "/signup" ? "active" : ""}`}>Sign Up</a>
                                    </Link>

                                </li>
                            }

                            {user &&
                                <>
                                    <li style={{ transform: "translateY(20%)", marginLeft: "5px" }}>
                                        <NotiBar />
                                    </li>

                                <li style={{ marginLeft: '30px', transform: "translateY(5%)" }}>
                                    <div className="avatarContainer">
                                        <UserAvatar content={content} />
                                    </div>

                                </li>

                            </>
                            }

                        </ul>
                    </div>
                </Col>
            </Row>
        </>
    )
}



export default Header
