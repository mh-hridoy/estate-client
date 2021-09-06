import React from 'react'
import { Col, Form, Input } from 'antd'


const InputField = ({ label, htmlFor, name, placeholder, id }) => {
    const { Item } = Form

    return (
        <Col xs={12} sm={8} md={6} lg={4}  >
            <Item label={label} htmlFor={htmlFor} name={name}>
                <Input allowClear placeholder={placeholder} id={id} style={{ border: "1px solid black", margin: "0px" }} />
            </Item>
        </Col>
    )
}

export default InputField
