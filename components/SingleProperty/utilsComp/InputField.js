import React from 'react'
import { Col, Form, Input } from 'antd'


const InputField = ({ label, htmlFor, name, placeholder, id, initVal }) => {
    const { Item } = Form

    return (
        <Col xs={12} sm={8} md={6} lg={4}  >
            <Item label={label} name={name} initialValue={initVal}>
                <Input placeholder={placeholder} style={{ margin: "0px" }} />
            </Item>
        </Col>
    )
}

export default InputField
