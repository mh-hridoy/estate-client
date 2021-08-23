import React from 'react'
import { Row, Col } from 'antd'
import Image from 'next/image'
import Hamburger from './Hamburger'


//need to create menu for big screen. customize bar for avatar and notification menu.


const Header = () => {
    return (
        <>
            <Row className="header" >
                <Col span={20} wrap="true">
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
            </Row>
        </>
    )
}



export default Header
