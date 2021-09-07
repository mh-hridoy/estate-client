import React from 'react'
import { Col, Form, Checkbox } from 'antd'


const CheckField = ({ label, htmlFor, name, id, onChange, checked }) => {
    const { Item } = Form

    return (
        <Col xs={12} sm={8} md={6} lg={4} style={{ height: "65px" }} >
            <Item htmlFor={htmlFor} name={name} valuePropName="checked" >
                <Checkbox onChange={onChange} checked={checked} id={id}>{label}</Checkbox>
            </Item>
        </Col>
    )
}

export default CheckField
