import React from 'react'
import { BellOutlined } from '@ant-design/icons'
import { Popover, Badge } from 'antd';

const NotiBar = () => {

    const content = (
        <h3>Working on it</h3>
    )
    return (
        <Popover content={content} title="Notification" trigger="hover" placement="bottom">
            <Badge count={1}>

            <div className="notiIcon">
                    <BellOutlined style={{ fontSize: "20px" }} />
                </div>
            </Badge>

        </Popover>
    )
}

export default NotiBar
