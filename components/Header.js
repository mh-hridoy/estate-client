import React, { useState } from 'react'
import { Row, Col } from 'antd'
import Image from 'next/image'
import Hamburger from './Hamburger'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'

//need to create menu for big screen. customize bar for avatar and notification menu.


const Header = () => {
    const user = useSelector((state) => state.user.user)
    const router = useRouter()
    const { pathname } = router

    return (
        <>
            <Row className="header" justify="space-between">
                <Col xs={20} md={8} wrap="true" >
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
                <Col xs={4} md={0}>
                    <div className="hamBurger">
                        <Hamburger />
                    </div>
                </Col>
                <Col xs={0} md={12}>
                    <div className="fullMenu">
                        <ul className="fullMenuList">
                            <li>
                                <Link href="/" >
                                    <a id="home" name='/' className={`fullMenuItem ${pathname === "/" ? "active" : ""}`}>Home</a>
                                </Link>
                            </li>

                            <li >
                                <Link href="/community">
                                    <a id="community" className={`fullMenuItem ${pathname === "/community" ? "active" : ""}`}>Community</a>
                                </Link>

                            </li>
                            <li >
                                <Link href="/services">
                                    <a id="services" className={`fullMenuItem ${pathname === "/services" ? "active" : ""}`}>Our Services</a>
                                </Link>

                            </li>
                            {!user &&
                                <li>
                                    <Link href="/signup">
                                        <a id="signup" className={`fullMenuItem ${pathname === "/signup" ? "active" : ""}`}>Sign Up</a>
                                    </Link>

                                </li>
                            }

                            {user &&
                                <li>
                                    <Link href="/home/dashboard" >
                                        <a id="dashboard" name='/home/dashboard' className={`fullMenuItem ${pathname === "/home/dashboard" ? "active" : ""}`}>Dashboard</a>
                                    </Link>
                                </li>
                            }
                        </ul>
                    </div>
                </Col>
            </Row>
        </>
    )
}



export default Header
