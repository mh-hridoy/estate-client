import React from 'react'
import { Col, Form, InputNumber } from 'antd'


const NumberField = ({ label, htmlFor, name, placeholder, id, initVal }) => {
    const { Item } = Form

    return (
      <Col xs={12} sm={8} md={6} lg={4}>
        <Item label={label} name={name} initialValue={initVal}>
          <InputNumber
            controls = {false}
            placeholder={placeholder}
            style={{ margin: "0px", width: "100%" }}
          />
        </Item>
      </Col>
    )
}

export default NumberField
