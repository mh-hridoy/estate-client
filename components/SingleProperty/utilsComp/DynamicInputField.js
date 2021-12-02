import React from 'react'
import { Col, Form, Input } from 'antd'


const DynamicInputField = ({ label, placeholder, fieldname, name, fieldKey, ...restField }) => {
    const { Item } = Form

    return (
        <Col xs={12} sm={8} md={6} lg={4}  >
            <Item {...restField} label={label} name={[name, fieldname]}>
                <Input placeholder={placeholder} style={{ margin: "0px" }} />
            </Item>
        </Col>
    )
}

export default DynamicInputField
