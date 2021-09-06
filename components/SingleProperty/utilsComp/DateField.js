import React from 'react'
import { Col, Form, DatePicker } from 'antd'


const DateField = ({ label, htmlFor, name, placeholder, id }) => {
    const { Item } = Form

    return (
        <Col xs={12} sm={8} md={6} lg={4} >
            <Item label={label} htmlFor={htmlFor} name={name}>
                <DatePicker placeholder={placeholder} id={id} style={{ border: "1px solid black", margin: "0px", width: "100%" }} />
            </Item>
        </Col>
    )
}

export default DateField
