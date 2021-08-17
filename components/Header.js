import React from 'react'
import { Row, Col } from 'antd'
import Image from 'next/image'
import Hamburger from './Hamburger'


const Header = () => {
    return (
        <>
            <Row className="header" >
                <Col span={20} wrap="true">
                    <div className="logo-section">
                        <div className="logo">
                            <Image src="/logo.png" alt="logo" width="40" height="40" />
                        </div>

                        <div className="nameinfo">
                            <div className="name">
                                <strong>Estates Community</strong>

                            </div>
                            <div className="number">
                                (+1)847-xxx-xxx</div>
                        </div>
                    </div>
                </Col>
                <Col xs={4} sm={0}>
                    <div className="hamBurger">
                        <Hamburger />
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default Header
