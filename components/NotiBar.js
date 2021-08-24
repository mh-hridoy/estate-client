import React from 'react'
import { BellOutlined } from '@ant-design/icons'
import { Popover } from 'antd';

const NotiBar = () => {

    const content = (
        <h3>Working on it</h3>
    )
    return (
        <Popover content={content} title="Notification" trigger="click" placement="bottom">
            <BellOutlined style={{ fontSize: "20px" }} />
        </Popover>
    )
}

export default NotiBar
