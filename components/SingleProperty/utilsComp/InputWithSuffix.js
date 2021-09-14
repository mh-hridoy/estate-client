import React from 'react'
import { Col, Form, Input, Tooltip } from 'antd'
import { MonitorOutlined } from '@ant-design/icons'


const InputWithSuffix = ({ label, name, placeholder, initVal }) => {
    const { Item } = Form

    return (
        <Col xs={12} sm={8} md={6} lg={4} >
            <Item label={label} name={name} initialValue={initVal} >
                <Input placeholder={placeholder} style={{ margin: "0px" }} suffix={
                    <Tooltip title="Open Link">
                        <MonitorOutlined style={{ color: 'rgba(0,0,0,.45)', cursor: "pointer" }} />
                    </Tooltip>
                } />
            </Item>
        </Col>
    )
}

export default InputWithSuffix;
